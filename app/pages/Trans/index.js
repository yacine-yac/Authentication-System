function tokenBind(){
    const url=new URLSearchParams(window.location.search);
    const token=url.get('token');console.log('rrr',token)
    token && setCookie(token);
        token ?
      window.location.href="/profil"
    : window.location.href='/error?errorMessage=token identification failed access';
}
function setCookie(token){
   
        document.cookie=`Authorization=${token} `
 
}
tokenBind()