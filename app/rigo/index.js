const express=require('express');

const server= express();
server.get('/',(req,res)=>{
    const sessionStatus=true; // check session open or closed
    const responsedFile=sessionStatus ? req.path : "/login/index.html";
    res.sendFile(responsedFile,{root:__dirname});
});