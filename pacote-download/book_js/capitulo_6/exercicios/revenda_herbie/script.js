const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const carros = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const modelo = frm.icar.value
    const preco = Number(frm.ipreco.value)

    carros.push({modelo, preco})
    frm.icar.value = ''
    frm.ipreco.value = ''
    icar.focus()

    // DISPARA UM EVENTO DE CLICK EM btListar (EQUIVALE A UM CLICK NO BOTÃO NA PÁGINA)
    // FAZEMOS ISSO PARA A LISTAGEM DOS DADOS SER ATUALIZADA APÓS INCLUIRMOS UM VEÍCULO NO VETOR
    frm.btListar.dispatchEvent(new Event('click'))
})

frm.btListar.addEventListener('click', () => {
    if (carros.length == 0) {
        alert('Não há carros na lista')
        return
    }
    // CONCATENA O MODELO DO CARRO E SEU PREÇO
    const lista = carros.reduce((acumulador, carro) => acumulador + carro.modelo + ' - R$ ' + carro.preco.toFixed(2) + '\n', '' )
    resp.innerText = `Lista dos carros cadastrados: ${'-'.repeat(40)}\n \n${lista}`
})

frm.btFiltrar.addEventListener('click', () => {
    const maximo = Number(prompt('Qual o valor máximo que o senhor deseja pagar?'))

    if (maximo == 0 || isNaN(maximo)) { // CASO SEJA DIGITADO 0 OU NENHUM VALOR
        return
    }

    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    
    if (carrosFilter.length == 0) { // CASO TAMANHO DO VETOR FILTRADO SEJA 0, OU SEJA, NÃO HAJA 'preco' INFERIOR OU IGUAL Q 'maximno'
        alert('Não há carros com preço inferior ou igual ao solicitado')
        return
    }

    let lista = ''

    for (const carro of carrosFilter) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }

    resp.innerText = `Carros Até RS: ${maximo.toFixed(2)}\n${'-'.repeat(40)}\n${lista}`
})

frm.btSimular.addEventListener('click', () => {
    const desconto = Number(prompt('Qual o percentual de desconto: '))

    if (desconto == 0 || isNaN(desconto)) {
        return
    }

    const carrosDesc = carros.map( aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100) // CÁLCULO PARA IDENTIFICAR O VALOR EQUIVALENTE AO PERCENTUAL DE DESCONTO
    }))

    let lista = ''

    for (const carro of carrosDesc) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }

    resp.innerText = `Carros com desconto de ${desconto}%\n${'-'.repeat(40)}\n${lista}`
})