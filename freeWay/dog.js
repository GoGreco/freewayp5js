//Variables
//dog;
let xDog = 200;
let yDog = 559;
let dogW = 50;
let dogH = 38;
let xDogSpeed = 0;
let yDogSpeed = 0;
let heart = 2;
//Functions
function moveDog() {
  if (keyIsDown(87)) {
    yDog += yDogSpeed;
    yDogSpeed = -2;
  }
  if (keyIsDown(83)) {
    yDog += yDogSpeed;
    yDogSpeed = 2;
  }
  if (keyIsDown(68)) {
    xDog += xDogSpeed;
    xDogSpeed = 2;
  }
  if (keyIsDown(65)) {
    xDog += xDogSpeed;
    xDogSpeed = -2;
  }
  //border collision 
  if (xDog <= 0) {
    if(keyIsDown(65)){
      xDogSpeed = 0;
    }
  }   
  if (xDog+50 >= 400) {
    if(keyIsDown(68)){
      xDogSpeed = 0;
    }
  }
  if (yDog + dogH >= 600) {
    if(keyIsDown(83)){
      yDogSpeed = 0;
    }
  }
}
function fullDog(){
  moveDog();
  image(dog, xDog, yDog, dogW, dogH);
}
   
function hitDog(l){
  let hit = false;
    if (xDog + dogW >= xLane[l]&&
    xDog <= xLane[l] + carW[l]&&
    yDog + dogH >= yLane[l]&&
    yDog <= yLane[l] + carH){
    hit = true
      if (hit == true){
      xDog = 200;
      yDog = 559;
      heart -= 1;
      collision.play();
      }
    }
}