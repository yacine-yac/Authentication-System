const express=require('express');

// require session Managment
const session=require('express-session');
const server= express();

// parse incoming POST data
server.use(express.json())
server.use(express.urlencoded());

// handle GET Requests
server.get('/',(req,res)=>{
            const sessionStatus=true; // check session open or closed
            const responsedFile=sessionStatus ? req.path : "/login/index.html";
            res.sendFile(responsedFile,{root:__dirname});
});

// handle POST Requests
server.post('/',(req,res,next)=>{
   const {Authentication}=require('./_system/Authentication/index')
   Authentication(req,res,__dirname);
});

server.get('/error',(req,res)=>{
    res.send('error 404 ):')
})
server.listen(3000);