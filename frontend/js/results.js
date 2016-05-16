//Survey results part I

function init_results(company) {

	var width = 150,
	    height = 150,
	    padding = 10,
	    radius = Math.min((width-padding)/2, (height-padding)/2);

	var apple_cnts = [3,8,3]
	var colors = d3.scale.ordinal()
				.range(["pink", "palegreen","lightskyblue"]);

	var pie = d3.layout.pie()
	    .sort(null);

	var arc = d3.svg.arc()
	    .innerRadius(radius - 0)
	    .outerRadius(radius - 20);

	var svg = d3.select("#apple").append("svg")
	    .attr("width", width)
	    .attr("height", height)
	    .attr("align","center")
	    .append("g")
	    .attr("transform", "translate(" + (width-padding)/2 + "," + (radius) + ")");	

	var g = svg.selectAll(".arc")
				.data(pie(apple_cnts))
				.enter()
				.append("path")
				.attr("fill", function(d,i) { return colors(i); })
				.attr("d", arc)

	// d3.csv("survey1_overview.csv", function(RandCSV){
	// 	var colors = ["lightskyblue","pink","palegreen"]
	// 	var apple = [3,3,3,3,3,3,3,3,4,4,5,1,2]
	// 	// RandCSV.forEach(function(col, i) {
	// 	// 	if(col["RESULT"] != null) {

	// 	// 	}
	// 	// })
		
	// 	})
}

function post_results(company) {

	var width = 150,
	    height = 150,
	    padding = 10,
	    radius = Math.min((width-padding)/2, (height-padding)/2);

	var apple_cnts = [3,10,1]
	var colors = d3.scale.ordinal()
				.range(["pink", "palegreen","lightskyblue"]);

	var pie = d3.layout.pie()
	    .sort(null);

	var arc = d3.svg.arc()
	    .innerRadius(radius - 0)
	    .outerRadius(radius - 20);

	var svg = d3.select("#apple2").append("svg")
	    .attr("width", width)
	    .attr("height", height)
	    .attr("align","center")
	    .append("g")
	    .attr("transform", "translate(" + (width-padding)/2 + "," + (radius) + ")");	

	var g = svg.selectAll(".arc")
				.data(pie(apple_cnts))
				.enter()
				.append("path")
				.attr("fill", function(d,i) { return colors(i); })
				.attr("d", arc);

}

function change(company) {

	var width = 150,
	    height = 150,
	    padding = 10;

	var svg = d3.select("#apple_change").append("svg")
				.attr("width", width)
			    .attr("height", height)
			    .append("g")
			    ;

	var g = svg.append("text")
				.attr("x", width/2)
				.attr("y", height/2)
				.text("+10%")
				.style("text-anchor","middle")
				.style("font-size", "32px")
				.style("fill","palegreen")
			;

}