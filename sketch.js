
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(900,450,480,35);
//level 1
  box1 = new Box(725,300,50,50);
  box2 = new Box(775,300,50,50);
  box3 = new Box(825,300,50,50);
  box4 = new Box(875,300,50,50);
  box5 = new Box(925,300,50,50);
  box6 = new Box(975,300,50,50);
  box7 = new Box(1025,300,50,50);
  box8 = new Box(1075,300,50,50);
//level 2
  box9 = new Box(750,250,50,50);
  box10 = new Box(800,250,50,50);
  box11 = new Box(850,250,50,50);
  box12 = new Box(900,250,50,50);
  box13= new Box(950,250,50,50);
  box14= new Box(1000,250,50,50);
  box15= new Box(1050,250,50,50);
//level 3
  box16 = new Box(775,200,50,50);
  box17 = new Box(825,200,50,50);
  box18 = new Box(875,200,50,50);
  box19 = new Box(925,200,50,50);
  box20 = new Box(975,200,50,50);
  box21 = new Box(1025,200,50,50);
//level 4
  box22 = new Box(800,150,50,50);
  box23 = new Box(850,150,50,50);
  box24 = new Box(900,150,50,50);
  box25 = new Box(950,150,50,50);
  box26 = new Box(1000,150,50,50);
//level 5
  box27 = new Box(825,100,50,50);
  box28 = new Box(875,100,50,50);
  box29 = new Box(925,100,50,50);
  box30 = new Box(975,100,50,50);
//level 6
  box31 = new Box(850,50,50,50);
  box32 = new Box(900,50,50,50);
  box33 = new Box(950,50,50,50);
// level 7
  box34 = new Box(875,0,50,50);
  box35 = new Box(925,0,50,50);
// level 8
 box36 = new Box(900,-50,50,50);


 polygon1 = new Polygon(150,850,30);

	slingShot = new SlingShot(polygon1.body,{x:250, y:410});



	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);

  background(135, 203, 248);


  slingShot.display();
polygon1.display();

 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();

box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();

box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();

box22.display();
box23.display();
box24.display();
box25.display();
box26.display();

box27.display();
box28.display();
box29.display();
box30.display();

box31.display();
box32.display();
box33.display();

box34.display();
box35.display();

box36.display();



}


function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
