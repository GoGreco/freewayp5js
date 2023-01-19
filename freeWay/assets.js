let road;
let dog;
let life;
let carType1 = [1, 2, 3];
let carType2 = [1, 2, 3];
let collision;
let scored;
let win;
let lose;
let gameOver;
let youWin;


function preload(){
  road = loadImage('libraries/images/road.png');
  dog = loadImage('libraries/images/dog.png');
  life = loadImage('libraries/images/life.png')
  gameOver = loadImage('libraries/images/gameOver.png');
  youWin = loadImage('libraries/images/youWin.png');
  carType1[1] = loadImage('libraries/images/blueCarF.png');
  carType2[1] = loadImage('libraries/images/blueCar.png');
  carType1[2] = loadImage('libraries/images/redCarF.png');
  carType2[2] = loadImage('libraries/images/redCar.png');
  carType1[3] = loadImage('libraries/images/greenTruckF.png');
  carType2[3] = loadImage('libraries/images/greenTruck.png'); 
  collision = loadSound('libraries/sounds/hit.wav');
  scored = loadSound('libraries/sounds/Coin.mp3');
  win = loadSound('libraries/sounds/youWin.mp3');
  lose = loadSound('libraries/sounds/youLose.mp3');
}