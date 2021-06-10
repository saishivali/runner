var pathImg,path;
var boy,boyImg


function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
boyImg=loadAnimation("runner-1.png,runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200,20,20)
path.addImage(pathImg)
path.velocityY=4
path.scale=1.2
boy=createSprite(300,300,20,20)
boy.addAnimation("running",boyImg)
}

function draw() {
  background(0);
  if (path.y> 400){
    path.y = path.height/4;
  }
drawSprites();
}
