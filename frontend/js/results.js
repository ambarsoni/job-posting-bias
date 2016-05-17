//Survey results part I

function overview_results(batch, company) {
	var csv_name = "js/survey" + batch + "_overview.csv";
	d3.csv(csv_name, function(RandCSV){
		var data = [];
		var colors = ["pink", "palegreen","lightskyblue"];

		//Populate data
		RandCSV.forEach(function(companyRow, i) {
			if(companyRow["COMPANY"] != null) {
				data.push({
					name: companyRow["COMPANY"],
					overall_ranks: [companyRow["NUM1"],
									companyRow["NUM2"],
									companyRow["NUM3"],
									companyRow["NUM4"],
									companyRow["NUM5"]]
				});
			}
		});

		//Extract relevant company overview data
		var rel_data = [];
		data.forEach(function (d,i) {
			if (d.name == company) {
				rel_data[0] = d.overall_ranks[0]*1 + d.overall_ranks[1]*1;
				rel_data[1] = d.overall_ranks[2]*1;
				rel_data[2] = d.overall_ranks[3]*1 + d.overall_ranks[4]*1;
			}
		});

		//Create svg & donut
		var width = 150,
	    height = 150,
	    padding = 30,
	    radius = Math.min((width-padding)/2, (height-padding)/2);

	    var pie = d3.layout.pie().sort(null);

	    var arc = d3.svg.arc()
				    .innerRadius(radius - 0)
				    .outerRadius(radius - 20);

		var svg = d3.select("#" + company).append("svg")
				    .attr("width", width)
				    .attr("height", height)
				    .attr("align","center")
				    .append("g")
				    .attr("transform", "translate(" + (width-padding)/2 + "," + (radius) + ")");	

		var g = svg.selectAll(".arc")
			.data(pie(rel_data))
			.enter()
			.append("path")
			.attr("fill", function(d,i) { return colors[i]; })
			.attr("d", arc);
	})
}

function comp(company) {
	var width = 150,
	    height = 150,
	    padding = 10;

	var svg = d3.select("#" + company + "_co").append("svg")
				.attr("width", width)
			    .attr("height", height)
			    .append("g")
			    ;

	var g = svg.append("text")
				.attr("x", width/2)
				.attr("y", height/2)
				.text(company)
				.style("text-anchor","middle")
				.style("font-size", "20px")
				.style("text-decoration","underline")
				.style("fill","black")
			;

}

function job(company) {
	var jobs = {APPLE:"Program Manager",
				BIRCHBOX: "Developer",
				ACCENTURE: "Java Developer",
				REDANTLER: "Web Engineer",
				PAYPAL: "Java Developer",
				GOOGLE: "Partner Manager; YouTube",
				FACEBOOK: "Data Engineer",
				YAHOO: "Experience Designer",
				ETSY: "Product Designer",
				ORACLE: "Developer"};

	var width = 160,
	    height = 150,
	    padding = 10;

	var svg = d3.select("#" + company + "_job").append("svg")
				.attr("width", width)
			    .attr("height", height)
			    .append("g")
			    ;

	var g = svg.append("text")
				.attr("x", width/2)
				.attr("y", height/2)
				.text(jobs[company])
				.style("text-anchor","middle")
				.style("font-size", "12px")
				.style("fill","black")
			;

}

function change(company) {

	var width = 150,
	    height = 150,
	    padding = 10;

	var svg = d3.select("#" + company + "_change").append("svg")
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