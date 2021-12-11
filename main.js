var video=document.querySelectorAll("video");
var inp=document.querySelector("idCall");

// function copyId(){
// 
// }
// function call(){
    // var id=inp.value;
    // alert('no users with id = '+id);
    // 
// }

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video :true , audio :true }).then(function(stream){
        video[0].srcObject = stream;
        video[1].srcObject = stream;
        video.play();
    });
}
