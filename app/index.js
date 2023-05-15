const express=require('express');
const server=new express();

server.get('/',(req,res)=>{
const responsedFile="/login/index.html";
            res.sendFile(responsedFile,{root:__dirname});
});
server.post('/',(req,res)=>{

});
server.listen(3000);