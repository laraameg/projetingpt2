class Bloco {
    constructor (cor) {
        if (seletor.menu2.value() === "bloco temporário") {
            this.sprite = createSprite(mouseX, mouseY, 90, 49)
        } else {
            this.sprite = createSprite(mouseX, mouseY, 90, 50)
        }
        
        this.cor = cor
        this.sprite.shapeColor = cor
        this.visibilidade = 1
        this.collision = false
    }

}