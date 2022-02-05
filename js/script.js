let playerInput;

function playGame(playerInput){
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);

    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);

    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        }
        else if(argMoveId == 2){
            return 'papier';
        }
        else if(argMoveId == 3){
            return 'nożyce';
        }
        else{
            return 'nieznany ruch';
        }
    }

    function displayResults(argComputerMove, argPlayerMove){
        console.log('Wywołanie funkcji displayResults');
        console.log('Ruchy:', argComputerMove, argPlayerMove);
        printMessage('Mój ruch to: ' + argComputerMove + ', twój ruch to: ' + argPlayerMove);

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }
        else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis!');
        }
        else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Ty przegrywasz!');
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis!');
        }
        else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            return printMessage('Ty przegrywasz!');
        }
        else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Ty przegrywasz!');
        }
        else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        }
        else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis!');
        }
    }

    displayResults(computerMove, playerMove);
}

let rockButton = document.getElementById('rock').addEventListener('click', function(){
    playGame(1);
});

let paperButton = document.getElementById('paper').addEventListener('click', function(){
    playGame(2);
});

let scissorsButton = document.getElementById('scissors').addEventListener('click', function(){
    playGame(3);
});

