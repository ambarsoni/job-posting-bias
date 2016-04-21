var static = require('node-static');
var http = require('http');
var url = require ('url');
var file = new(static.Server)();
var fs = require("fs");
    if (process.env.REDISTOGO_URL) {
        var rtg   = require("url").parse(process.env.REDISTOGO_URL);
        var client = require("redis").createClient(rtg.port, rtg.hostname);

        client.auth(rtg.auth.split(":")[1]);
    } else {
        var redis = require("redis");
        var client = redis.createClient();
    }



var port;
if (process.env.PORT) {
    port = process.env.PORT;
} else {
    port =2016;
}
console.log(port);
/*
var app = http.createServer(function (req, res) {
    req.addListener('end', function(e, res) {
        if (e) {
            file.serveFile('/video.html', 404, {}, req, res);
        }
    });

}).listen(port); */
var server = http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
    var config_files = ["css", "font-awesome", "font-awesome-4.2.0", "fonts", "img", "js", "less", "mail"];

    filename = "frontend/index.html";

    console.log("Getting file: " + filename);

    fs.readFile(filename, "binary", function(err, file) {
              if(err) {
                          response.writeHead(500, {"Content-Type": "text/plain"});
                                  response.write(err + "\n");
                                          response.end();
                                                  return;
                                                        }

                    response.writeHead(200);
                          response.write(file, "binary");
                                response.end();
                                    });
}).listen(port);


