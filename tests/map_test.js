// map_test.js
casper.test.begin('Test map and popup initialization', 4, function suite(test) {
    casper.start("http://localhost:8000/", function() {
        test.assertTitle("NYC Rat Inspections", "checking for page title");
        test.assertExists('#map', "checking for map div");
        test.assertExists('.leaflet-map-pane', "checking if leaflet initialized");
        casper.waitForSelector('.leaflet-overlay-pane svg', function () {
        	casper.click('.leaflet-overlay-pane svg g:first-child');
        	test.assertExists('.leaflet-popup', "checking for popup");
        }, function () {
        	casper.capture('failure.png');
        	casper.debugHTML();
        	test.fail("No svg overlay found");
        }, 5000);
    });

    casper.run(function() {
        test.done();
    });
});