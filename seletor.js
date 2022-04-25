class Seletor{
    constructor(){
        this.menu = createRadio();
        this.menu.class("seletor");
        this.menu.option("aleatorio")
        this.menu.option("rosa")
        this.menu.option("azul")
        this.menu.option("verde")
        this.menu.option("salmão")
        this.menu.option("amarelo")
        this.menu.selected("aleatorio")
        
        this.menu2 = createRadio();
        this.menu2.class("seletor2");
        this.menu2.option("bloco temporário");
        this.menu2.option("bloco permanente");
        this.menu2.selected("bloco temporário");
    }
}