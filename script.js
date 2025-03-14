//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdWidth = 34;
let birdHeight = 24;
let birdX = birdWidth/8;
let birdY = birdHeight/2;

let bird ={
    x : birdX,
    y : birdY,
    width : birdWidth,
    heigth :birdHeight,
}

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");

    //draw flappy bird
    context.fillStyle ="green";
    context.fillRect(bird.x, bird.y, bird.width, bird.heigth);
}