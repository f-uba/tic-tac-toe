var player, winner = null;
var selectedPlayer = document.getElementById('selectedPlayer');
var selectedWinner = document.getElementById('selectedWinner');

SetPlayer('X');

function SelectSquare(id){
    var square = document.getElementById(id);

    if (square.innerHTML !== '-') return;

    square.innerHTML = player;
    square.style.color = '#000';

    if (player === 'X') player = 'O';
    else player = 'X';

    SetPlayer(player);
    GameOver();
}

function SetPlayer(value){
    player = value;
    selectedPlayer.innerHTML = player;
}

function SetWinner(value){
    winner = value.innerHTML;
    selectedWinner.innerHTML = winner;
}

function ChangeSquareColor(squareOne, squareTwo, squareThree){
    squareOne.style.background = 
    squareTwo.style.background = 
    squareThree.style.background =
    '#0f0';
}

function CheckSequence(squareOne, squareTwo, squareThree){
     if (squareOne.innerHTML !== '-' &&
        squareOne.innerHTML === squareTwo.innerHTML &&
        squareTwo.innerHTML === squareThree.innerHTML) { 
            return true;
        }

        return false;
}

function NewGame()
{
    winner = null;
    selectedWinner.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var square = document.getElementById(i);
        square.style.background = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '-';
    }

    SetPlayer('X');
}

function GameOver(){
    var squareOne = document.getElementById(1);
    var squareTwo = document.getElementById(2);
    var squareThree = document.getElementById(3);
    var squareFour = document.getElementById(4);
    var squareFive = document.getElementById(5);
    var squareSix = document.getElementById(6);
    var squareSeven = document.getElementById(7);
    var squareEight = document.getElementById(8);
    var squareNine = document.getElementById(9);

    if (CheckSequence(squareOne, squareTwo, squareThree)) {
        ChangeSquareColor(squareOne, squareTwo, squareThree);
        SetWinner(squareOne);
        return;
    }

    if (CheckSequence(squareFour, squareFive, squareSix)) {
        ChangeSquareColor(squareFour, squareFive, squareSix);
        SetWinner(squareFour);
        return;
    }

    if (CheckSequence(squareSeven, squareEight, squareNine)) {
        ChangeSquareColor(squareSeven, squareEight, squareNine);
        SetWinner(squareSeven);
        return;
    }

    if (CheckSequence(squareOne, squareFour, squareSeven)) {
        ChangeSquareColor(squareOne, squareFour, squareSeven);
        SetWinner(squareOne);
        return;
    }

    if (CheckSequence(squareTwo, squareFive, squareEight)) {
        ChangeSquareColor(squareTwo, squareFive, squareEight);
        SetWinner(squareTwo);
        return;
    }

    if (CheckSequence(squareThree, squareSix, squareNine)) {
        ChangeSquareColor(squareThree, squareSix, squareNine);
        SetWinner(squareThree);
        return;
    }

    if (CheckSequence(squareOne, squareFive, squareNine)) {
        ChangeSquareColor(squareOne, squareFive, squareNine);
        SetWinner(squareOne);
        return;
    }

    if (CheckSequence(squareThree, squareFive, squareSeven)) {
        ChangeSquareColor(squareThree, squareFive, squareSeven);
        SetWinner(squareThree);
    }
}