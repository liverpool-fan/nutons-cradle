class rope {
    constructor(body1,body2, offsetX,offsetY){
        this.offsettX=offsetX
        this.offsetY=offsetY
var options = {
bodyA: bodyA , bodyB:bodyB , length:50 , stiffness:10
}
this.rope = Matter.Constraint.create(options)
World.add (world,this.rope)
    }
    display(){
        strokeWeight(15)
        stroke ("red")
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
    }
}