class Seletor{
    constructor(){
        this.menu = createRadio();
        this.menu.class("seletor");
        this.menu.option("aleatorio")
        this.menu.option("som 1")
        this.menu.option("som 2")
        this.menu.option("som 3")
        this.menu.option("som 4")
        this.menu.option("som 5")
        this.menu.selected("aleatorio")
        
    }
}