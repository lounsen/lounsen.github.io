let t;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight-300);
  canvas.class("lemon");
  t = new tank(20,20,1,0);
  
}


function draw() {
  background(128);
  
  t.update();
  t.display();
  
}


function keyPressed(){
  if (key==' '){
    t.fire();
  }
 
   else if(key == "ArrowUp"){
      t.vx = 0;
      t.vy = -1;
    }
   else if(key == "ArrowDown"){
      t.vx = 0;
      t.vy = 1;
    }
   else if(key == "ArrowLeft"){
      t.vx = -1;
      t.vy = 0;
    }
   else if(key == "ArrowRight"){
      t.vx = 1;
      t.vy = 0;
    
    }
  
}
