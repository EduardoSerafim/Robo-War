const canvas = document.querySelector("#areaCanvas");
const ctx = canvas.getContext('2d');

let moverEsquerda = false;
let moverAcima = false;
let moverDireita = false;
let moverAbaixo = false;

let pos2 = {
    x: 100,
    y: 100,
    wi:60,
    hg:60
}

let velocidade = 10;


window.addEventListener('keydown', function (e) {
    const tecla = e.code;
    // console.log(e.code)
    switch (tecla) {
        case 'KeyA':
            moverEsquerda = true;
            break;

        case 'KeyD':
            moverDireita = true;
            break;

        case 'KeyW':
            moverAcima = true;
            break;

        case 'KeyS':
            moverAbaixo = true;
            break;

    }
});

window.addEventListener('keyup', function (e) {
    const tecla = e.code;
    // console.log(e.key);
    switch (tecla) {
        case 'KeyA':
            moverEsquerda = false;
            break;

        case 'KeyD':
            moverDireita = false;
            break;

        case 'KeyW':
            moverAcima = false;
            break;

        case 'KeyS':
            moverAbaixo = false;
            break;

    }
});

function moverrobo() {
    if (moverEsquerda && !moverDireita) {
        pos2.x -= velocidade;
    }

    if (moverDireita && !moverEsquerda) {
        pos2.x += velocidade;
    }

    if (moverAcima && !moverAbaixo) {
        pos2.y -= velocidade;
    }

    if (moverAbaixo && !moverAcima) {
        pos2.y += velocidade;
    }
    // nao deixar sair do canvas
    pos2.x = Math.max(0, Math.min(canvas.width - pos2.wi, pos2.x));
    pos2.y = Math.max(0, Math.min(canvas.height - pos2.hg, pos2.y));
}

function inserirImagem() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const robo2 = new Image();
    robo2.src = "../sprites/robo2.png"
    ctx.drawImage(robo2, pos2.x, pos2.y)
    
}


function atualizarTela() {
    window.requestAnimationFrame(atualizarTela, canvas)
    inserirImagem();
    moverrobo()
}

atualizarTela();