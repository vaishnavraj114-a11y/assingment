// console.log("start");
// setTimeout(() =>{}
function orderfood(){
    setTimeout(() =>{
    console.log("item oderd");
    },1000);
    
}
function xx(){
    setTimeout(() =>{
    console.log("item perperd");
    },1000);
    
}
function xy(){
    setTimeout(() =>{
    console.log("item colectd");
    },1000);
    
}
orderfood(()=>{
    xx(()=>{
        xy(()=>{
            
        })
    })
})