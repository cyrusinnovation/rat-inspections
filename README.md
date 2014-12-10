# NYC Rat Inspections

While putting together [ratgraph.nyc](http://ratgraph.nyc), I noticed that the NYC department of health has another interesting data set about rats -- their rodent inspection results.  This data set includes inspections prompted by 311 complaints as well as pro-active inspections that are part of NYC's rat indexing program.

They've created an interactive map, the [Rat Information Portal](http://gis.nyc.gov/doitt/nycitymap/template?applicationName=DOH_RIP), which lets you browse the data, but the color coding only shows the results of the most recent inspection.  After doing some clicking around, I realized that this hides the fact that certain places are 'frequent offenders' with repeated visits by inspectors showing rat activity.

The data isn't due to be released on NYC Open Data web site until Spring of 2015 but thanks to Chris Whong, I've learned that you can put in a FOIL request to get access to almost any data set from the city.  It took a few weeks but I received a 53MB file of inspection data.

I decided to build a visualation that would explore the places where we just can't seem to get rid of the rats to see if any useful patterns emerge.  My first hypothesis is that these places will cluster together geographically, indicating that the entire block needs to be treated in order for the extermination effort to succeed.  My second hypothesis is that these places will be close to restaurants or other food establishments.

## Testing

For the visualization itself, I decided that there's not enough code and too many external dependencies to make unit testing it worthwhile.  I'd need to use too many mocks which would make the tests a bit useless.  Instead I decided on a "happy path" functional test using [CasperJS](http://casperjs.org/) and [PhantomJS](http://phantomjs.org/).

To run the tests, install Casper and Phantom per their getting started pages (for Mac folks, there are Homebrew formulas for each).  Then start a web server in the root directory of the project.  I like python's simple one:

'''bash
python -m SimpleHTTPServer
'''

Finally, run the tests:

'''bash
casperjs test tests/map_test.js
'''
