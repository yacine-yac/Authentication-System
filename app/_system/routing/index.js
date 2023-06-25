const { existsSync } = require("fs"); 

class pageRouting{
    constructor(root,erroPage="error.html"){
        this.root=root;
        this.errorPage=erroPage;
    }
    handle(req,res){

             const path=req.url; 
             const check= existsSync(`${this.root}/pages${path}/index.html`)
                check ? res.sendFile(`pages/${path}/index.html`,{root:this.root})
                      : res.sendFile(this.errorPage,{root:this.root})
    }

}
module.exports={pageRouting};