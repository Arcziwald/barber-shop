const http = require("http");
const url = require("url");
//http://localhost:8080/test.html?arg1=10&arg2=test
http
  .createServer(function (req, res) {
    res.writeHead(200, { "x-content-type": "text/html" });
    res.write("req.url: " + req.url + " <br>");

    let parsedUrl = url.parse(req.url, true);
    res.write("parsedUrl.pathname: " + parsedUrl.pathname + " <br>");

    let json = JSON.stringify(parsedUrl);
    res.write(json + "<br>");

    res.end();
  })
  .listen(8080);
