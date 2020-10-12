var fixedRectangle,movingRectangle;

function setup() {
  createCanvas(1200,800);
 fixedRectangle = createSprite(200,200,50,80);
 movingRectangle = createSprite(400,200,80,30);

 fixedRectangle.shapeColor = "green";
 movingRectangle.shapeColor = "green";

 fixedRectangle.debug = true;
 movingRectangle.debug = true;

 gameObject1 = createSprite(100,100,50,50);
 gameObject2 = createSprite(200,100,50,50);
 gameObject3 = createSprite(300,100,50,50);
 gameObject4 = createSprite(400,100,50,50);

gameObject1.shapeColor = "green";
gameObject2.shapeColor = "green"
gameObject3.shapeColor = "green"
gameObject4.shapeColor = "green"
}

function draw() {
  background(0,255,255);  

  movingRectangle.x = mouseX;
  movingRectangle.y = mouseY;

 if (isTouching(movingRectangle,gameObject3)){
movingRectangle.shapeColor = "blue";
    gameObject3.shapeColor = "blue";
 }
 else{
  movingRectangle.shapeColor = "green";
  gameObject3.shapeColor = "green";
}
  drawSprites();
}

function isTouching(Object1,Object2){ 
   if(Object1.x-Object2.x < Object2.width/2 + Object1.width/2 && 
    Object2.x - Object1.x < Object2.width/2 + Object1.width/2 &&
    Object2.y - Object1.y < Object2.height/2 + Object1.height/2 &&
    Object1.y - Object2.y < Object2.height/2 + Object1.height/2 ){
    return true;
  } 
else {
return false;
}
}