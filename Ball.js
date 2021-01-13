class Ball{

    constructor(x,y,width,height,angle){ 

        var Options={
        frictionAir:0.005,
         density:1

        }
        this.body=Bodies.rectangle(x,y,width,height,Options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("red");
        ellipse(0,0,this.width,this.height);
        pop();
    }

}