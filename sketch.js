
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	roof1 = new roof(400,10,200,10)
	bobObject1 = new bob(300,500)
	bobObject2 = new bob(350,500)
	bobObject3 = new bob(400,500)
	bobObject4 = new bob(450,500)
  bobObject5 = new bob(500,500)
  rope1=new rope(bobObject1.body,roof1.body,-bobDiameter*2, 0)
  rope2=new rope(bobObject2.body,roof1.body,-bobDiameter*2, 0)
  rope3=new rope(bobObject3.body,roof1.body,-bobDiameter*2, 0)
  rope4=new rope(bobObject4.body,roof1.body,-bobDiameter*2, 0)
  rope5=new rope(bobObject5.body,roof1.body,-bobDiameter*2, 0)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  if(keyPressed(UP_ARROW)){
    bobObject1.velocityX = -3
  }
  roof1.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  drawSprites();
 
}



