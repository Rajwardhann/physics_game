class circle
{
    constructor(x,y,r)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        var options=
        {
            isStatic : false,
            restitution : 1,
            friction : 1.3,
            density : 1.5

        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body)
    }

    display()
    {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r)
    }
}