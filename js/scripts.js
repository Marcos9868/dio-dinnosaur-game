const dino = document.querySelector('.dino')

function keyUp(event) {
    if (event.keyCode === 32) { // Tecla Espaço do Teclado
        Jump() // Chama a função de pulo do Dino
    }
}

function Jump() {
    let position = 0 // Posição inicial do Dino
    let upInterval = setInterval(() => {
    if (position >= 150) {
        clearInterval(upInterval)
        let downInterval = setInterval(() => {
            if (position <= 0) {
                clearInterval(downInterval)
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

document.addEventListener('keyup', keyUp) // Adiciona o evento de pressionar botão do teclado