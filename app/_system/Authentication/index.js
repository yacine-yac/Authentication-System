/**
 * Handle Post Requests for Authenticat users
 */
const db=require("../user.json");
function Authentication(req,res,directoryRoot){
             // check her credentials
    const {email,psd}=req.body;
     
    if(email !=="undefined" && psd!=='undefined'){ 
       
       const responsedFile=(db.user.email===email && db.user.psd===psd ) ? "/profil/index.html" : "/login/index.html";
       const error=db.user.email===email ? db.user.psd===psd  ? null  : "Please check your password"  : "Please check your email"
       console.log(error)
       res.sendFile(responsedFile,{root:directoryRoot})
    }else{
       res.redirect('/error'); 
    }

}
module.exports={Authentication};

