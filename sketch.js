const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var shooter;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var sling;
var ball1;
var gr1,gr2,gr3,gr4,gr5,gr6,gr7,gr8,gr9,gr10;


function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    gr1 = new Ground(500,500,150, 15);
    gr2 = new Ground(580,478,15,60);
    gr3 = new Ground(648, 456,150,15);
    gr4 = new Ground(731,434,15,60);
    gr5 = new Ground(814, 412,150,15);
    gr6 = new Ground(890,390,15,60);
    gr7 = new Ground(958, 368, 150,15);
    gr8 = new Ground(420,522,15,60);
    gr9 = new Ground(353, 544, 150,15);
    gr10 = new Ground(274, 573, 15,75);
  

    ball1 = new Ball(30,400,25);

    box1 = new Box(600,450,50,50);
    box2 = new Box(650,450,50,50);
    box3 = new Box(625,200,50,50);

    box4 = new Box(920,300,50,50);
    box5 = new Box(970,300,50,50);
    box6 = new Box(945,50,50,50);

    box7 = new Box(770,375,50,50);
    box8 = new Box(820,375,50,50);
    box9 = new Box(795,225,50,50);

    box10 = new Box(460,400,50,50);
    box11 = new Box(510,400,50,50);
    box12 = new Box(485,250,50,50);

    box13 = new Box(320,350,50,50);
    box14= new Box(370,350,50,50);
    box15 = new Box(345,100,50,50);


    sling = new SlingShot(ball1.body, {x:120, y:480});
}

function draw(){
    background("black");
    Engine.update(engine);
 

    gr1.display();
    gr2.display();
    gr3.display();
    gr4.display();
    gr5.display();
    gr6.display();
    gr7.display();
    gr8.display();
    gr9.display();
    gr10.display();

    ball1.display();
   
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

    sling.display();

}

function mouseDragged(){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(ball1.body, {x:30,  y:400}  );
       sling.attach(ball1.body);
    }
}

