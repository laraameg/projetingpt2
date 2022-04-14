class Bola {
    constructor() {
        this.cor = "white"
        this.image = loadImage("bola.png")
        this.sprite = createSprite(400, 400)
        this.sprite.addImage(this.image);
        this.sprite.scale = 0.08;
        
    }
    
    quicar(sprite){
        this.sprite.bounceOff(sprite, this.corSom);
    }

    corSom(bola, outro){
        bola.tint = outro.shapeColor
        if (outro.height<50) {
            outro.destroy();
        }
        switch (outro.shapeColor) {
            case cores[0]:
                sons[0].play();
                break;
            case cores[1]:
                sons[1].play();
                break;  
            case cores[2]:
                sons[2].play();
                break;  
            case cores[3]:
                sons[3].play();
                break;
            case cores[4]:
                sons[4].play();
                break;
            case cores[5]:
                sons[5].play();
                break;
            default:
                console.error("error " + outro)
                break;
        }
    }
}