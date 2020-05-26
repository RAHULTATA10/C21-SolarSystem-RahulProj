var galaxypic;

var SUN, sunpic;

var planetpics = [];

var MERCURY, VENUS, EARTH, MARS, JUPITER;
var SATURN, URANUS, NEPTUNE, PLUTO;
var distance = 0;

function preload(){
  galaxypic = loadImage("images/galaxy.jpg");
  sunpic = loadImage("images/sun.png");
  
  planetpics[0] = loadImage("images/mercury.png");
  planetpics[1] = loadImage("images/venus.png");
  planetpics[2] = loadImage("images/earth.png");
  planetpics[3] = loadImage("images/mars.png");
  planetpics[4] = loadImage("images/jupiter.png");
  planetpics[5] = loadImage("images/saturn.png");
  planetpics[6] = loadImage("images/uranus.png");
  planetpics[7] = loadImage("images/neptune.png");
  planetpics[8] = loadImage("images/pluto.png"); 
  
}

function setup(){
    var canvas = createCanvas(1200,550);
    
    SUN = createSprite(30, 250, 150, 150); 
    SUN.addAnimation("Sun", sunpic);
    SUN.scale = 0.35;
    

  MERCURY = createSprite(200,250,25,25);
  MERCURY.addAnimation("Mercury", planetpics[0]);
  MERCURY.scale = 0.2;
  
  VENUS = createSprite(285,250,35,35);
  VENUS.addAnimation("Venus", planetpics[1]);
  VENUS.scale = 0.25;
  
  EARTH = createSprite(360,250,50,50);
  EARTH.addAnimation("Earth", planetpics[2]);
  EARTH.scale = 0.4;
 
  MARS = createSprite(480,250,40,40);
  MARS.addAnimation("Mars", planetpics[3]);
  MARS.scale = 0.35;
 
  JUPITER = createSprite(600,250,100,100);
  JUPITER.addAnimation("Jupiter", planetpics[4]);
  JUPITER.scale = 0.57;

  SATURN = createSprite(770,230,90,90);
  SATURN.addAnimation("Saturn", planetpics[5]);
  SATURN.scale = 0.45;

  URANUS = createSprite(900,250,80,80);
  URANUS.addAnimation("Uranus", planetpics[6]);
  URANUS.scale = 0.45;

  NEPTUNE = createSprite(1040,280,40,40);
  NEPTUNE.addAnimation("Neptune", planetpics[7]);
  NEPTUNE.scale = 0.3;

  PLUTO = createSprite(1125,275,30,30);
  PLUTO.addAnimation("Pluto", planetpics[8]);
  PLUTO.scale = 0.15;
}

function draw() {
  background(galaxypic);
  
  textSize(25);
  textFont("Verdana");
  stroke("white");
  fill("white");
  
  createEdgeSprites();

  SUN.x = SUN.x + random(0.2, -0.2);
  SUN.y = SUN.y + random(0.2, -0.2);
  MERCURY.x = MERCURY.x + random(0.2, -0.2);
  MERCURY.y = MERCURY.y + random(0.2, -0.2);
  VENUS.x = VENUS.x + random(0.2, -0.2);
  VENUS.y = VENUS.y + random(0.2, -0.2);
  EARTH.x = EARTH.x + random(0.2, -0.2);
  EARTH.y = EARTH.y + random(0.2, -0.2);
  MARS.x = MARS.x + random(0.2, -0.2);
  MARS.y = MARS.y + random(0.2, -0.2);
  JUPITER.x = JUPITER.x + random(0.2, -0.2);
  JUPITER.y = JUPITER.y + random(0.2, -0.2);
  SATURN.x = SATURN.x + random(0.2, -0.2);
  SATURN.y = SATURN.y + random(0.2, -0.2);
  URANUS.x = URANUS.x + random(0.2 -0.2);
  URANUS.y = URANUS.y + random(0.2, -0.2);
 
  if(frameCount %80 === 0){
      SUN.scale = SUN.scale + 0.075;
      SUN.velocityX = SUN.velocityX + 0.075;
      SUN.setColliderwidth = SUN.setColliderwidth + 100;
      SUN.setCollider("circle",0,0,SUN.setCollideright);

      distance = distance + Math.round(World.frameRate/3); ;
  }
      SUN.debug=true;
      
      MERCURY.setCollider("circle",0,0,60);
      MERCURY.debug=true;

      VENUS.setCollider("circle",0,0,70);
      VENUS.debug=true;
      
      EARTH.setCollider("circle",0,0,75);
      EARTH.debug=true;
      MARS.debug=true;
      MARS.setCollider("circle",0,0,75);

      JUPITER.debug=true;
      JUPITER.setCollider("circle",0,0,85);

      SATURN.debug=true;
      SATURN.setCollider("circle",0,0,150);

      URANUS.debug=true;
      URANUS.setCollider("circle",0,0,160);
      
      NEPTUNE.debug=true;
      NEPTUNE.setCollider("circle",0,0,80);

      PLUTO.debug=true;
      PLUTO.setCollider("circle",0,0,60);

      myLibEngsunCollides(SUN,MERCURY);
      myLibEngsunCollides(SUN,VENUS);
      myLibEngsunCollides(SUN,EARTH);
      myLibEngsunCollides(SUN,MARS);
      myLibEngsunCollides(SUN,JUPITER);
      myLibEngsunCollides(SUN,SATURN);
      myLibEngsunCollides(SUN,URANUS);
      myLibEngsunCollides(SUN,NEPTUNE);
      myLibEngsunCollides(SUN,PLUTO);

     text("Distance travelled by Sun is " + distance + " Million Kms", 625, 50);
     text("SUN", 20, 350);
     text("MERCURY", 140, 300);
     text("VENUS", 245, 220);
     text("EARTH", 315, 315);
     text("MARS", 435, 210);
     text("JUPITER", 545, 330);
     text("SATURN", 725, 150);
     text("URANUS", 835, 350);
     text("NEPTUNE", 975, 250);
     text("PLUTO", 1090, 310);
      
  drawSprites();
}
function myLibEngsunCollides(star,planet) {
  
      if (planet == "MERCURY" || SUN.collide(MERCURY) == true) {
            MERCURY.destroy();            
     }    
      if (planet == "VENUS" || SUN.collide(VENUS) == true) {
            VENUS.destroy();      
      }    
      if (planet == "EARTH" || SUN.collide(EARTH) == true) {
            EARTH.destroy();                
      } 
      if (planet == "MARS" || SUN.collide(MARS) == true) {
            MARS.destroy(); 
      }    
      if (planet == "JUPITER" || SUN.collide(JUPITER) == true) {
            JUPITER.destroy();
      }    
      if (planet == "SATURN" || SUN.collide(SATURN) == true) {
            SATURN.destroy();
      } 
      if (planet == "URANUS" || SUN.collide(URANUS) == true) {
            URANUS.destroy(); 
      }    
      if (planet == "NEPTUNE" || SUN.collide(NEPTUNE) == true) {
            NEPTUNE.destroy();
      }    
      if (planet == "PLUTO" || SUN.collide(PLUTO) == true) {
            PLUTO.destroy();
            noLoop();
      }   
                      
 }
 