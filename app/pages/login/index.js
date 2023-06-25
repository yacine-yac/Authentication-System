 
document.getElementById('log-submit').addEventListener('click',function handler(e){
    e.preventDefault(); 
    const data=new FormData(document.getElementById('log-form'));
    const xhr=new XMLHttpRequest();
    xhr.open('POST',"/authentication");
    xhr.onreadystatechange=function (){
        if(this.status==200 && this.readyState==4){
                console.log(this.response);
                const {session=null,status,errorMessage=null}=JSON.parse(this.response);
                window.location.href=status ? `/trans?token=${session}` : `/error?message=${errorMessage}`;
        }
    }
    xhr.send(data);
    console.log('fsdfs',data)
});