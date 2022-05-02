var player = null;
var selectedPlayer = document.getElementById('selectedPlayer');

ChangePlayer('X');

function SelectSquare(id){
    var square = document.getElementById(id);
    square.innerHTML = player;
    square.style.color = '#000';
}

function ChangePlayer(value){
    player = value;
    selectedPlayer.innerHTML = player;
}