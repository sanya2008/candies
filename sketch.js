const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var girl
var score=0
var candies
var candy1
var candy2
var candy3
var candy4


function preload(){
backgroundImg=loadImage("ground.jpg")
girlImg=loadImage("girl-removebg-preview.png")
candy1=loadImage("candy-removebg-preview.png")
candy2=loadImage("candy2-removebg-preview.png")
candy3=loadImage("candy_3-removebg-preview.png")
candy4=loadImage("candy4-removebg-preview.png")
}

function setup(){
    createCanvas(1500,650);
    engine = Engine.create();
    world = engine.world;
  
    girl=createSprite(1000,500,50,50)
    girl.addImage("girl",girlImg)
    girl.scale=0.5

    candiesGroup=new Group()
}

function draw(){
    background(backgroundImg);
   
    Engine.update(engine);
    drawSprites();

   girl.x=mouseX

   if(candiesGroup.isTouching(girl)){
    destroycandies()
  }
   djcandies()

   
   textSize(40);
  stroke(3);
  fill("black")
  text("SCORE: "+ score,1250,50);
}

function djcandies(){
    if(frameCount%20===0){
        candies=createSprite(120,30,20,20)
        candies.velocityY=4
        candies.x=Math.round(random(100,1400))
        var abc=Math.round(random(1,4))
      switch(abc){
        case 1:candies .addImage("candy1",candy1) ;
          break;
         case 2:candies .addImage("candy2",candy2) ;
          break;  
         case 3:candies .addImage("candy3",candy3) ;
          break;
          case 4:candies .addImage("candy4",candy4) ;
          break;
          default:break 
             
      }
      candies.scale=0.20
      candiesGroup.add(candies)
}
}

function destroycandies(){
  score = score + 10;
  candiesGroup.remove();
}
