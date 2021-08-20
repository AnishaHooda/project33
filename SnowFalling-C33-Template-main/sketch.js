function preload(){
  bg = loadImage("snow2.jpg");
  snow1 = loadImage("snow4.webp");
  snow2 = loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bg);
  s1();
  s2();

  drawSprites();
}

function s1(){
  if(frameCount%60===0){
    var snowy1= createSprite(100,0,10,10);
    snowy1.velocityY = 3;
    snowy1.x =random(0,800);
    snowy1.addImage(snow1);
    snowy1.scale=0.1;

  }

  

}

function s2(){
  if(frameCount%90===0){
    var snowy2 =createSprite(100,0,10,10);
    snowy2.velocityY = 4;
    snowy2.x = random(0,800);
    snowy2.addImage(snow2);
    snowy2.scale = 0.1;
  }
}