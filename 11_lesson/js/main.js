// First Interactive Game

let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
  let playerChoice = prompt("Please enter rock, paper, or scissors.");

  if (playerChoice) {
    let player = playerChoice.trim().toLowerCase();

    if (
      player === "rock" ||
      player === "paper" ||
      player === "scissors"
    ) {
      computerChoice = Math.floor(Math.random() * 3 + 1);

      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        player === "rock" && computer === "scissors"
          ? "player wins!"
          : player === "rock" && computer === "paper"
          ? "computer wins!"
          : player === "paper" && computer === "rock"
          ? "player wins!"
          : player === "paper" && computer === "scissors"
          ? "computer wins!"
          : player === "scissors" && computer === "paper"
          ? "player wins!"
          : player === "scissors" && computer === "rock"
          ? "computer wins!"
          : "tie game!";

      alert(
        "player: " +
          player +
          "\ncomputer: " +
          computer +
          "\nresult: " +
          result
      );

      let playAgain = confirm("Play Again ?");

      playAgain ? location.reload() : alert("Ok, thanks for playing.");
    } else {
      alert("You didn't enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you changed your mind. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
