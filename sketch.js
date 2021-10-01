
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var background, bgImg;
var runner1, run1img, runner2, run2img;
var keyCode;

function preload()
{
	bgImg = loadImage("./assets/track.jpg");
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    runner1 = createSprite(50, 200, 20, 20);
    

	runner2 = createSprite(50, 350, 20, 20);
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);

  image(bgImg, 10, 0, width, height);

  if(keyCode = "p"){
    gameState = PLAY;
  }

  if(gameState === PLAY){
    if(keyCode = RIGHT_ARROW){
       runner1.velocityX = 3;
    }

    runner2.velocityX = 3;

    if(runner1.x = 1950){
      gameState = END;
    }

    if(gameState = END){
      textSize(20);
      text("YOU WIN", 700, 350);
    }
  }

  
  
  drawSprites();
 
}



