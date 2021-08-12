var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
spawnApples()
rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}

function spawnApples(){
  if(frameCount % 50 === 0){
    apple = createSprite(Math.round(random(20,350)),10,10,10)
    apple.addImage("apples",appleImg);
    apple.velocityY =3;
    apple.scale =0.1
  }
}
