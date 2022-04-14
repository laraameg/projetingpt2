class Bloco {
    constructor (cor) {
        this.sprite = createSprite(mouseX, mouseY, 90, 49)
        this.cor = cor
        this.sprite.shapeColor = cor
        this.visibilidade = 1
        this.collision = false
    }

}