let candidatos = [
    {
        nome: 'Bolsonaro',
        imagem: 'bolsonaro.png',
    },

    {
        nome: 'Lula',
        imagem: 'lula.png',
    }
]
// Total de votos
let campo = document.getElementById('campo')
const { totalA, totalB } = JSON.parse(document.cookie)
// Vota em algum candidato
function votar() {
    let numero = Number(document.getElementById('numero').value)
    let { totalA = 0, totalB = 0 } = document.cookie ? JSON.parse(document.cookie) : {}
    if (numero === 17) {
        totalA++
        campo.innerHTML = `
        <div id = "resultado">
        <h2>Você votou em ${candidatos[0].nome}</h2>
        <img src="${candidatos[0].imagem}"><br>
        </div>`
    } else if (numero === 13){
        totalB++
        campo.innerHTML = `
        <div id = "resultado">
        <h2>Você votou em ${candidatos[1].nome}</h2>
        <img src="${candidatos[1].imagem}"><br>
        </div>`
    } else {
        campo.innerHTML = `
        <div id = "resultado">
        <h2>Você votou <strong>NULO</strong></h2>
        </div>`
    }
    document.cookie = `{"totalA":${totalA},"totalB":${totalB}}`
    console.log(numero)
    setTimeout(function() {
        window.location.reload(1);
      }, 5000);
}

// Vota em Branco
function branco() {
    let { totalA = 0, totalB = 0 } = document.cookie ? JSON.parse(document.cookie) : {}
    if (totalA < totalB) {
        totalB++
        campo.innerHTML = `
            <div id = "resultado">
                <h2>Você votou em Branco!</h2>
            </div>`
    } else if (totalB < totalA) {
        totalA++
        campo.innerHTML = `
            <div id = "resultado">
                <h2>Você votou em Branco!</h2>
            </div>`
    } else {
        alert('Você deve votar Nulo ou em algum candidato!')
    }
    document.cookie = `{"totalA":${totalA},"totalB":${totalB}}`
    setTimeout(function() {
        window.location.reload(1);
      }, 5000);
}

// Teclado numérico
function botao(n) {
    numero.value += n
  }

function corrige() {
    numero.value = ''
}