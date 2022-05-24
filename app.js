const drumLength = document.querySelectorAll(".drum").length;
 

for(let i=0; i<drumLength ;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        let inner = this.innerHTML;
       soundsplay(inner);
       buttonAnimation(inner);
    });
};
document.addEventListener("keypress",(Event)=>{
let keyname = Event.key;
soundsplay(keyname);
buttonAnimation(keyname);
});

function soundsplay (way){
    switch (way) {
        case "a":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();     
            break;
        case "b":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();   
            break;
        case "c":
             let snare = new Audio('sounds/snare.mp3');
            snare.play();   
            break;
        case "d":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();   
            break;
        case "e":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "f":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "g":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log(inner)
            break;
    }
}
function buttonAnimation(currentKey){
  let active = document.querySelector("."+currentKey);
  active.classList.add("pressed");
  setTimeout(function(){
active.classList.remove("pressed");      
  },100);
}