
class Rope{
  constructor(BodyA,PointB){
      var options = {
          BodyA:BodyA,
          PointB:PointB,
          stiffness:1.2,
          length:300,
      }
      this.PointB = PointB;
      this.rope = Constraint.create(options);
      World.add(world,this.rope);

  }
  display(){
      var pointA = this.rope.BodyA.position;
      var pointB = this.PointB;
      push();
      strokeWeight(5);
      stroke('black');
      line(pointB.x,pointB.y,pointA.x,pointA.y);
      pop();

  }
}