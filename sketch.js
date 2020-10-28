var car ;
var wall ;
var speed ;
var weight ;

function setup() {
  createCanvas(1000,400);
  speed = random(55,90) ;
  weight = random(400,1500) ;
  car = createSprite(50,200,50,50) ;
  car.shapeColor = "grey";
  wall = createSprite(900,200,20,height/2) ;
  wall.shapeColor = "white" ;
  car.velocityX = speed ;
}
function draw() {
  background(0);  
    (car.collide(wall)) ;
    if(car.x - wall.x & wall.width/2 + car.width/2 ) {
      car.shapeColor = "lightGreen" ;
    }
  

  drawSprites();
  }