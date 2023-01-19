let xLane = [0,0,0,0,0,0,0,0];
let yLane = [62, 122, 205, 261, 317, 377, 457, 515];
let xCarSpeed = [0,0,0,0,0,0,0,0];
let yCarSpeed = [0,0,0,0,0,0,0];

//Functions 
function blueMoves(car, l){
  xCarSpeed[l] = 5
  if (car == carType1[1]){ 
    xLane[l] += xCarSpeed[l];
    if (xLane[l] >= 400){
      xLane[l] = 1 - carW[0] ;
    }
  }
  if (car == carType2[1]){
    xLane[l] -= xCarSpeed[l]
    if(xLane[l]+carW[0] <= 0){
      xLane[l] = 400;
    }
  }
}
function redMoves(car, l){
  xCarSpeed[l] = 2.5
  if (car == carType1[2]){ 
    xLane[l] += xCarSpeed[l];
    if (xLane[l] >= 400){
      xLane[l] = 1 - carW[0] ;
    }
  }
  if (car == carType2[2]){
    xLane[l] -= xCarSpeed[l]
    if(xLane[l] <= 0){
      xLane[l] = 400;
    }  
  }
}
function greenMoves(car, l){
  xCarSpeed[l] = 3.2
  if (car == carType1[3]){ 
    xLane[l] += xCarSpeed[l];
    if (xLane[l] >= 400){
      xLane[l] = 1 - carW[1] ;
    }
  }
  if (car == carType2[3]){
    xLane[l] -= xCarSpeed[l]
    if(xLane[l] + carW[l] <= 0){
      xLane[l] = 400;
    }  
  }
}
