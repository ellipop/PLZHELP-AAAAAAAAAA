const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var gameState = 1;

let engine;
let world;
var ball;
var basket,basketImg;


function preload(){
  basketImg = loadImage("assets/basket.png");
}

function setup() {
  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(250,250,50,50,10);
  
  basket = createSprite(250,480,70,25);
  basket.addImage(basketImg);
  basket.scale = 0.2;


}

function draw() {
  background(59);
  Engine.update(engine);

    if (keyDown(LEFT_ARROW)){
      basket.x = basket.x -6;
    }
    
    if (keyDown(RIGHT_ARROW)){
      basket.x = basket.x +6;
    }
    if (ball.y < 10){
      basket.x = 50;
      basket.y = 50;
    }
  
  ball.show();
  drawSprites();
}


