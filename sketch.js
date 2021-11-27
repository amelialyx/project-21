const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ball;
var ground;
var groundLeft, groundRight;

function preload()
{
	
}	

function setup() {
	createCanvas(1536, 789);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Bodies.circle(200,200,20,ball_options);
	World.add(world,ball);
	ground =new Ground(width/2,670,width,20);
	groundLeft = new Ground(1100,600,20,120);
	groundRight = new Ground(1350, 600,20,120);
	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	background(0);
	ground.display();
	groundLeft.display();
	groundRight.display()
	drawSprites();
	ellipse(ball.position.x,ball.position.y,20);
}

function hforce(){
	Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:0});
  }
  
  function vforce(){
	Matter.Body.applyForce(ball,{x:0, y:0}, {x:0, y:-0.05});
  }	

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85, y:-85})
	}
}