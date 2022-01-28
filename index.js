const video = document.getElementById('video');
const btn = document.getElementById("btn");
const stopbtn= document.getElementById("stopbtn");
const live = document.getElementById("live");

// buton için event alarak yönlendirme yapıyoruz.

btn.addEventListener("click", ()=>{
    navigator.getUserMedia({
        video:true,
    }, stream => ( video.srcObject =stream), err => console.log(err));
    console.log("video açıldı");
    live.style.backgroundColor = "green";
    btn.style.color="green";
    stopbtn.style.color="white";
   
})

stopbtn.addEventListener("click", ()=>{
    video.srcObject=null; 
    live.style.backgroundColor = "red";
    console.log("video kapatıldı");
    btn.style.color="white";
    stopbtn.style.color="green";
})
