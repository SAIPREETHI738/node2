const express=require("express"); //it will load the express package in our app

const app=express(); //creating app object

//or merge  const app=require("express")();
const port=9090;

//time to start a server



app.listen(port,()=>{
    console.log(`server Running At Port ${port}`);
})