class tank{
  
  constructor(x,y,v1,v2) {
    this.posx = x;
    this.posy = y;
    this.vx = v1;
    this.vy = v2;
    
    this.w = 50;
    this.h = 24;
    
    this.s = [];
    
  }
  
  
  
  
  display(){
    fill(255);
    rect(this.posx,this.posy,this.w,this.h);
    ellipse(this.posx+0.6*this.w,this.posy+0.5*this.h,0.2*this.w,0.2*this.w);
    rect(this.posx+0.6*this.w,this.posy+0.4*this.h,0.9*this.w,0.1*this.w);
  }
  
  update(){
    this.posx = this.posx + this.vx;
    this.posy = this.posy + this.vy;
    
    for(let sh = 0;sh<this.s.length; sh++){
      this.s[sh].update();
      this.s[sh].display();
      if (this.s[sh].posx>width){
        this.s.splice(sh,1);
      }
    }
  }
  
  fire(){
    this.s.push(new shell(this.posx+0.6*this.w,this.posy+0.4*this.h,6,0));
    
    
  }
  
  

}
