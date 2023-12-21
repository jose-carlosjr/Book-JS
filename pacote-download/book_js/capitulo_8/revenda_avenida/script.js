const frm = document.querySelector('form')
const resp1 = document.getElementById('resp1')
const resp2 = document.getElementById('resp2')
const resp3 = document.getElementById('resp3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const modelo = frm.iveiculo.value
    const ano = Number(frm.iano.value)
    const preco = Number(frm.ipreco.value)

    const classificacao = classificarVeiculo(ano)           // CLASSIFICA O VEÍCULO DE ACORDO COM O ANO DE FABRICAÇÃO
    const entrada = calcularEntrada(preco, classificacao)   // CALCULA O VALOR DE ENTRADA DE ACORDO COM O ANO DO VEÍCULO
    const parcela = (preco - entrada) / 10                  // CALCULA AS PARCELAS LEVANDO EM CONSIDERAÇÃO O VALOR DE ENTRADA

    resp1.innerText = `${modelo} - ${classificacao}`
    resp2.innerText = `Entrada R$: ${entrada.toFixed(2)}`
    resp3.innerText = `+10x R$: ${parcela.toFixed(2)}`
})

const classificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear() // RECEBE O ANO ATUAL
    let classif

    if (ano == anoAtual) {
        classif = 'Novo'
    } else if (ano < anoAtual && ano > anoAtual - 2) {
        classif = 'Seminovo'
    } else {
        classif = 'Usado'
    }

    return classif
}

const calcularEntrada = (preco, classificacao) => {
    if (classificacao == 'Novo' ) {
        return preco * 0.50
    } else if (classificacao == 'Seminovo' || classificacao == 'Usado') {
        return preco * 0.30
    }
}
