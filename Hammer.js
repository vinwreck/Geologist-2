class Hammer {
    constructor(x,y){
        (x,y,50,50);
        this.image = loadImage("hammer.png");
      }
      display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
      
      } 
}