{
  function playGame(playerInput) {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("Gracz wpisał: " + playerInput);

    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else {
        return "nieznany ruch";
      }
    };

    const displayResults = function (argComputerMove, argPlayerMove) {
      console.log("Wywołanie funkcji displayResults");
      console.log("Ruchy:", argComputerMove, argPlayerMove);
      printMessage(
        "Mój ruch to: " + argComputerMove + ", twój ruch to: " + argPlayerMove
      );

      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
        printMessage("Remis!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
        printMessage("Ty przegrywasz!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
        printMessage("Remis!");
      } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
        return printMessage("Ty przegrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
        printMessage("Ty przegrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
        printMessage("Remis!");
      }
    };

    displayResults(computerMove, playerMove);
  }

  document.getElementById("rock").addEventListener("click", function () {
    playGame(1);
  });
  document.getElementById("paper").addEventListener("click", function () {
    playGame(2);
  });

  document.getElementById("scissors").addEventListener("click", function () {
    playGame(3);
  });
}
