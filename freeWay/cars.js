//Variables
//carType 1 é azul;
//carType 2 é vermelho;
//carType 3 é verde;
//carType1 is going right and carType2 is going left;
let carW = [42, 42, 56, 42, 42, 56, 42, 42];
let carH = 30;

function showCar(car, x, y, w, h){
  image(car, x, y, w, h);
}
function fullCar(l, x, y, w, h, i){
  i = l;
  if (l == 0){
    car = carType1[1];
  }
  if (l == 1){
    car = carType2[2];
  }
  if (l == 2){
    car = carType1[3];
  }
  if (l == 3){
    car = carType1[2];
  }
  if (l == 4){
    car = carType2[1];
  }
  if (l == 5){
    car = carType2[3];
  }
  if (l == 6){
    car =carType1[2];
  }
  if (l == 7){
    car = carType2[1];
  }
  showCar(car, x, y, w, h)
  if (car == carType1[1]|| car == carType2[1]){
    blueMoves(car, l);
  }
  if (car == carType1[2]|| car == carType2[2]){
    redMoves(car, l);
  }
  if (car == carType1[3]|| car == carType2[3]){
    greenMoves(car, l);
  }
}