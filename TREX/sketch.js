//declaration of global variable
var START=1;
var PLAY = 2;
var END = 0;
localStorage["HighestScore"] = 0;

var person;
var ground;
var bgImage,groundImage,personImage;
var enemiesGroup,enemyImage;
var gameState = PLAY;
var score=0;
var edge;
var gameOver,gameOver_img;
var restart,restart_img;



function preload(){
  //loading animation
  bgImage = loadImage("road 2.jpg");
  groundImage = loadImage("Start.jpg");
  personImage = loadImage("hero.png");
  enemyImage  = loadImage("theif.png");
  gameOver_img=loadImage("over.png");
  restart_img=loadImage("restart.png");

}

function setup() {
  createCanvas(400,400);
  //creating background
  bg = createSprite(200,350,20,50);
 bg.addImage(bgImage);
 bg.scale = 0.8;

  //creating ground
 ground = createSprite(300,400,1000,0);
   ground.addImage(groundImage);
   ground.scale= 0.4;

//creating Person
person= createSprite(230,350,20,50);
person.addImage(personImage);
person.scale= 0.2;

  //To declare new Groups
enemiesGroup = new Group();

//creating
gameOver=createSprite(0,0,10,10)
gameOver.addImage(gameOver_img);
gameOver.scale=1.5;

//To create restart 
restart=createSprite(0,20,10,10);
restart.addImage(restart_img);
restart.scale=0.3;


score = 0;
 
}

function draw() {
    //To assign the background
  background("black");
  drawSprites();
  createEdgeSprites();
  text("Score: "+ score, 360,50);
  score = score + Math.round(getFrameRate()/60);
  bg.velocityY = -(6 + 3*score/100);

  if(gameState===START)
  {
   //To make restart & game Over invisible
   gameOver.visible=false;
   restart.visible=false;

   //Instructions for playing this game/USER GUIDE
   background("azure");
   fill("red");
   textSize(20);
   text("Read all the instructions carefully before playing:-",50,80);
   fill("red");
   textSize(18);
   text("1.Press Space Key to Start the Game",50,110);
   fill("black");
   text("3.Press UP Arrow Key for long jump",50,135);
   text("4.Press DOWN Arrow Key for long jump",50,160);
   text("5.Press LEFT Arrow Key for long jump",50,190);
   text("2.Press RIGHT Arrow Key for long jump",50,220);
   text("8.Try to Score high, With more score game will get more difficult",50,250);

   textSize(30);
   text("ALL THE BEST!!",200,385);

   //To make monkey & ground invisible during start state
   person.visible=false;
   ground.visible=false;
   bg.visible=false;
   enemy.visible=false;

     //Condition for entering in PLAY state
     if(keyDown("space"))
     {
       gameState=PLAY;
     }
  }
  else if(gameState===PLAY)
  {
    //To make monkey & ground visible during PLAY state
    gameOver.visible=false;
   restart.visible=false;
    person.visible=true;
    ground.visible=true;
    bg.visible=true;
    enemy.visible=true;
        
    //To increase the ground speed with increasement in score
    bg.velocityY = -(6 + 3*score/100);
    // moving ground

bg.velocityY = 3 

if (bg.y > 400){
 bg.y = height/2;
 }
if (bg.y < 0){
 bg.y = bg.height/2;
}
//controls
if(keyDown("LEFT_ARROW")){
  person.velocityX=-3;
  person.velocityY=0;
    }
 if(keyDown("RIGHT_ARROW")){
  person.velocityX=3;
  person.velocityY=0;
    }
    if(keyDown("UP_ARROW")){
      person.velocityX=0;
      person.velocityY=-3;
        }
     if(keyDown("DOWN_ARROW")){
      person.velocityX=0;
      person.velocityY=3;
        }
        var enemy = createSprite(600,120,40,10);
  enemy.addImage(enemyImage);
  
          if (person.isTouching(enemiesGroup)) {
            enemiesGroup.destroyEach();
                spawnEnemy();
    
  }
  else if(gameState===END)
  {
    //To make restart & game Over invisible
    gameOver.visible=true;
    restart.visible=true;
  }
    
  drawSprites();
}
function spawnEnemy() {
  //write code here to spawn the enemy
  if (frameCount % 60 === 0) {
    var enemy = createSprite(700,120,40,10);
    enemy.x = Math.round(random(300,120));
    enemy.addImage(enemyImage);
    
    enemy.velocityY = 5;
    enemy.scale=0.2;
     //assign lifetime to the variable
    enemy.lifetime = 200;
    
    //add each cloud to the group
    enemiesGroup.add(enemy);
  }
  
}
  }