// VARIÁVEIS PARA RECEBER OS ELEMENTOS DO DOCUMENTO HTML. O FORMULÁRIO E AS TAGS <p>
const frm = document.querySelector('form')
const titulo = document.getElementById('title')
const entrada = document.getElementById('entrada')
const parcela = document.getElementById('parcela')

frm.addEventListener('submit', (e) => {
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    const metade = preco / 2 // CALCULA 50% DO PREÇO TOTAL DO VEÍCULO
    const parc12 = metade / 12 // CALCULA AS PARCELAS EM 12X DOS OUTROS 50%

    titulo.innerText = veiculo
    entrada.innerText = `Entrada de R$: ${metade}`
    parcela.innerText = `+12x de R$ ${parc12.toFixed(2)}`

    e.preventDefault() // EVITA ENVIO DO FORM
})