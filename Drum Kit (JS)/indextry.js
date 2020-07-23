// Detecting Button press

var list = document.querySelectorAll(".drum");
var len = list.length;
console.log(this.len);
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    // this.classList.add("change-color");        THIS CAN ALSO HAVE WORKED

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);       // <button class="w drum pressed change-color">w</button>

    console.log(this);  //NORMAL WHEN LOGGED this  <button class="w drum" style="color: rgb(255, 255, 255);">w</button>

    console.log(this.innerHTML);           // O/P =w
  });
}


// Detecting Key press

document.addEventListener("keydown", function(event) {   // Event here is a variable
  console.log(event); // o/p KeyboardEvent {isTrusted: true, key: "k", code: "KeyK", location: 0, ctrlKey: false, …}
  makeSound(event.key);
  buttonAnimation(event.key);
  // changeColor(event.key);
});


// Function to make sound

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");    //tom1 is an object created Audio is a const func.
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);  //activeButton is the class name

  activeButton.classList.add("pressed");

  setTimeout(function() {                                      //For setting time to trigger the class
    activeButton.classList.remove("pressed");                  //pressed is a custom class made by mee
  }, 100);

  activeButton.classList.add("change-color");                  //For that white effect

  setTimeout(function() {                                      //For setting time to trigger the class
    activeButton.classList.remove("change-color");             //change-color is a custom class made by mee
  }, 175);

}
