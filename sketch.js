var bullet, wall;
var bulletspeed, speed, bulletweight, wallthickness;

function setup() {
  createCanvas(1600,400);
  bulletspeed = random(223,321);
  wallthickness = random(22,83);
  bulletweight = random(30,52);
  bullet = createSprite(50, 200, 10, 10);
  wall = createSprite(1200,200,wallthickness,height/2);  
}

function draw() {
  background(80,80,80);  
  
  wall.shapeColor = color("white");
  bullet.velocityX = bulletspeed;

  if(wall.x - bullet.x < bullet.width + wall.width/2){
     bullet.velocityX = 0;
     var deformation = 0.5 * bulletweight * bulletspeed * bulletspeed/22509;

        if (deformation > 180){
           wall.shapeColor = color(255,0,0);
        }

       if (deformation < 180 && deformation > 100){
        wall.shapeColor = color(230,230,0);
       }

     if (deformation < 100){
         wall.shapeColor = color(0,255,0);
     }
  }

  drawSprites();
}