/**
 * Handle Post Requests for Authenticat users
 */
const db=require("../user.json");

/**
 * class to identify user with credentials
 * It handle POST Requests with credentials name (email,psd)
 */
class Authentication {
         constructor(req,res,params={errorPage:{root:'',file:"",urlParams:''}}){
               this.req=req;
               this.res=res;
               this.state=false;
               this.session=null;
               this.params=params;
               this.errorMessage=null;
         }
         identify(){
            const data=this.req.body; 
            if(!data?.email || !data?.psd){this.errorMessage="Error, please define credentials"; return this;}

            // check user in database here


            if(db.user.email != data?.email){this.errorMessage="Error, This email doesn't exists";return this;}
            if(db.user.psd != data?.psd){this.errorMessage="Error, This password is not correct"; return this;}
             
             this.state=true;
             this.setSession();
             return this;
         }
         setSession(){
            if(this.state === false) return {ErrorMessage:'User not identify'} ;
            // set session here 
         }
         ApiResponse(){
           const response= this.state ? {
              session: this.session,
              status:true
            }
            :{
               errorMessage :this.errorMessage,
               status:false
            }
            const responseStatus= this.state ? 200 : 401;
            this.res.status(responseStatus).send(response);
         }

         loadingResponse(root,file){
            const {fetchedFile,baseRoot}={
               fetchedFile: this.state ? file : this.params.errorPage.file,
               baseRoot: this.state ? root : this.params.errorPage.root
            };
            this.res.sendFile(fetchedFile,{root:baseRoot});
         }
         destroySession(){
           // to closed session and making user unidentify 
            this.session=null;
            this.state=false;
            // redirect user to login page here
         }
}
module.exports={Authentication};

