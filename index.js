for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    makeSound(this.innerHTML);
    toggleBlink(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  toggleBlink(event.key);
});

function makeSound(char) {
  switch (char) {
    case "w":
      document.querySelector(".w").classList.toggle("drum-bordergrow");
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      document.querySelector(".a").classList.toggle("drum-bordergrow");
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      document.querySelector(".s").classList.toggle("drum-bordergrow");
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      document.querySelector(".d").classList.toggle("drum-bordergrow");
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      document.querySelector(".j").classList.toggle("drum-bordergrow");
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      document.querySelector(".k").classList.toggle("drum-bordergrow");
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      document.querySelector(".l").classList.toggle("drum-bordergrow");
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(char);

  }
}

function toggleBlink(char) {
  var soundChar = ["w", "a", "s", "d", "j", "k", "l"];
  var guideClassList = document.querySelector(".guideline").classList;
  if (soundChar.includes(char)) {
    if (guideClassList.contains('blink_me')) {
      guideClassList.remove('blink_me');
    }
  } else {
    if (!guideClassList.contains('blink_me')) {
      guideClassList.add('blink_me');
    }
  }
}
