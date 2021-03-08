class blocks
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
    }

    display()
    {
      
        
        rectMode(CENTER);
       
        
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}
