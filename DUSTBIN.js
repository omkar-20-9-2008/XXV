class DUSTBIN {
    constructor(x, y,width,height) {
      var options = {
          'isStatic':true
          }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 150;
      this.height = 200;
      this.image=loadImage("PICTURE/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("blue");
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  
