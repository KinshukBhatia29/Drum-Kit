
var NODB = document.querySelectorAll(".drum").length;

for(var i=0;i<NODB;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonIH = this.innerHTML;
    handleClick(buttonIH);
    buttonAni(buttonIH);

});
}
document.addEventListener("keypress",function(event){
    handleClick(event.key);
    buttonAni(event.key);
});
function handleClick(key)
{
    
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var clare=new Audio("sounds/crash.mp3");
            clare.play();
            break;

        case "l":
            var kickbass=new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
    
        default:
            console.log(buttonIH);
    }
};
function buttonAni(ckey)
{
var activebutton=document.querySelector("." + ckey);
activebutton.classList.add("pressed");
setTimeout(function()
{
    activebutton.classList.remove("pressed");
},100);
}