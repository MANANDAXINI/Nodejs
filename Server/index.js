const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()} ${req.url}:New Req Received \n`;
    fs.appendFile("log.txt",log,(error,data)=>{
        res.end("Hello From Server")
    }
        
)


    
    
    console.log(req.headers)
});

myServer.listen(8000, ()=>{

    console.log("server started")

})