let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
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
        return 'Ty wygrywasz!';
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        return printMessage('Remis!');
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return printMessage('Ty przegrywasz!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        return printMessage('Remis!');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return printMessage('Ty przegrywasz!');
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return printMessage('Ty wygrywasz!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return printMessage('Ty przegrywasz!');
    }
    else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return printMessage('Ty wygrywasz!');
    }
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        return printMessage('Remis!');
    }
}

displayResults(computerMove, playerMove);