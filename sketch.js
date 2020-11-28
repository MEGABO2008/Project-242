
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1;
var box2;
var box3;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

rectMode(CENTER);
box1 = new Box(796,550,160,20., {isStatic:true} );
	box2 = new Box(874,510,20,100);
	box3 = new Box(710,510,20,100);
paper = new Paper(50,510,50);



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	//Create the Bodies Here.


  
}


function draw() {
	Engine.update(engine);

	rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  paper.display();




  keyPressed();
}

function keyPressed()  {
   if (keyCode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
   }
}

