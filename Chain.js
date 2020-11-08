class Chain{
    constructor(bodyA, bodyB){
        var option = {
            bodyA: bird.body,
            bodyB: constrainedLog.body,
            stiffness: 0.2,
            lenght: 20
    
        }
        this.chain = Constraint.create(option);
        World.add(world,chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(bird.body.position.x, bird.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);

    }
}