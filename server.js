const express=require("express"); //it will load the express package in our app

const port=9090;
const app=express(); //creating app object

//or merge  const app=require("express")();


//time to start a server

 //Route creation

 app.get("/",(req,res,next)=>{

    //res.send(); -->res.write +res.end();
    //res.sendfile();
    //res.render();
    //res.json();
    // res.send("<h1>hello node</h1>")

    res.send({
        name:"preethi",
        age:23,
        course:"fullstack"
    })
 })

app.get("/user",(req,res,next)=>{

    //two different kinds of get request parameteres

    // query param //query string
    // path params

    console.log(req.query);
    // const name=req.query.name
    // const age=req.query.age
    // const course=req.query.course
    const {name,age,course}=req.query;

    res.send(`hey ${name} you are ${age} years old and course is ${course} `);
})

//path params
app.get("/admin/:data",function(req, res){

    const paramData =req.params.Data

    res.send(paramData);

})

app.listen(port,()=>{
    console.log(`server Running At Port ${port}`);
})