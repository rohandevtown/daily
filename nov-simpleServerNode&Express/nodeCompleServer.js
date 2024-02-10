const http = require("http");

const port = 8081;

const toDoList = ["Need to build func A", "Need Test func 123"]

http.createServer((req, res)=>{
    const {method, url} = req;
    // console.log(method, url);
    if(url === "/todos"){
        if(method === "GET"){
            res.writeHead(200);
            res.write(toDoList.toString())
        }else if(method === "POST"){
            let body = "";
            req
            .on("error",(err)=>{
                console.error(err);
            })
            .on("data", (c)=>{
                body += c;
                console.log("chuk: ",c);
            })
            .on("end", ()=>{
                body = JSON.parse(body);
                // console.log("data: ",body);
                let newToDo = toDoList;
                newToDo.push(body.name);
                console.log(newToDo);
            })
        } else if(method === "DELETE"){
            let body = "";
            req.on('error', (err)=>{
                console.error(err);
            }).on('data', (chunk)=> {
                body += chunk;
            }).on('end',()=>{
                body = JSON.parse(body);
                let deleteThis = body.item;

                for(let i=0; i<toDoList.length; i++){
                    if(toDoList[i]===deleteThis){
                        toDoList.splice(i,1);
                        break;
                    }
                }
            })
        }
        
        else{
            res.writeHead(501);
        }
    }else if(url === "/"){

    }
    res.end();
})
.listen(port,()=>{
    console.log(`NodeJs Server Started Running Succesfully on port ${port}`)
})
