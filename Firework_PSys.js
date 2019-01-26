// Example of very simple particle systems - introduction to objects in javascript

// define a single particle
function Particle(x , y) // you will need to modify the parameters
{
   // the data associated with a particle
   this.accelY = 0.05; //gravity
   this.velX = random(-3, 3);
   this.velY = random(-3, 3);

   // this particle  can vary its red, green, and blue color 
   this.pcolorR = r + random(-50, 50);
   this.pcolorG = g + random(-50, 50);
   this.pcolorB = b + random(-50, 50);
   this.locX = x;
   this.locY = y;
   this.r = 20.0;
   this.life = 100;
  
   // a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 1.0;
   };
  
   // function to draw a particle
   this.renderP = function() 
   {
      noStroke();
      push();
         fill(this.pcolorR, this.pcolorG, this.pcolorB, this.life);
         translate(this.locX, this.locY);
         ellipse(0, 0, this.r, this.r);
      pop();
   };
} //end of particle object definition


// define a group of particles as a particleSys
function PSys(sX, sY, num)
{
   // the data - lots of particles
   this.particles = [];
   for (var i=0; i < num; i++) 
   {
      this.particles.push(new Particle(sX, sY));
   }
  
   // function defining what to do each frame
   this.run = function() 
   {
      for (var i=0; i < this.particles.length; i++) 
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}

// declare of a variable to represent a particle system
var fireW1;
var r, g, b;
var count;
var fireworkSystems = []; 

function setup() 
{
   createCanvas(500, 500);
   count = 0;
   // start a new particle system
   //fireW1 = new PSys(200, 100, 20);


}

function draw() 
{
   background(0);
   r = random(255);
   g = random(255);
   b = random(255);
   // run the particle system
   //fireW1.run();
   for(var i = 0; i < count; i++){
      fireworkSystems[i].run();
   } 
}


function mouseClicked(){
   count ++;
   fireworkSystems.push(fireW1 = new PSys(mouseX, mouseY, 50));
}
