let computerMove = 'nieznany ruch';
let playerMove = 'nieznany ruch'
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to ' + playerMove + ', to wygrywasz!');

let randomFraction = Math.random();
printMessage('Wylosowany ułamek to: ' + randomFraction)

let calculation = randomFraction * 3 + 1;

printMessage('Ułamek pomnozony przez 3 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);

let randomNumber = Math.floor(Math.random() * 3 + 1);

printMessage('Licza losowa pomnozona przez 3 i powiększona o 1, zaokrąglona w dół to: ' + randomNumber);

let min = 11;
let max = 29;

let randomDigit = Math.floor(Math.random() * (max - min)) + min;

printMessage('Licza losowa z przedziałku 11-29 to: ' + randomDigit);

if(1 > 2){
	printMessage('Niesamowite! Jeden jest większe niż dwa!!!');
} else if (1 == 2) {
	printMessage('Dziwne – jeden jest równe dwa?!');
} else {
	printMessage('Wszystko po staremu, jeden jest mniejsze niż dwa.');
}

console.log('Wylosowana liczba to: ' + randomNumber);

if(randomNumber == 1){
    computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else if(randomNumber == 3){
    computerMove = 'nożyce';
}
else{
    computerMove = 'nieznany ruch';
}


printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == 2){
    playerMove = 'papier';
}
else if(playerInput == 3){
    playerMove = 'nożyce';
}
else{
    playerMove = 'nieznany ruch';
}


printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}
else if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
}
else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ty przegrywasz!');
}
else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
}
else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
}
else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}
else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
}
else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}
else if(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
}