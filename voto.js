const candidatos = [
    {
        nome: 'Candidato A',
        imagem: 'avatar.jpg',
    },

    {
        nome: 'Candidato B',
        imagem: 'avatar.jpg',
    }
]
// Total de votos
let campo = document.getElementById('campo')
const { totalA, totalB } = JSON.parse(document.cookie)
// Vota em algum candidato
const votar = () => {
    let numero = Number(document.getElementById('numero').value)
    let { totalA = 0, totalB = 0 } = document.cookie ? JSON.parse(document.cookie) : {}
    if (numero === 10) {
        totalA++
        campo.innerHTML = `
        <audio src="./confirma-som.mp3"></audio>
        <div id = "resultado">
        <h2>Você votou em ${candidatos[0].nome}</h2>
        <img class = "candidato"src="${candidatos[0].imagem}"><br>
        </div>`
        const audio = document.querySelector('audio')
        audio.play()
    } else if (numero === 12){
        totalB++
        campo.innerHTML = `
        <audio src="./confirma-som.mp3"></audio>
        <div id = "resultado">
        <h2>Você votou em ${candidatos[1].nome}</h2>
        <img class = "candidato" src="${candidatos[1].imagem}"><br>
        </div>`
        const audio = document.querySelector('audio')
        audio.play()
    } else {
        campo.innerHTML = `
        <audio src="./confirma-som.mp3"></audio>
        <div id = "resultado">
        <h2>Você votou <strong>NULO</strong></h2>
        </div>`
        const audio = document.querySelector('audio')
        audio.play()
    }
    document.cookie = `{"totalA":${totalA},"totalB":${totalB}}`
    console.log(numero)
    setTimeout(function() {
        window.location.reload(1);
      }, 5000);
}

// Vota em Branco
const branco = () => {
    let { totalA = 0, totalB = 0 } = document.cookie ? JSON.parse(document.cookie) : {}
    if (totalA < totalB) {
        totalB++
        campo.innerHTML = `
            <audio src="./confirma-som.mp3"></audio>
            <div id = "resultado">
                <h2>Você votou em Branco!</h2>
            </div>`
            const audio = document.querySelector('audio')
            audio.play()
    } else if (totalB < totalA) {
        totalA++
        campo.innerHTML = `
            <audio src="./confirma-som.mp3"></audio>
            <div id = "resultado">
                <h2>Você votou em Branco!</h2>
            </div>`
            const audio = document.querySelector('audio')
            audio.play()
    } else {
        alert('Você deve votar Nulo ou em algum candidato!')
    }
    document.cookie = `{"totalA":${totalA},"totalB":${totalB}}`
    setTimeout(function() {
        window.location.reload(1);
      }, 5000);
}

// Teclado numérico
const botao = (n) => {
    numero.value += n
  }

const corrige = () => {
    numero.value = ''
}