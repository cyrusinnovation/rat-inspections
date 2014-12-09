# Mapping Rodent Inspection Data to Find the Most Infested Places in NYC

## The Story

While putting together ratgraph.nyc, I noticed that the NYC department of health has another interesting data set about rats -- their rodent inspection results.  This data set includes inspections prompted by 311 complaints as well as pro-active inspections that are part of NYC's rat indexing program.

They've created an interactive map which lets you browse the data, but the color coding only shows the results of the most recent inspection.  After doing some clicking around, I realized that this hides the fact that certain places are 'frequent offenders' with repeated visits by inspectors showing rat activity.

The data isn't due to be released on NYC Open Data web site until Spring of 2015 but thanks to Chris Whong, I've learned that you can put in a FOIL request to get access to almost any data set from the city.  It took a few weeks but I received a 53MB file of inspection data.

I decided to build a visualation that would explore the places where we just can't seem to get rid of the rats to see if any useful patterns emerge.  My first hypothesis is that these places will cluster together geographically, indicating that the entire block needs to be treated in order for the extermination effort to succeed.  My second hypothesis is that these places will be close to restaurants or other food establishments.

## About the Data

Rather than address or lat/long like the 311 data powering ratgraph, the inspection data uses the borough-block-lot (BBL) code to locate each inspection.  The NYC department of planning releases metadata and map shape files for the city as part of their PLUTO data set (http://www.nyc.gov/html/dcp/html/bytes/applbyte.shtml) and each tax lot is assigned a BBL code.

{{Show the head of the data table here}}

Looking at the inspection data, I found some quality issues that had to be addressed.  For some rows, the Block and/or Lot columns were missing.  The error was systemic and applied to borough-level inspections (i.e., those without a specific block or lot number).  Since this is a one-off project, I chose to clean the data up by shifting the columns for the affected rows using Excel.

I wanted to map the data using leaflet.js so that this could be a web-based visualization.  MapPLUTO is only published in the ESRI ArcGIS format.  There's a Leaflet plug-in that can handle this, but I'm worried that it will be too slow.  There's also a massive geoJson file that Zach Silverman created (http://data.nycprepared.org/dataset/nyc-map-pluto-only-bbl).  My initial tests at naively loading it into leaflet crashed the browser.  I also tried converting it to topoJson but it still didn't get small enough.

To build a heatmap that shows the 'frequent offenders', I don't need to show all of the BBL shapes on the map, though, I really only need to show the (hopefully) small subset of BBLs that have multiple inspections showing active rodent signs.

### A Digression about Shapefiles, GeoJSON, and Projections
As this post mentions[http://geospatialpython.com/2011/09/map-projections.html], projections are key.  The PLUTO shape files all use the Lambert conformal conic projection, which is indicated in the .prj file that is part of each shape file zip archive.  Leaflet.js uses the Web Mercator projection (EPSG: 3857), though.  To further confuse things, Leaflet actually requires GeoJSON files to have points given in latitude and longitude (EPSG 4326), which it then converts to Web Mercator.  Thanks to (this stackoverflow post)[http://gis.stackexchange.com/a/48952] for clearing that up.

Revised plan:  Get the PLUTO shape files for all of NYC.  Use ogr2ogr to convert them to GeoJSON with EPSG 4326 coordinates.  Thanks to Mike Bostock for his excellent (Let's Make a Map)[http://bost.ocks.org/mike/map/] tutorial.  Then run the data processing pipeline.

ogr2ogr -f GeoJSON -select Borough,ZipCode,Address,BldgClass,OwnerType,OwnerName,BldgArea,NumFloors,UnitsTotal,AssessTot,YearBuilt -t_srs EPSG:4326 manhattan.geojson MNMapPLUTO.shp

topojson -o most_active.topojson -p Borough,ActiveCount,CT2010,CB2010,ZipCode,Address,LandUse,BldgClass,OwnerType,OwnerName,NumBldgs,BldgArea,NumFloors,UnitsTotal,AssessTot,YearBuilt,HistDist --id-property BBL -- ./map_data/most_active.geojson


This diagram shows an overview of my data pipeline.  

I built the pipeline in Python using Pandas since it has great support for this sort of file munging.  The resulting geoJson file is much smaller and includes all of the metadata needed for display.  The final step is some JavaScript code

node --max_old_space_size=4000 `which topojson` -o pluto-obbl.topojson --id-property BBLF -- pluto-obbl.geojson

node --max_old_space_size=4000 `which topojson` -o bronx.topojson --id-property BBLF -- ~/Downloads/Bronx/BXMapPLUTO.shp

I created a CSV version of the building class codes.  The PDF that comes with 14v1 of the PLUTO data is out of sync with the data on the (nyc.gov site)[http://nycserv.nyc.gov/nycproperty/help/hlpbldgcode.html], so my CSV merges the differences, which are primarily that some codes exist in one and not the other and vice versa.

