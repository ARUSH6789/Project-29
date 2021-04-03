const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(800,230,210,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level one
  block17 = new Block(766,205,30,40);
  block18 = new Block(736,205,30,40);
  block19 = new Block(796,205,30,40);
  block20 = new Block(826,205,30,40);
  block21 = new Block(856,205,30,40);


  //level two
  block23 = new Block(766,165,30,40);
  block24 = new Block(796,165,30,40);
  block25 = new Block(826,165,30,40);
 

  //top level
  block27 = new Block(796,125,30,40);
 

  
  

  
  ball = Bodies.circle(50,100,10);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:150,y:190});
  
  

}
function draw() {
  background(56,44,44); 
  Engine.update(engine);
 
  textSize(20);
  fill("lightyellow");
  textSize(25);

  text('Drag the hexagon stone and release it , to launch it towards the blocks',120,20);
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  

  fill("pink");
  block23.display();
  block24.display();
  block25.display();
  

  fill("grey");
  block27.display();
 

  
  imageMode(CENTER);
  image(polygon_img,ball.position.x,ball.position.y,50,50);

  slingShot.display();

 

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX , y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}
