const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var backgroundImg;
var background2;
var ground;
var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10;
var snowMan;


function preload(){
backgroundImg = loadImage("snow1.jpg");

}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,380,800,10);

  snowMan = new Character(300,380);
  
  snow1 = new Snow(100,100);
  snow2 = new Snow(200,120);
  snow3 = new Snow(300,100);
  snow4 = new Snow(400,120);
  snow5 = new Snow(500,100);
  snow6 = new Snow(600,120);
  snow7 = new Snow(700,100);
  snow8 = new Snow(800,120);
  snow9 = new Snow(145,100);
  snow10 = new Snow(450,120);
  snow11 = new Snow(760,100);
  snow12 = new Snow(650,120);

  
  

  
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

   ground.display();
   snow1.display();
   snow2.display(); 
   snow3.display(); 
   snow4.display(); 
   snow5.display(); 
   snow6.display(); 
   snow7.display(); 
   snow8.display(); 
   snow9.display();   
   snow10.display(); 
   snow11.display(); 
   snow12.display();
   snowMan.display(); 
}

//function keyPressed(){
  //if(keyCode === space){
    //character.velocityY = -5;
 // }
//}

