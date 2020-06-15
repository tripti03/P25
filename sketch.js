//var left,right,bottom
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

r = this.radius;

function setup() {
createCanvas(700,700);
engine = Engine.create();
world = engine.world;
ground = new Ground(width,700,2000,10);

dustbinObject = new Dustbin(660,630,200,200);

ball = new PaperBall(200,450,70);
//ball.collide = "ground";


Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(100);
  ball.display();

  ground.display();

  dustbinObject.display();
  
 drawSprites();
  

}	
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.pos,{x:130,y:-145});
    

	}
    
} 





