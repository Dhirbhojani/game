var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(800,400);
 wall = createSprite(1200, 200,thickness ,height/2);

thickness=random(22,83)
speed=random(233,321)
weight=random(30,52)





}

function draw() {
  background(255,255,255);  
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lBullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}






