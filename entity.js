
class Entity {

  constructor(args) {
    this.moving = false;
    console.log(typeof(args.sprite[0]));
    if(typeof(args.sprite[0])=="string"){
      this.sprite = args.sprite;
      this.animated = false;
    }else{//assume that it has multiple frames
      this.animated =true
      this.animationTimer =0; //when this number reaches the animation speed the frame will get swaped
      this.currentFrame =0;
      this.frames = args.sprite;
      this.sprite = args.sprite[0]
      this.animationSpeed= args.animationSpeed;
    }



    this.floatX = args.x;
    this.floatY = args.y;
    this.x = Math.round(args.x);
    this.y = Math.round(args.y);

  }

  animate(){
    if(this.animated){
      this.animationTimer++;
      if(this.animationTimer >= this.animationSpeed){
        this.currentFrame = (this.currentFrame +1) %this.frames.length;
        this.sprite = this.frames[this.currentFrame]
        this.animationTimer =0;
      }



    }


  }

  moveTo(args){
    this.moving = true;
    this.target ={}
    this.target.x = Math.round(args.x);
    this.target.y =Math.round(args.y);
    this.target.duration = args.duration //in frames
    this.target.dx = (this.target.x-this.floatX)/this.target.duration
    this.target.dy = (this.target.y-this.floatY)/this.target.duration

    }

    update(){
      this.move()
      this.animate();
    }

    move(){
    if(this.moving){
      this.setX(this.floatX += this.target.dx);
      this.setY(this.floatY += this.target.dy);
      if(this.target.x == this.x &&this.target.y == this.y){
        this.moving = false;
      }

    }
  }

  setX(x){
      this.floatX = x;
      this.x = Math.round(x)
  }

  setY(y){
    this.floatY = y;
    this.y = Math.round(y)
  }

  static spriteToArray(strings,...values){//tag for a template string to return it
    return strings.raw[0].split("\n")

  }
}
