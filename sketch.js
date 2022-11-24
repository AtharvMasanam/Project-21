var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic : false,
		restitution : 0.1,
		friction : 0,
		density : 0.5
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(100, 100, 20, ball_options);
	World.add(world, ball);

	ground = Matter.Bodies.rectangle(400, 400, 800, 15, {isStatic:true});
	World.add(world, ground);

	basket1 = Matter.Bodies.rectangle(700, 350, 15, 100, {isStatic:true});
	World.add(world, basket1);

	basket2 = Matter.Bodies.rectangle(600, 350, 15, 100, {isStatic:true});
	World.add(world, basket2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  rect(ground.position.x, ground.position.y, 800, 15);
  rect(basket1.position.x, basket1.position.y, 15, 100);
  rect(basket2.position.x, basket2.position.y, 15, 100);

  ellipse(ball.position.x,ball.position.y, 20);
  
  drawSprites();

  }

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0}, {x:21,y:-31.5})
	}
}



