class ground
{
    constructor(x,y,width,height)
    {
        this.width = width;
        this.height= height;
        var options=
        {
            isStatic: true,
            friction : 1.2
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
