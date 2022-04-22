
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var chao;
var pareEsq, pareDir;
var bola;

function setup() {
	createCanvas(1600, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var chaoConfig = {
		isStatic: true
	}
	var pareDirConfig = {
		isStatic: true
	}
	var pareEsqConfig = {
		isStatic: true
	}
	var bolaConfig = {
		isStatic: false,
		restitution: 1.5,
		density: 3
	}
	chao = Bodies.rectangle(0, 670, 1600, 20, chaoConfig);
	World.add(world, chao);

	pareEsq = Bodies.rectangle(1100, 550, 20, 120, pareEsqConfig);
	World.add(world, pareEsq);

	pareDir = Bodies.rectangle(1350, 550, 20, 120, pareDirConfig);
	World.add(world, pareDir);
	
	bola = Bodies.circle(260, 100, 30, bolaConfig);
	World.add(world, bola);
	
}

function draw() {
  background("black");
  Engine.update(engine);
  fill("white");
  rect(chao.position.x, chao.position.y, 1600, 20);
  rect(pareEsq.position.x, pareEsq.position.y, 20, 120);
  rect(pareDir.position.x, pareDir.position.y, 20, 120);
  ellipse(bola.position.x, bola.position.y, 30, 30);
}

function keyPressed(){
	if (keyCode == UP_ARROW){
		Matter.Body.applyForce(bola, bola.position, {x:15, y:-3});
	}
}