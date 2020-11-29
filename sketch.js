const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 
var myEngine,myWorld;
var box;

function setup() {
  createCanvas(400,400);
myEngine= Engine.create();
myWorld= myEngine.world;

var box_options= {
  isStatic: true
}
box= Bodies.rectangle(200,100,50,50,box_options);
World.add(myWorld,box);
console.log(box);

}

function draw() {
  Engine.update(myEngine);
  background(0);  
  rectMode(CENTER);
 rect(box.position.x,box.position.y,50,50);
}