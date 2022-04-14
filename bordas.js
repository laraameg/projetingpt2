class Bordas {
    constructor(x, y, dir, cor) {
        if (dir === "h") {
            this.sprite = createSprite (x, y, width, 50)  
        }
        else{
            this.sprite = createSprite (x, y, 50, height)
        }
        this.cor = cor
        this.sprite.shapeColor = this.cor

    }

}