var drumButtons = document.querySelectorAll(".drum")

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    animateButton(event.key);
})



for(var i=0; i < drumButtons.length; i++){
    drumButtons[i].addEventListener("click", function (){
        playSound(this.innerHTML);
        animateButton(this.innerHTML);
    })
}

function playSound(key) {
    switch(key){
        case "w":
            var audioClip = new Audio('./sounds/crash.mp3');
            audioClip.play();
        break;

        case "a":
            var audioClip = new Audio('./sounds/kick-bass.mp3');
            audioClip.play();                
        break;
        case "s":
            var audioClip = new Audio('./sounds/snare.mp3');
            audioClip.play();
        break;

        case "d":
            var audioClip = new Audio('./sounds/tom-1.mp3');
            audioClip.play();                
        break;
        case "j":
            var audioClip = new Audio('./sounds/tom-2.mp3');
            audioClip.play();
        break;

        case "k":
            var audioClip = new Audio('./sounds/tom-3.mp3');
            audioClip.play();                
        break;
        case "l":
            var audioClip = new Audio('./sounds/tom-4.mp3');
            audioClip.play();
        break;

        default:console.log(buttonInnerHTML);
        
    }
}

function animateButton(currentKey) {
    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");
    
    setTimeout(function() {
        activebutton.classList.remove("pressed")
    }, 100)
}