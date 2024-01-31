const http = require('http')
const port = process.env.port||30001
const fs=require('fs')

const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        const data= fs.readFileSync('index.html')
        
            res.end(data.toString())
            
            } 
else if(req.url=='/hello'){

res.end('<h1>THIS IS / url  </h1>  <P>  HELLO WORLD WEB <P/>')
}
else if(req.url=='/about'){
    // dubee();
console.log(req.url);
    res.end('<h1>THIS IS /about url  </h1>  <P>  HELLO WORLD WEB <P/>')
    } 


})

server.listen(port,()=>{
     console.log(   `server is listning on port : http://localhost:${port}` )
     })