var monkey,ground,bc,bcc;

var monkey1, invisibleGround, groundImage;

var obstaclesGroup, obstacleImage,obstacle1;

var score;


function preload(){
  monkey1 = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  groundImage = loadImage("ground2.png");
  obstacle1=loadImage("stone.png");
  bcc=loadImage("Capture.PNG")
}
   


function setup() {
  createCanvas(600, 500);

  bc = createSprite(0,0,600,500);
  bc.addAnimation("running", bcc);
  bc.scale=1.1;
  bc.velocityX=-4; 
  



  monkey = createSprite(50,300,600,500);
  monkey.addAnimation("running", monkey1);
  monkey.scale = 0.1;

  
  ground = createSprite(200,300,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width ;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,310,400,10);
  invisibleGround.visible = false;
  
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  background(0);
 
  if (bc.x  < 2) {
    bc.x = bc.x = 400;
    }

    
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(invisibleGround);
  spawnObstacles();
  
  drawSprites();
}


function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,285,10,40);
    obstacle.velocityX = -4;
    
    
    //assign scale and lifetime to the obstacle
    obstacle.addImage(obstacle1);           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
    
  

  }


}
     

