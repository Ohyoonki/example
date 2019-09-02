const express = require("express")
const app = express();
let users = [];
let user = null;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(3000);

app.get("/",(req,res) => {
   
    res.send("hi")
});

app.get("/users",(req,res) => {
  
    res.send("user " +user.name+" get");
 
});

app.get("/users/:id",(req,res) => {
    if(user.id == req.params.id){
        res.send("user "+user.name+" get");
    }
   
    res.send("user id" +req.params.id+"가 존재하지 않습니다.");
});

app.post("/users",(req,res) => {
    user = req.body
    res.send("user add" +user.name);
});

app.put("/users/:id",(req,res) => {
    if(user.id == req.params.id){
    user = req.body
    res.send("user" +user.name+" edit");
    }
    res.send("user id" +req.params.id+"가 존재하지 않습니다.");
});

app.delete("/users/:id",(req,res) => {
   
    res.send("user" +req.params.id+" delete");
    
  
});