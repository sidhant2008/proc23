var mr,fr
var gameObject1;
var gameObject2;
var gameObject3;
var gameObject4;

function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50);
  fr = createSprite(200, 200, 50, 50);

gameObject1 = createSprite(100,100,50,50);
gameObject2 = createSprite(200,100,50,50);
gameObject3 = createSprite(300,200,50,50);
gameObject4 = createSprite(400,200,50,50);

mr.shapeColor = "green";
fr.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

mr.x = mouseX;
mr.y = mouseY;

gameObject1.shapeColor="green";
gameObject2.shapeColor="green";
gameObject3.shapeColor="green";
gameObject4.shapeColor="green";

if(isTouching(mr,fr)){
  mr.shapeColor = "red";
  fr.shapeColor = "red";

}
else{
  mr.shapeColor = "green";
  fr.shapeColor = "green";
}

if(isTouching(mr,gameObject1)){
  mr.shapeColor ="red";
gameObject1.shapeColor = "red";
}

if(isTouching(mr,gameObject2)){
  mr.shapeColor ="red";
gameObject2.shapeColor = "red";
}

if(isTouching(mr,gameObject3)){
  mr.shapeColor ="red";
gameObject3.shapeColor = "red";
}

if(isTouching(mr,gameObject4)){
  mr.shapeColor ="red";
gameObject4.shapeColor = "red";
}

  drawSprites();
}

