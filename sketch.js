
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin; 



function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;

paper = new Paper(200,50,30);	
ground = new Ground(200,height,1400,20);
dustbin = new Dustbin(500,680);

}

	
  



function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
ground.display();
dustbin.display();



  Engine.update(engine);

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position, {x : 85, y : -85});



}




}

