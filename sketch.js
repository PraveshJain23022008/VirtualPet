//Create variables here
var dog;
var dogHappy;
var database;
var foodS;
var foodStock; 
var background;
var happy;
var dogHappy;
var Dog;
function preload()
{
  //load images here
  //this.image = loadImage("images/Dog.png");
  Dog= loadImage("images/Dog.png");
  happy = loadImage("images/Happydog.png");
  //dog=loadImage("images/Dog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  

  dog = createSprite(250,250,10,10);
  dog.addImage(Dog);
  foodStock = database.ref("/");
  foodStock.on("value",readStock);
  
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
}
textSize(15);
text("Press Up arrow to feed the Draco's milk",400,250);
fill ("cyan");
stroke ("lightgreen");

//Function to read and values from DB:
function readStock(data){
  foodS-data.val();
}
//Function to write values from DB:
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

  drawSprites();
  //add styles here

}



