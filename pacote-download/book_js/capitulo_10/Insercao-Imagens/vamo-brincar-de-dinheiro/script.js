const frm = document.querySelector('form')
const dvMoedas = document.querySelector('#divMoedas')

window.addEventListener('load', () => {
    // GERA NUMEROS ALEATÓRIOS, ENTRE 1 E 5, PARA CADA MOEDA
    const num1_00 = Math.ceil(Math.random() * 5)
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    // DEFINE TEXTO ALTERNATIVO DAS IMAGENS (ACESSIBILIDADE)
    const alt1_00 = "Moedas de um real"
    const alt0_50 = "Moedas de cinquenta centavos"
    const alt0_25 = "Moedas de vinte e cinco centavos"
    const alt0_10 = "Moedas de dez centavos"

    // CHAMA O MÉTODO CRIAR MOEDAS PASSANDO OS ARGUMENTOS
    criarMoedas(num1_00, '1_00.jpg', alt1_00, 'moeda1-00')
    criarMoedas(num0_50, '0_50.png', alt0_50,'moeda0-50')
    criarMoedas(num0_25, '0_25.png', alt0_25, 'moeda0-25')
    criarMoedas(num0_10, '0_10.png', alt0_10,'moeda0-10')
})

const criarMoedas = (num, moeda, textoAlt, classe) => {
    //  CRIA LAÇO DE REPETIÇÃO PARA INSERIR VÁRIAS IMAGENS DE MOEDAS NA PÁGINA
    for (let i = 1; i <= num; i++) {
        const novaMoeda = document.createElement('img') // CRIA ELEMENTO img
        novaMoeda.src = `img/${moeda}` // ATRIBUTO src
        novaMoeda.textoAlt = textoAlt // TEXTO ALTERNATIVO
        novaMoeda.className = classe // CLASSE DA MOEDA (CSS)
        dvMoedas.appendChild(novaMoeda)
    }

    const br = document.createElement('br')
    dvMoedas.appendChild(br)
}

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const soma = Number(frm.inSoma.value)
    const moedas = dvMoedas.querySelectorAll('img')
    let totalMoedas = 0

    // PERCORRE AS TAGS img E VERIFICA A class
    for (const moeda of moedas) {
        if (moeda.className == 'moeda1-00') {
            totalMoedas += 1
        } else if (moeda.className == 'moeda0-50') {
            totalMoedas += 0.50
        } else if (moeda.className == 'moeda0-25') {
            totalMoedas += 0.25
        } else {
            totalMoedas += 0.10
        }
    }

    const div = document.createElement('div')
    const h3 = document.createElement('h3')

    let mensagem

    if (soma == totalMoedas.toFixed(2)) {
        div.className = 'alert alert-succes'
        mensagem = 'Parabéns! Você acertou!'
    } else {
        div.className = 'alert alert-danger'
        mensagem = `Ops! A resposta correta é: ${totalMoedas.toFixed(2)}`
    }

    const texto = document.createTextNode(mensagem)
    h3.appendChild(texto)
    div.appendChild(h3)
    dvMoedas.appendChild(div)

    frm.submit.disabled = true // DESABILITA BOTÃO (RESPOSTA JÁ FOI CONCLUÍDA)
})