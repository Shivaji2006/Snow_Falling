class Character extends BaseClass{
    constructor(x,y){
        super(x,y,10,10);
        this.image = loadImage("character.jpg");
    }

    display(){
        super.display();
       
    }
}