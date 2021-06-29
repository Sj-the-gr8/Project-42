var backG,sc,upsc,rsc,lsc,iss,Sc,Iss,hasDocked;
function preload()  {
  backG=loadImage("spacebg.jpg");
  iss=loadImage("iss.png");
  sc=loadImage("spacecraft1.png");
  upsc=loadImage("spacecraft2.png");
  rsc=loadImage("spacecraft3.png");
  lsc=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(500,400);
  Iss=createSprite(300, 200, 50, 50);
  Iss.addImage(iss);
  Iss.scale=0.7 ;
  Sc=createSprite(400, 350, 50, 50);
  Sc.addImage("still",sc);
  Sc.scale=0.1;
  hasDocked=false;
}

function draw() {
  background(backG);
  Sc.setVelocity(0,0);
  if(keyDown("left")&&hasDocked==false)  {
    Sc.setVelocity(-2,0);
    Sc.addImage(lsc);
  }
  else if(keyDown("right")&&hasDocked==false)  {
    Sc.setVelocity(2,0);
    Sc.addImage(rsc);
  }
  else if(keyDown("up")&&hasDocked==false)  {
    Sc.setVelocity(0,-2);
    Sc.addImage(upsc);
  }
  if((Sc.x==258)&&(Sc.y==236))  {
    hasDocked=true;
  }
  else if(Sc.y<236)  {
    fill(255);
    text("Docking Unsuccessful. Try again",170,350);
  }
  else  {
    hasDocked=false;
  }
  if(hasDocked==true)  {
    fill(255);
    text("Docking Successful!!",200,350); 
  }
  fill(255);
  text(mouseX+","+mouseY,mouseX,mouseY);
  drawSprites();
}