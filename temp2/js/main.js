let userInput = document.querySelector('#userHand').value
userInput.toLowerCase()
const getUserChoice = (userInput) => {
  if (
    userInput === 'rock' ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    alert("error");
  }
};
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "you win!";
  }
  if (userChoice === computerChoice) {
    return "Tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "computer wins!";
    } else {
      return "you won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "computer wins!";
    } else {
      return "you won!";
    }
  }
};
const playGame = () => {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  console.log("you threw: " + userChoice);
  console.log("computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
document.querySelector('#throw').addEventListener('click', playGame)
