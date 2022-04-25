var bola, bordaCima, bordaBaixo, BordaDireita, BordaEsquerda
var bloco
var blocos
var a = "pink"
var b = "aquamarine"
var d = "lightgreen"
var e = "lightsalmon"
var f = "palevioletred" //removemos
var g = "lemonchiffon"
var cores = [a, b, d, e, g]
var s1
var s2
var s3
var s4
var s5
var s6
var sons, seletor
var clique = false;
var reset;

function preload() {
    s1 = loadSound("s1.mp3")
    s2 = loadSound("s2.mp3")
    s3 = loadSound("s3.mp3")
    s4 = loadSound("s4.mp3")
    s5 = loadSound("s5.mp3")
    s6 = loadSound("s6.mp3")
    sons = [s1, s2, s3, s4, s5, s6]
}

function setup() {
    createCanvas(800, 800)
    bola = new Bola();
    bordaCima = new Bordas(400, 25, "h", random(cores))
    bordaBaixo = new Bordas(400, 775, "h", random(cores))
    bordaDireita = new Bordas(775, 400, "v", random(cores))
    bordaEsquerda = new Bordas(25, 400, "v", random(cores))

    blocos = new Group()

    seletor = new Seletor();

    reset = createImg("reset.png");
    reset.size(50,50);
    reset.position(800,0);
    reset.mouseClicked(() => {
        blocos.destroyEach();
        bola.sprite.position.x = 400;
        bola.sprite.position.y = 400;
        bola.sprite.setVelocity(0,0);
        bola.sprite.tint = "white";
    })
}

function draw() {
    background(color(10, 20, 30));
    if (keyDown("space")) {
        bola.sprite.velocityX = 10
        bola.sprite.velocityY = 05
    }

    bola.quicar(blocos);
    bola.quicar(bordaBaixo.sprite);
    bola.quicar(bordaCima.sprite);
    bola.quicar(bordaDireita.sprite);
    bola.quicar(bordaEsquerda.sprite);

    drawSprites();

    if (mouseIsPressed && !clique) {
        clique = true;
        setTimeout(() => {
            clique = false;
        }, 100);
        var selecionado = seletor.menu.value();
        var cor;

        switch (selecionado) {
            case "rosa":
                cor = a
                break;
            case "aleatorio":
                cor = random(cores);
                break;
            case "azul":
                cor = cores[1]
                break;
            case "verde":
                cor = cores[2]
                break;
            case "salmão":
                cor = cores[3]
                break;
            case "amarelo":
                cor = cores[4]
                break;
            default:
                console.error("error")
                break;
        }
        bloco = new Bloco(cor);
        //cor
        bloco.sprite.depth = 0;
        blocos.add(bloco.sprite);
    }

}