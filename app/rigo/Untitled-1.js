// handle GET Requests
// server.get('/',(req,res)=>{
//             const sessionStatus=false; // check session open or closed
//             const responsedFile=sessionStatus ? req.path : "/login/index.html";
//             console.log(">>>>>auth",req.headers.authorization) 
//             res.sendFile(responsedFile,{root:__dirname}); 
// });

//handle POST Requests
server.post('/authentication',(req,res,next)=>{
   const {Authentication}=require('./_system/Authentication/index')
  const auth= new Authentication(req,res,{errorPage:'/error'});
  auth.identify().loadingResponse(__dirname,"/profil/index.html")
// auth.identify().ApiResponse();
});

// server.get('/error',(req,res)=>{
//     res.sendFile("/error/index.html",{root:__dirname})
// });
// server.get('/profil',(req,res)=>{
//   const {Authorization}=require('./_system/Authorization');
//   const auth=new Authorization(req);
//   auth.setAccessToken().check();
//  !auth.getStatus()
//                   ?res.sendFile("/profil/index.html",{root:__dirname})
//                   :res.send("There is no auth ")
 
// })