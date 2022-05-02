var player = null;
var selectedPlayer = document.getElementById('selectedPlayer');
var squares = document.getElementsByClassName('square');

ChangePlayer('X');

function SelectSquare(id){
    var square = document.getElementById(id);

    if (square.innerHTML !== '-') return;

    square.innerHTML = player;
    square.style.color = '#000';

    if (player === 'X') player = 'O';
    else player = 'X';

    ChangePlayer(player);
}

function ChangePlayer(value){
    player = value;
    selectedPlayer.innerHTML = player;
}

function CheckSequence(squareOne, squareTwo, squareThree){
     if (squareOne !== '-' &&
        squareOne.innerHTML === squareTwo.innerHTML &&
        squareTwo.innerHTML === squareThree) { 
            return true;
        }

        return false;
}

function ChangeSquareColor(squareOne, squareTwo, squareThree){
    squareOne.style.color = 
    squareTwo.style.color = 
    squareThree.style.color =
    '#0f0';
}