class Dustbin{
constructor(x,y){
var options = {
isStatic : true


}
this.image = loadImage("dustbingreen.png");
this.x = x;
this.y = y;
this.dustbinWidth = 200;
this.dustbinHeight = 100;
this.wallThickness = 20;

this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,options)
this.leftBody = Bodies.rectangle(this.x - this.dustbinWidth/2 , this.y - this.dustbinHeight/2 , this.wallThickness, this.dustbinHeight , options )
this.rightBody = Bodies.rectangle(this.x + this.dustbinWidth/2 , this.y - this.dustbinHeight/2 , this.wallThickness, this.dustbinHeight , options)

World.add(world , this.bottomBody);
World.add(world , this.leftBody);
World.add(world , this.rightBody);

}

display(){
var posBottom = this.bottomBody.position;
var posLeft = this.leftBody.position;
var posRight = this.rightBody.position;

push();

translate(posLeft.x , posLeft.y);

fill(255);

pop();

push();

translate(posRight.x , posRight.y);

fill(255);

pop();

push();

translate(posBottom.x , posBottom.y);
imageMode(CENTER);
fill(255);
image(this.image , 0, -this.dustbinHeight/2 , this.dustbinWidth , this.wallThickness)
pop();

}


}