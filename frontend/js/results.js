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
				    .attr("transform", "translate(" + ((width-padding)/2 + 5) + "," + (radius) + ")");	

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
				.attr("x", width/2 - (padding+2))
				.attr("y", height/2)
				.text(company + ":")
				.style("text-anchor","middle")
				.style("text-decoration", "underline")
				.style("font-size", "18px")
				.style("fill","black");

	svg.append("text").attr("x",width/2 - (padding+2)).attr("y", height/2 + 16)
				.text(jobs[company])
				.style("text-anchor","middle")
				.style("font-size", "12px")
				.style("fill","gray");

}

function words(company) {
	var apple_change = ["Support -> Assist", "Responsible -> Accountable", "Response -> Reply"];
	var birch_change = ["Responsible -> Responsible", "Supporting -> Helping", "Understand -> Know"];
	var accenture_change = ["Collaborate -> Communicate", "Shareholder -> Company", "Interpersonal -> Social"];
	var redantler_change = ["Responsibilities -> Duties", "Collaborating -> Coordinating", "Understanding -> Knowledge"];
	var paypal_change = ["Active -> Active", "Aggressive -> Competitive", "Principles -> Principles", "Analytical -> Logical"];
	var google_change = ["Lead -> Run", "Challenges -> Challenges", "Individual -> Individual"];
	var facebook_change = ["Analysts -> Analysts", "Objectives -> Goals", "Challenging -> Demanding", "Driven -> Oriented"];
	var yahoo_change = ["Ambitious -> Motivated", "Principles -> Qualities", "Leadership -> Direction", "Lead -> Manage", "Analytic -> Interpretation"];
	var etsy_change = ["Collaborate -> Work", "Responsible -> Accountable", "Challenging -> Complicated", "Decisions -> Choices", "Communicate -> Share", "Honest -> Candid", "Opinion -> Viewpoint"];
	var oracle_change = ["Active -> Engaged", "Leadership -> Leadership", "Leading -> Cutting", "Kind -> Type", "Collaborative -> Collaborative", "Challenging -> Novel", "Responsibility -> Responsibility"];

	var width = 160,
	    height = 150,
	    padding = 15;

	var svg = d3.select("#" + company + "_words").append("svg")
				.attr("width", width)
			    .attr("height", height)
			    .append("g");

	var j = -30
	if (company == "APPLE") {
		apple_change.forEach(function(d,i) { 
			svg.append("text")
				.attr("x", width/2 - (padding))
				.attr("y",(height/2) + j)
				.text(d)
				.style("text-anchor","middle")
				.style("font-size", "10px")
				.style("fill","gray");

			j += 14;
		})	
	}

	var j = -30
	if (company == "BIRCHBOX") {
		birch_change.forEach(function(d,i) { 
			svg.append("text")
				.attr("x", width/2 - (padding))
				.attr("y",(height/2) + j)
				.text(d)
				.style("text-anchor","middle")
				.style("font-size", "10px")
				.style("fill","gray");

			j += 14;
		})	
	}

	var j = -30
	if (company == "ACCENTURE") {
		accenture_change.forEach(function(d,i) { 
			svg.append("text")
				.attr("x", width/2 - (padding) + 5)
				.attr("y",(height/2) + j)
				.text(d)
				.style("text-anchor","middle")
				.style("font-size", "10px")
				.style("fill","gray");

			j += 14;
		})	
	}

	var j = -30
	if (company == "REDANTLER") {
		redantler_change.forEach(function(d,i) { 
			svg.append("text")
				.attr("x", width/2 - (padding) + 5)
				.attr("y",(height/2) + j)
				.text(d)
				.style("text-anchor","middle")
				.style("font-size", "10px")
				.style("fill","gray");

			j += 14;
		})	
	}

	var j = -30
	if (company == "PAYPAL") {
		paypal_change.forEach(function(d,i) { 
			svg.append("text")
				.attr("x", width/2 - (padding))
				.attr("y",(height/2) + j)
				.text(d)
				.style("text-anchor","middle")
				.style("font-size", "10px")
				.style("fill","gray");

			j += 14;
		})	
	}

	var j = -30
	if (company == "GOOGLE") {
		google_change.forEach(function(d,i) { 
			svg.append("text")
				.attr("x", width/2 - (padding))
				.attr("y",(height/2) + j)
				.text(d)
				.style("text-anchor","middle")
				.style("font-size", "10px")
				.style("fill","gray");

			j += 14;
		})	
	}

	var j = -30
	if (company == "FACEBOOK") {
		facebook_change.forEach(function(d,i) { 
			svg.append("text")
				.attr("x", width/2 - (padding))
				.attr("y",(height/2) + j)
				.text(d)
				.style("text-anchor","middle")
				.style("font-size", "10px")
				.style("fill","gray");

			j += 14;
		})	
	}

	var j = -40
	if (company == "YAHOO") {
		yahoo_change.forEach(function(d,i) { 
			svg.append("text")
				.attr("x", width/2 - (padding))
				.attr("y",(height/2) + j)
				.text(d)
				.style("text-anchor","middle")
				.style("font-size", "10px")
				.style("fill","gray");

			j += 14;
		})	
	}

	var j = -55
	if (company == "ETSY") {
		etsy_change.forEach(function(d,i) { 
			svg.append("text")
				.attr("x", width/2 - (padding) + 2)
				.attr("y",(height/2) + j)
				.text(d)
				.style("text-anchor","middle")
				.style("font-size", "10px")
				.style("fill","gray");

			j += 14;
		})	
	}

	var j = -55
	if (company == "ORACLE") {
		oracle_change.forEach(function(d,i) { 
			svg.append("text")
				.attr("x", width/2 - padding + 6)
				.attr("y",(height/2) + j)
				.text(d)
				.style("text-anchor","middle")
				.style("font-size", "9.5px")
				.style("fill","gray");

			j += 14;
		})	
	}
}

function vs(batch,bias) {
		var data = [{bias: "female", female: 61, male:39},
					{bias: "male", female: 69, male: 31},
					{bias: "nuetral", female: 39, male: 61}];

		var data2 = [{bias: "female", female: 69, male:31},
					{bias: "male", female: 74, male: 26},
					{bias: "nuetral", female: 43, male: 57}];

		var colors = ["hotpink","dodgerblue"];

		//Extract relevant company overview data
		var rel_data = [];
		if (batch == 1){
			data.forEach(function (d,i) {
				if (d.bias == bias) {
					rel_data[0] = d.female;
					rel_data[1] = d.male;
				}
			});
		}
		// else {
		// 	data2.forEach(function (d,i) {
		// 		if (d.bias == bias) {
		// 			rel_data[0] = d.female;
		// 			rel_data[1] = d.male;
		// 		}
		// 	});
		// }

		//Create svg & donut
		var width = 150,
	    height = 150,
	    padding = 30,
	    radius = Math.min((width-padding)/2, (height-padding)/2);

	    var pie = d3.layout.pie().sort(null);

	    var arc = d3.svg.arc()
				    .innerRadius(radius - 0)
				    .outerRadius(radius - 20);

		var svg = d3.select("#" + bias + batch).append("svg")
				    .attr("width", width)
				    .attr("height", height)
				    .attr("align","center")
				    .append("g")
				    .attr("transform", "translate(" + ((width-padding)/2 + 5) + "," + (radius) + ")");	

		var g = svg.selectAll(".arc")
			.data(pie(rel_data))
			.enter()
			.append("path")
			.attr("fill", function(d,i) { return colors[i]; })
			.attr("d", arc);
}

