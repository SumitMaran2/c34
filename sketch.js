const Engine = Matter.Engine;
const World= Matter.World; 
const Bodies = Matter.Bodies; 
const Events = Matter.Events;
const Constraint=Matter.Constraint;

var ground,ball;
var engine,world;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10,
ball11,ball12,ball13,ball14,ball15,ball16,ball17,ball18,ball19,ball20

function setup() {
  createCanvas(1200,600);
engine=Engine.create();
world=engine.world;
ground =new  Ground(500,600,1000,20)
box1 =new Box(900,100,70,70);
box2 =new Box(900,100,70,70);
box3 =new Box(900,100,70,70);
box4 =new Box(900,100,70,70);
box5 =new Box(900,100,70,70);
box6 =new Box(900,100,70,70);
box7 =new Box(800,100,70,70);
box8 =new Box(800,100,70,70);
box9 =new Box(800,100,70,70);
box10 =new Box(800,100,70,70);
box11 =new Box(800,100,70,70);
box12 =new Box(800,100,70,70);

ball =new Ball(600,200,40,40);
rope =new Rope(ball.body,{x:700,y:50});
}

function draw() {
  background(0); 
Engine.update(engine);

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
ball.display();
rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}