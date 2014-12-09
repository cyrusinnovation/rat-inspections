# NYC Rat Inspections

While putting together [ratgraph.nyc](http://ratgraph.nyc), I noticed that the NYC department of health has another interesting data set about rats -- their rodent inspection results.  This data set includes inspections prompted by 311 complaints as well as pro-active inspections that are part of NYC's rat indexing program.

They've created an interactive map, the [Rat Information Portal](http://gis.nyc.gov/doitt/nycitymap/template?applicationName=DOH_RIP), which lets you browse the data, but the color coding only shows the results of the most recent inspection.  After doing some clicking around, I realized that this hides the fact that certain places are 'frequent offenders' with repeated visits by inspectors showing rat activity.

The data isn't due to be released on NYC Open Data web site until Spring of 2015 but thanks to Chris Whong, I've learned that you can put in a FOIL request to get access to almost any data set from the city.  It took a few weeks but I received a 53MB file of inspection data.

I decided to build a visualation that would explore the places where we just can't seem to get rid of the rats to see if any useful patterns emerge.  My first hypothesis is that these places will cluster together geographically, indicating that the entire block needs to be treated in order for the extermination effort to succeed.  My second hypothesis is that these places will be close to restaurants or other food establishments.
