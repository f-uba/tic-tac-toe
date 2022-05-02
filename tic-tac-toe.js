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