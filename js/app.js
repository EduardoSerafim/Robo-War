const canvas = document.querySelector("#areaCanvas");
const ctx = canvas.getContext('2d');

let moverEsquerda = false;
let moverAcima = false;
let moverDireita = false;
let moverAbaixo = false;

let posiRobo1 = {
    x: 10,
    y: 10,
    wi:60,
    hg:60
}

let velocidade = 10;


window.addEventListener('keydown', function (e) {
    const tecla = e.key;
    
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
        posiRobo1.x -= velocidade;
    }

    if (moverDireita && !moverEsquerda) {
        posiRobo1.x += velocidade;
    }

    if (moverAcima && !moverAbaixo) {
        posiRobo1.y -= velocidade;
    }

    if (moverAbaixo && !moverAcima) {
        posiRobo1.y += velocidade;
    }
    // nao deixar sair do canvas
    posiRobo1.x = Math.max(0, Math.min(canvas.width - posiRobo1.wi, posiRobo1.x));
    posiRobo1.y = Math.max(0, Math.min(canvas.height - posiRobo1.hg, posiRobo1.y));
}

//sprites na tela
function inserirImagem() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const robo = new Image();
    robo.src = "../sprites/robotica.png"
    ctx.drawImage(robo, posiRobo1.x, posiRobo1.y)

    const robo2 = new Image();
    robo2.src = "../sprites/tanque.png"
    ctx.drawImage(robo2, posiRobo2.x, posiRobo2.y)
    
    
}


//-------movimentação do Segundo robô



let moverEsquerda2 = false;
let moverAcima2 = false;
let moverDireita2 = false;
let moverAbaixo2 = false;

let posiRobo2 = {
    x: 990,
    y: 480,
    wi:60,
    hg:60
}



window.addEventListener('keydown', function (e) {
    const tecla = e.code;
    
    switch (tecla) {
        case 'KeyA':
            moverEsquerda2 = true;
            break;

        case 'KeyD':
            moverDireita2 = true;
            break;

        case 'KeyW':
            moverAcima2 = true;
            break;
            inserirImagem
        case 'KeyS':
            moverAbaixo2 = true;
            break;

    }
});

window.addEventListener('keyup', function (e) {
    const tecla = e.code;
    
    switch (tecla) {
        case 'KeyA':
            moverEsquerda2 = false;
            break;

        case 'KeyD':
            moverDireita2 = false;
            break;

        case 'KeyW':
            moverAcima2 = false;
            break;

        case 'KeyS':
            moverAbaixo2 = false;
            break;

    }
});

function moverrobo2() {
    if (moverEsquerda2 && !moverDireita2) {
        posiRobo2.x -= velocidade;
    }

    if (moverDireita2 && !moverEsquerda2) {
        posiRobo2.x += velocidade;
    }

    if (moverAcima2 && !moverAbaixo2) {
        posiRobo2.y -= velocidade;
    }

    if (moverAbaixo2 && !moverAcima2) {
        posiRobo2.y += velocidade;
    }
    // nao deixar sair do canvas
    posiRobo2.x = Math.max(0, Math.min(canvas.width - posiRobo2.wi, posiRobo2.x));
    posiRobo2.y = Math.max(0, Math.min(canvas.height - posiRobo2.hg, posiRobo2.y));
}



function atualizarTela() {
    window.requestAnimationFrame(atualizarTela, canvas)
    inserirImagem();
    moverrobo()
    moverrobo2();
}

atualizarTela();