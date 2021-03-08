class hex {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution : 0.3,
          friction: 0.5,
          density: 1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.img = loadImage("polygon.png");
      World.add(world, this.body);
      
    }
    display(){
      
      imageMode(CENTER);
      fill("brown");
      image(this.img,this.body.position.x, this.body.position.y, this.width, this.height);
    }
  }