const http = require("http");

const server=  http.createServer((req,res) =>
{
    res.writeHead(201,{"Content-Type": "index/html"});
    res.write("<h1>hello</h1>");
    res.end();
});

module.exports = {server};
