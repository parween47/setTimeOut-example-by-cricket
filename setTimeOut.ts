function cricketMatch(callback:()=>void){
    console.log("The match is to be start.😎");
    setTimeout(()=>{
        console.log("India won the toss! and decided to bat.🙄");
        callback()
    },3000)
}
function indiaRun(){
    console.log("Team India is all out in 16 over by scoring 150 runs😅");
    setTimeout(()=>{
        console.log("It is raining!");
    },4000)
    setTimeout(()=>{
        console.log("Pakistan won the match by flying colors!🤩");
    },5500)   
}
cricketMatch(indiaRun)