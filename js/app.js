const canvas = document.querySelector("#areaCanvas");
const ctx = canvas.getContext('2d');

let moverEsquerda = false;
let moverAcima = false;
let moverDireita = false;
let moverAbaixo = false;

let pos = {
    x: 10,
    y: 10,
    wi:60,
    hg:60
}

let velocidade = 10;


window.addEventListener('keydown', function (e) {
    const tecla = e.key;
    // console.log(e.code)
    switch (tecla) {
        case 'ArrowLeft':
            moverEsquerda = true;
            break;

        case 'ArrowRight':
            moverDireita = true;
            break;

        case 'ArrowUp':
            moverAcima = true;
            break;

        case 'ArrowDown':
            moverAbaixo = true;
            break;

    }
});

window.addEventListener('keyup', function (e) {
    const tecla = e.key;
    // console.log(e.key);
    switch (tecla) {
        case 'ArrowLeft':
            moverEsquerda = false;
            break;

        case 'ArrowRight':
            moverDireita = false;
            break;

        case 'ArrowUp':
            moverAcima = false;
            break;

        case 'ArrowDown':
            moverAbaixo = false;
            break;

    }
});

function moverrobo() {
    if (moverEsquerda && !moverDireita) {
        pos.x -= velocidade;
    }

    if (moverDireita && !moverEsquerda) {
        pos.x += velocidade;
    }

    if (moverAcima && !moverAbaixo) {
        pos.y -= velocidade;
    }

    if (moverAbaixo && !moverAcima) {
        pos.y += velocidade;
    }
    // nao deixar sair do canvas
    pos.x = Math.max(0, Math.min(canvas.width - pos.wi, pos.x));
    pos.y = Math.max(0, Math.min(canvas.height - pos.hg, pos.y));
}

function inserirImagem() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const robo = new Image();
    robo.src = "../sprites/robo1.png"
    ctx.drawImage(robo, pos.x, pos.y)
    
}


function atualizarTela() {
    window.requestAnimationFrame(atualizarTela, canvas)
    inserirImagem();
    moverrobo()
}

atualizarTela();