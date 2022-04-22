class shell{
  
  constructor(x,y,v1,v2) {
    this.posx = x;
    this.posy = y;
    this.vx = v1;
    this.vy = v2;
    
    this.w = 6;
    this.h = 2; 
  }
  
  display(){
    fill(123,4,56);
    rect(this.posx,this.posy,this.w,this.h);
    
  }
  
  update(){
    this.posx = this.posx + this.vx;
    this.posy = this.posy + this.vy;
    
    
  }
  
}
