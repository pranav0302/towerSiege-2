class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0.4,
            friction:0.4,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/Picture1.png");
        
        World.add(world, this.body);
        this.Visiblity = 150;
      
      }
      display(){
            console.log(this.body.speed);

            if(this.body.speed < 10){
             imageMode(CENTER);
              image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            }else if (this.body.speed > 10){
              World.remove(world, this.body);
              push();
              this.Visiblity = this.Visiblity - 5;
              tint(255,this.Visiblity);
              imageMode(CENTER);
              image(this.image, this.body.position.x, this.body.position.y, 50, 50);
              pop();
            }
        

    }
};