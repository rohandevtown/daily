const http = require("http");

const port = 8081;

http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h1>Hello World rohan kinnal123456!</h1>");
    res.end();
})
.listen(port,()=>{
    console.log(`NodeJs Server Started Running Succesfully on port ${port}`)
})
