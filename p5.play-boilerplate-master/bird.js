class bird
{
    constructor(x,y,width,height)
    {
        this.width = width;
        this.height= height;
        var options=
        {
            isStatic: false,
            restitution : 0,
            friction : 0.9,
            density : 0.5
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.img = loadImage("bird.png");
    }

    display()
    {
      
        var angle = this.body.angle 
        imageMode(CENTER);
       rotate(angle);
        
        image(this.img,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
