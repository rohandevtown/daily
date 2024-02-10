const express = require("express");

// init
const app = express();

app.use(express.json())

const port = 8081;

const toDoList = ["Need to build func A", "Need Test func 123", "rohan kinnal"]

app.get("/todos", (req, res)=> {
    // callback func
    res.status(200).send(toDoList)
})

app.post("/todos", (req, res)=>{
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "Task added succesfully"
    })
})

app.delete("/todos", (req, res)=>{
    const itemToDelete = req.body.item;

    toDoList.find((elem, index)=>{
        if(elem === itemToDelete){
            toDoList.splice(index, 1)
        }
    });
    res.status(204).send({
        message: `Deleted item ${itemToDelete}`
    })
})

app.all("/todos", (req, res)=>{
    res.status(501).send();
})

app.all("*", (req, res)=>{
    res.status(404).send();
})

app.listen(port, ()=>{
    console.log(`NodeJs Server Started Running Succesfully on ${port}`)
})