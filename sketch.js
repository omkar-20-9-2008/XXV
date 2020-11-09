
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dust1,dust2,dust3,paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dust1 = new DUSTBIN(1160,560,200,20);
	dust2 = new bin(1080,595,20,200);
	dust3 = new bin(1235,595,20,200);
	paperObject=new Paper(200,450,60);
	groundObject=new Grounds(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	})
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(500);
 
  paperObject.display();
  groundObject.display();
  dust1.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:205,y:-205});
    
  	}
}
