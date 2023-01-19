function setup() {
  createCanvas(400, 600);
}
function draw() {
  background(road);
  fullDog();
  for(let l = 0; l < yLane.length; l++){
    fullCar(l, xLane[l], yLane[l], carW[l], carH, l);   
    hitDog(l);
  }
  score(); 
  lifes();
}