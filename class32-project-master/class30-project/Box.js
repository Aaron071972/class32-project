class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.Visibility = 255;
  }
display(){
  //console.log(this.body.speed)
  if(this.body.speed > 3){
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5
    tint(255, this.Visiblity); 
    pop();
  }
  else{
super.display()
  }
  
}


score(){
  if (this.Visiblity<250){
   score = score+200;
  }
}

}
