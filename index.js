const a=document.getElementById("hour");
const b=document.getElementById("minutes");
const c=document.getElementById("seconds");
const d=document.getElementById("ampm");

function upclock(){
    let e=new Date().getHours();
    let f=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="PM";

    if(e>12){
       e-e-12
        ampm="AM"
    }

    a.innerText=e;
    b.innerText=f;
    c.innerText=s;
    d,(innerText=ampm);
    setTimeout(()=>{  

    },1000)
}
upclock();