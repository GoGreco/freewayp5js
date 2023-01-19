let points = 0;
let xPoints = 220;
let yPoints = 23;
let xHeart = [341,319,297];
let yHeart = [ 1, 1, 1];
let heartS = 21;
let gO = [29, 280, 345, 40];
let yW = [72, 280, 256, 40];

function score(){
  text(points, xPoints, yPoints);
  fill(255)
  textSize(28);
  if (yDog <= 28){
    points += 1;
    xDog = 200;
    yDog = 559;
    scored.play();
  }
  if (points == 10){
    image(youWin, yW[0], yW[1], yW[2], yW[3]);
    win.play();
    noLoop();
  }
}
function lifes(){
  if(heart == 2){
    image(life, xHeart[0], yHeart[0], heartS, heartS);
    image(life, xHeart[1], yHeart[1], heartS, heartS);
    image(life, xHeart[2], yHeart[2], heartS, heartS);
  }
  if(heart == 1){
    image(life, xHeart[1], yHeart[1], heartS, heartS);
    image(life, xHeart[2], yHeart[2], heartS, heartS);
  }
  if (heart == 0){
    image(life, xHeart[2], yHeart[2], heartS, heartS);
  }
  if (heart == -1){
    image(gameOver, gO[0], gO[1], gO[2], gO[3]);
    lose.play();
    noLoop();
  }
}