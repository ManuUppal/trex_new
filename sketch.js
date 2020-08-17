var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, CloudsGroup, ObstaclesGroup, count;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(300,180,600,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(300,190,600,10);
  invisibleGround.visible = false;
  
  CloudsGroup = new Group();
  ObstaclesGroup = new Group();
  console.log("hello");
  count =0;
}

function draw() {
  background(180);
  
  count = Math.round(getFrameRate()/4);
  text("Score:"+count,100,50);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  spawnClouds();
  spawnObstacles();
  
  trex.collide(invisibleGround);
  drawSprites();
}

function spawnClouds(){
 if(frameCount%60 === 0){
   var cloud =createSprite(400, 100, 20, 20);
   cloud.addImage(cloudImage);
   cloud.scale=0.5;
   cloud.velocityX=-3;
   
   trex.depth =cloud.depth;
   trex.depth=trex.depth+1;
   
   cloud.lifetime = 200;
   CloudsGroup.add(cloud);
 }
  
}
function spawnObstacles(){
 if(frameCount%60 === 0){
   var obstacle =createSprite(600, 160, 20, 20);
   obstacle.velocityX=-4;
   var num = Math.round(random(1,6));
   switch(num){
     case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
   obstacle.scale=0.5;
   
      
   obstacle.lifetime = 150;
   
 }
  
}