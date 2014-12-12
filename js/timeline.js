d3.timeline = function (selector, data) {
	var margin = {top: 10, right: 10, bottom: 20, left: 10},
	    height = 20;

	var wrapper = d3.select(selector);
	var width = parseInt(wrapper.style('width')) - margin.right - margin.left;

	var formatDate = d3.time.format("%Y");

	data.forEach(function (d) {
		d.date = new Date(d["INSP_DATE"]);
	});

	var extent = d3.extent(data, function(d) { return d.date; });

	var x = d3.time.scale().range([0, width]).domain(extent);

	var xAxis = d3.svg.axis().scale(x)
	  .orient("bottom").tickFormat(formatDate);

    xAxis.ticks(6);

    var colorScale = d3.scale.ordinal()
    	.range(['red','green','yellow'])
    	.domain([
    		'Active Rat Signs',
    		'Problem Conditions',
    		'Passed Inspection']);

	// Create the SVG drawing area
	var svg = wrapper
		.append("svg")
		.attr("class", "timeline")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	svg.selectAll(".inspection")
		.data(data)
	   .enter().append("circle")
	    .attr("class", "inspection")
	    .attr("cx", function(d) { return x(d.date); })
	    .attr("cy", 0)
	    .attr("r", 5)
	    .attr("fill", function(d) { return colorScale(d.RESULT);})
	    .attr("stroke", function(d) {  return d3.hsl(colorScale(d.RESULT)).darker(); });

	svg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);
};
