"use strict";
let inpOfGuess = document.querySelector(".guess");
let checkBtn = document.querySelector(".btn-checker");
let message = document.querySelector(".message");
let number = document.querySelector(".number");
let score = document.querySelector(".score");
let again = document.querySelector(".again-btn");
function gamer(e) {
  e.preventDefault();
  let randomNumGen = Math.ceil(Math.random() * 6);
  let body = document.body.style;
  console.log(randomNumGen);

  if (!inpOfGuess.value) {
    message.textContent = "input field must not be empty";
  } else if (inpOfGuess.value > randomNumGen) {
    message.textContent = "you guessed higher";
    number.textContent = randomNumGen;
    score.textContent--
    body.backgroundColor = "blue";
  }else if(inpOfGuess.value < randomNumGen){
    message.textContent = "you are lower";
    number.textContent = randomNumGen;
    score.textContent--;
    body.backgroundColor = "yellow";
  }else if(Number(inpOfGuess.value)===randomNumGen){
    message.textContent = "you guessed right 👍";
    body.backgroundColor = "green";
  }
  if(score.textContent < 1){
    checkBtn.setAttribute("disabled", "disabled");
    message.textContent = "game over restart ";
    checkBtn.style.backgroundColor = "grey";
    checkBtn.style.cursor = "no-drop"
  }
  
}
checkBtn.addEventListener("click", gamer);

 
function restart(){
  message.textContent = "start guessing ";
  number.textContent = "?";
  score.textContent = 6;
  inpOfGuess.value = ""
  let body = document.body.style
  body.backgroundColor = "red";

}
again.addEventListener("click",restart)

