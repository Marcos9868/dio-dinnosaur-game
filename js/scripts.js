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
    } else {
        position += 20  // Cada 20 milissegundos ele muda a posição
        dino.style.bottom = position + 'px'
    }
    
    }, 20)
}

document.addEventListener('keyup', keyUp) // Adiciona o evento de pressionar botão do teclado