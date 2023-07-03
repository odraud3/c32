class CannonBall {
    constructor(x, y) {
        var opitons = {
            isStatic: true
        }

        this.r = 30
        this.image = loadImage("./assets/cannonball.png")
        this.trajectore=[]
        this.body = Bodies.circle(x, y, this.r, opitons)
        World.add(world, this.body)


    }

    remove(index){
        Matter.Body.setVelocity(this.body,{x:0,y: 0})

        setTimeout(() => {
         Matter.World.remove(world,this.body)
         delete balls[index]   
        }, 1000);
        
    }

    shoot(){
    var newAngle=cannon.angle-28
    newAngle=newAngle*(3.14/180)

    var velocity=p5.Vector.fromAngle(newAngle)
    velocity.mult(0.5)
    Matter.Body.setStatic(this.body,false) 
    Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})  
    }

    display(){
        var pos=this.body.position
        if (this.body.velocity.x>0&&pos.x>300) {
           var position =[pos.x,pos.y]
           this.trajectore.push(position)
           for(var i =0;i<this.trajectore.length;i++){
            image(this.image,this.trajectore[i][0],this.trajectore[i][1],5,5)
           }
        }

        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
        pop()

    }
}