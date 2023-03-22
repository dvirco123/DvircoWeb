console.log("Hello World");
//CACHING THE DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
//CACHING THE DOM
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomNumber = Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win!"
  console.log("win");
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = computerChoice + " beats " + userChoice + ". You lose!"
  console.log("lose");
}

function draw(userChoice, computerChoice) {
  result_p.innerHTML = computerChoice + " is the same as " + userChoice + ". It is a tie!"
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userChoice, computerChoice);
    break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(userChoice, computerChoice);
    break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      draw(userChoice, computerChoice);
    break;
  }
}

function main() {
rock_div.addEventListener('click', function(){
    game("rock");
  })
  paper_div.addEventListener('click', function(){
    game("paper");
  })
  scissors_div.addEventListener('click', function(){
    game("scissor");
  })
}
main();
