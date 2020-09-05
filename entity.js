
class Entity {

  constructor(args) {
    this.moving = false;

    this.sprite = args.sprite;

    this.floatX = args.x;
    this.floatY = args.y;
    this.x = Math.round(args.x);
    this.y = Math.round(args.y);

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
