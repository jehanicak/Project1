// this is the start of my state machiene
var stateChange;
var state = 1;
var coitstate = 1;
var bridgestate = 2;
var cliffstate = 3;
var pagotastate = 4;
var deyoungstate = 5;
var flowerstate = 6;

//these are all my images
let coitTowerPage;
let coitTower;
let coitGround;
let goldenGatePage; 
let sun;
let cliffLightPage;
let cliffDarkPage; 
let pagotaPage;
let pagotabirds;
let deYoungDayPage;
let deYoungNightPage;
let flowersPage;
let wind;

var y = 0;
var speedY = 3;

var x = 100;
var speedX = 2; 

var e = 100;
var speedE = 2;


function preload(){
  coitTowerPage = loadImage('assets/coit_Tower.png'); 			
  coitTower = loadImage('assets/Tower_Shake.png');
  coitGround = loadImage('assets/Coit_Tower_Foreground.png');
  goldenGatePage = loadImage('assets/Golden_Gate_Bridge.png');
  sun = loadImage('assets/Golden_Gate_Bridge_Sun_Set.png');
  cliffLightPage = loadImage('assets/Cliff_House.png');
  cliffDarkPage = loadImage('assets/Cliff_House_Lights_On.png');
  pagotaPage = loadImage('assets/Peace_Pagota.png');
  pagotabirds = loadImage('assets/Peace_Pagota_Birds.png');
  deYoungDayPage = loadImage('assets/De_Young.png');
  deYoungNightPage = loadImage('assets/De_Young_Night.png');
  flowersPage = loadImage('assets/Flowers.png');
  wind = loadImage('assets/Flowers_Wind.png');


    
}

function setup() {
  createCanvas(1400,800);
}

function draw() {
  background(0);
  noStroke();
  
    
  
  // State Machiene -------------------------------------------
  
  if (state == coitstate){
  
    drawCoitState();
    
    if(mouseIsPressed){
        earthquake();
    }
      else{
          drawActualTower();
      }
    
    drawcoitground();
  }
  
  else if (state == bridgestate){
    drawBridgeState();
    
    if(mouseIsPressed){
        drawsun();
    }
      else{
        fill(226, 185, 52);
        ellipse(150, 300, 100, 100);
      }
    
  }
  
  else if (state == cliffstate){
    drawCliffState();
      
    if(mouseIsPressed){
        drawCliffAtNight();
    }
 }
  
  else if (state == pagotastate){
    drawPagotaState();
      
    if (keyIsPressed == true){
        drawBirds();
    }
  }
  
  else if (state == deyoungstate){
    drawDeYoungState();
      
    if(mouseIsPressed){
        drawDeYoungNight();
    }
      
  }
  
  else if (state == flowerstate){
    drawFLowersState();
      
    if(mouseIsPressed){
        drawWind();
    }
  
  }
  
   
}

// ----------------------- COIT STATE -----------------

function drawCoitState(){

    image(coitTowerPage, 0, 0, 1400, 800);
    
}

function drawcoitground(){
    image(coitGround, 0, 550, 640, 280);
}

function drawActualTower(){
    image(coitTower, 200, 100, 158, 541);
}

function earthquake(){
    
    e = 170;
    image(coitTower, e, 100, 158, 541);
    e = e +speedE;
  
    if(e + 450 >= 850 || e <= 0){
        speedE = speedE * -1
    
    }
    
}

// ----------------------- BRIDGE STATE -----------------

function drawBridgeState(){
    

    image(goldenGatePage, 0, 0, 1400, 800);
    
    //I found how to do this animation from one of my old in class coding assignments

}

function drawsun(){
    fill(226, 185, 52);
    ellipse(150, y, 100, 100);
    y = y + speedY;
    
    if(y + 50 >= width - 960 || y <= 0){
        speedY = speedY * -1;
    }
}
      


// ----------------------- CLIFF STATE -----------------

function drawCliffState(){

    
    image(cliffLightPage, 0, 0, 1400, 800); 
    
}

function drawCliffAtNight(){
    image(cliffDarkPage, 0, 0, 1400, 800);
}



// ----------------------- PAGOTA STATE -----------------

function drawPagotaState(){
  
   image(pagotaPage, 0, 0, 1400, 800);
}

function drawBirds(){
   
    image(pagotabirds, 50, 53, 363, 617);
    
}


// ----------------------- DE YOUNG STATE -----------------

function drawDeYoungState(){
    
    image(deYoungDayPage, 0, 0, 1400, 800);
    
}

function drawDeYoungNight(){
    image(deYoungNightPage, 0, 0, 1400, 800);
}


// ----------------------- FLOWERS STATE -----------------

function drawFLowersState(){

    image(flowersPage, 0, 0, 1400, 800);
    
    
}

function drawWind(){
    image(wind, x, 370, 196, 138);
    x = x +speedX;
  
    if(x + 50 >= 200 || x <= 0){
        speedX = speedX * -1
    
    }
}




// THIS IS HOW TO SWITCH INBETWEEN MY STATES - USE NUMBERS 0 - 5 TO GET TO STATES
function keyPressed(){
  if(key == '1'){
    state = coitstate;
  }
  

  else if(key == '2'){
    state = bridgestate;
  }
  
  else if(key == '3') {
    state = cliffstate;
  }
  
  else if(key == '4'){
    state = pagotastate;
  }
  
   else if(key == '5'){
    state = deyoungstate;
  }
  
   else if(key == '6'){
    state = flowerstate;
  }
  
}



