class Ball{
  constructor(x,y,radius,angle){
      var options = {
          density:1.5,
          frictionAir:0.005,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
     // this.angle = 80;
      World.add(world,this.body);
  }
  display(){
      var pos  = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      ellipse(0,0,this.radius);
      pop();
  }
}