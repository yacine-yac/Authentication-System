/**
 * Check Access Token for Authorization 
 */
class Authorization{
    /**
     * 
     * @param {*} req Request object 
     */
    constructor(req){
            this.accessToken=null;
            this.req=req;
            this.status=false;
            this.errorMessage=null;
    }
    setAccessToken(){
          if(!this.req.headers.Authorization){
                    this.status=true; 
                    this.errorMessage="Authorization Token doesn't provide"
                    return this;
            }
          this.accessToken=this.req.headers.Authorization;
          return this;
    }
    /**
     * 
     * @returns {boolean} status authorization status
     */
    getStatus(){
        return this.status;
    }
    check(){
            const {verify}=require('jsonwebtoken');
            verify(this.accessToken,process.env.JWT,(error,user)=>{
                    if(error){
                        this.status=false;
                    }else{
                        this.status=true;
                    }
            });
    }  
}
module.exports={Authorization}