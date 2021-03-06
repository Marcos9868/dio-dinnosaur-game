const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isJumping = false
let position = 0 // Posição inicial do Dino

function keyUp(event) {
    if (event.keyCode === 32) { // Tecla Espaço do Teclado
        if (!isJumping) {
            Jump() // Chama a função de pulo do Dino
        } 
    }
}

function Jump() {
    isJumping = true
    let upInterval = setInterval(() => {
    if (position >= 150) {
        clearInterval(upInterval)
        let downInterval = setInterval(() => {
            if (position <= 0) {
                clearInterval(downInterval)
                isJumping = false
            } else {
                position -= 20 // Demora 20 milissegundos para descer
                dino.style.bottom = position + 'px'
            }    
        }, 20)
    } else {
        position += 20  // Demora 20 milissegundos para subir
        dino.style.bottom = position + 'px'
    }
    
    }, 20)
}

function createCactus() {
    const cactus = document.createElement('div') // Cria a div para os cactps
    let cactusPosition = 1030
    let randomTime = Math.random() + 6000 // Gera um número aleatório de cactos na tela

    cactus.classList.add('cactus')
    cactus.style.left = 1200 + 'px'
    background.appendChild(cactus)

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval)
            background.removeChild(cactus)
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game Over
            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class="game-over">Game Over</h1>'
        } else {   // Continua andando para a esquerda
            cactusPosition -= 10
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20)

    setTimeout(createCactus, randomTime)
}

createCactus()

document.addEventListener('keyup', keyUp) // Adiciona o evento de pressionar botão do teclado