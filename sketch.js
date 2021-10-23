var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg,gameOverImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup;
var gameState = "play"

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jewelryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameOverImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);

//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;

//gameOver_sprite = createSprite(150,300,20,20)
//gameOver_sprite.addImage("gameOver",gameOverImg)
  
cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();

}

function draw() {

  background(0);
  if(gameState == "play"){
    if(path.y > 400 ){
      path.y = height/2;
    }
    generateCash()
    generateDiamonds()
    generateSwords()
    generateJewels()

    boy.x = World.mouseX
    path.velocityY = 4;

    if(boy.isTouching(jewelryG)){
      jewelryG.destroyEach()
      treasureCollection = treasureCollection + 1
    }
  
    if(boy.isTouching(diamondsG)){
      diamondsG.destroyEach()
      treasureCollection = treasureCollection + 1
    }
  
    if(boy.isTouching(cashG)){
      cashG.destroyEach()
      treasureCollection = treasureCollection + 1
    }
  
    if(boy.isTouching(swordGroup)){
      gameState = "end"
    }
  
    if(gameState == "end"){
      path.velocityY = 0;
    }
    //gameOver_sprite.visible = false;

  }

  if(gameState == "end"){
    path.velocityY = 0;
    //gameOver_sprite.visible = true;
  }
 
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

  function generateCash(){
    if(frameCount % 80 == 0){
      cash_sprite = createSprite(10,0,15,15)
      cash_sprite.addImage(cashImg)
      cash_sprite.x = Math.round(random(10,390))
      cash_sprite.velocityY = 6
      cash_sprite.scale = 0.2
      cashG.add(cash_sprite)
      }
  }

  function generateDiamonds(){
    if(frameCount % 100 == 0){
      diamond_sprite = createSprite(10,0,15,15)
      diamond_sprite.addImage(diamondsImg)
      diamond_sprite.x = random(50,380)
      diamond_sprite.velocityY = 6
      diamond_sprite.scale = 0.06
      diamondsG.add(diamond_sprite)
      }
  }

  function generateSwords(){
    if(frameCount % 79 == 0){
      sword_sprite = createSprite(10,0,15,15)
      sword_sprite.addImage(swordImg)
      sword_sprite.x = Math.round(random(20,370))
      sword_sprite.velocityY = 6
      sword_sprite.scale = 0.1
      swordGroup.add(sword_sprite)
      }
  }

  function generateJewels(){
    if(frameCount % 70 == 0){
      jewel_sprite = createSprite(10,0,15,15)
      jewel_sprite.addImage(jewelryImg)
      jewel_sprite.x = Math.round(random(20,370))
      jewel_sprite.velocityY = 6
      jewel_sprite.scale = 0.2
      jewelryG.add(jewel_sprite)
      }
  }
