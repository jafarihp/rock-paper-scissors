let userScore = 0;
let cpuScore = 0;

const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");

const restart = document.getElementById("restart");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCpuChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  swal("You Win!", `Computer Choose "${cpuChoice}"`, "success");
}

function lose(userChoice, cpuChoice) {
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  swal("You Lose!", `Computer Choose "${cpuChoice}"`, "error");
}

function draw(userChoice, cpuChoice) {
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  swal("Draw!!!", `Computer Choose "${cpuChoice}"`, "warning");
}

function play(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, cpuChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, cpuChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, cpuChoice);
      break;
  }
}

function app() {
  rock_div.addEventListener("click", function () {
    play("rock");
  });

  paper_div.addEventListener("click", function () {
    play("paper");
  });

  scissors_div.addEventListener("click", function () {
    play("scissors");
  });
}

function restartGame() {
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
}
restart.addEventListener("click", restartGame);

app();
