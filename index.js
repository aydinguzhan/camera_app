const video = document.getElementById('video');
const btn = document.getElementById("btn");
const stopbtn= document.getElementById("stopbtn");


btn.addEventListener("click", ()=>{
    navigator.getUserMedia({
        video:true,
    }, stream => ( video.srcObject =stream), err => console.log(err))
    console.log("video açıldı")
})

stopbtn.addEventListener("click", () =>{
    stopbtn.addEventListener("click", ()=>{
        video.srcObject=null; 
        console.log("video kapatıldı")
    })
})

