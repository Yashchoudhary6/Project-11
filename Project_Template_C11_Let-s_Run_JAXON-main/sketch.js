var pathImg, path;
var runnerImg, runner;

function preload(){
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.5;
  runner=createSprite(180,340,30,30);
  runner.addAnimation("runner",runnerImg);
  runner.scale=0.08;

  edges=createEdgeSprites();
}

function draw() {
  background('white');
  runner.bounceOff(edges);
  runner.x=mouseX

  if (path.y>200){
  path.y = path.height/2;
  }
  drawSprites();
}