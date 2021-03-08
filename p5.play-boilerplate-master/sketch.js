const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gamestate = "play";
    
function preload()
{
  instructionimg = loadImage("instruction.jpg")
}
function setup() {
  var canvas = createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;

  int = createSprite(95,80,20,20)
  int.addImage(instructionimg);
  int.scale =0.8;
 
  block1 = new blocks(200,530,40,40);
  block2 = new blocks(240,530,40,40);
  block3 = new blocks(160,530,40,40);
  block4 = new blocks(280,520,40,40);
  block5 = new blocks(320,530,40,40);
  block6 = new blocks(120,530,40,40);
  block7 = new blocks(200,480,40,40);
  block8 = new blocks(240,480,40,40);
  block9 = new blocks(160,480,40,40);
  block10 = new blocks(280,480,40,40);
  block11 = new blocks(200,430,40,40);
  block12 = new blocks(200,380,40,40);
  block13 = new blocks(200,330,40,40);
  block14 = new blocks(200,280,40,40);
  block15 = new blocks(200,230,40,40);
  block16 = new blocks(200,180,40,40);
  block17 = new blocks(200,130,40,40);
  block18 = new blocks(200,80,40,40);
  block19 = new blocks(200,30,40,40);
  block20 = new blocks(200,-20,40,40);
  block21 = new blocks(200,-50,40,40);
  ground1= new ground(200,580,800,20);
  birdobj = new bird(200,-100,40,40);
  ball = new circle(50,510,15);
  
  Engine.run(engine);
  
}

function draw() {


  background("black");  
  drawSprites();
  
  if(birdobj.body.position.y >= 420 && birdobj.body.position.y <= 435)
  {
    fill("yellow");
    text("YOU DID IT!",200,100)
  }
        if(frameCount%120 === 0)
      {
        int.visible = false
      }
      fill("purple")
      block1.display();
      block2.display();
      block3.display();
      block4.display();
      block5.display();
      block6.display();
      block7.display();
      block8.display();
      block9.display();
      //block10.display();
      block11.display();
      block12.display();
      block13.display();
      block14.display();
      block15.display();
      block16.display();
      block17.display();
      block18.display();
      block19.display();
      block20.display();
      block21.display();
      birdobj.display();
      ground1.display();
      fill("orange")
      ball.display();
      fill("yellow")
      text("Make the bird stand on 3 blocks by hitting the tower with the ball to win",2,10)
      text("Refresh the page to try again",2,20)
      
    
 }
  

function keyPressed()
{
  if(keyCode === 32)
  {
    Matter.Body.applyForce(ball.body, ball.body.position, {x:0,y:-60});
  }

  if(keyCode === RIGHT_ARROW)
  {
    Matter.Body.applyForce(ball.body, ball.body.position, {x:50,y:0});
  }

  if(keyCode === LEFT_ARROW)
  {
    Matter.Body.applyForce(ball.body, ball.body.position, {x:-50,y:0});
  }
}

