const express=require('express');
// require('dotenv').config();
// console.log('>>>>',process.env.SECRET)

// create server
const server= express();

// use multer
const multer = require('multer');

// parse incoming POST data
// server.use(express.json());
// server.use(express.urlencoded());
// parse cookies 
const cookieParser=require('cookie-parser')
server.use(cookieParser());

// router handler
const router=require('./_system/routing/index');
const {pageRouting}=router;
const pagerouting=new pageRouting(__dirname);
//define get request routes 
server.get('/api',(req,res)=> res.send({"message":"Hello APi"}));

// define static requests
server.use(express.static('pages'));

// index app page 
// server.get('/',(req,res)=>{express.static('pages/login')});
// Handle post Requests
server.post('/authentication',multer().none(),(req,res)=>{
const {Authentication}=require('./_system/Authentication/index')
const auth= new Authentication(req,res,{errorPage:'/error'});
//  auth.identify().loadingResponse(__dirname,"/profil/index.html") 
auth.identify().ApiResponse();
});

server.listen(3000);