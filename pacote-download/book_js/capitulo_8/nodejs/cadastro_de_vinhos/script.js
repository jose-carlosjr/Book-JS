const vinhos = []

function titulo(texto) {
    console.log(`\n ${texto}`)
    console.log(`${'.'.repeat(40)}`)
}

do {
    console.log('1. Inclusão de Vinhos')
    console.log('2. Listagem de Vinhos')
    console.log('3. Pesquisa por Tipo')
    console.log('4. Média e Destaques')
    console.log('5. Finalizar')

    const opcao = Number(prompt('Opção: '))

    if (opcao == 1) {
        incluir()
    } else if (opcao == 2) {
        listar()
    } else if (opcao == 3) {
        pesquisar()
    } else if (opcao == 4) {
        calcularMedia()
    } else {
        break
    }
} while (true)

function incluir() {
    titulo('<==Inclusão de Vinhos==>')

    const marca = prompt('Marca...: ')
    const tipo = prompt('Tipo...: ')
    const preco = Number(prompt('Preço R$: '))

    vinhos.push({marca, tipo, preco}) // INSERE UM OBETO NO VETOR
    console.log('Vinho Cadastrado com Sucesso')
}

function listar() {
    titulo('<==Lista de Vinhos Cadastrados==>')

    console.log('Marca...............Tipo...............Preço R$:')

    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` + `${vinho.preco.padStart(9)}`)
    }
}

function pesquisar() {
    titulo('<==Pesquisa por Tipo de Vinho==>')

    const pesq = (prompt('Tipo: '))

    let contador = 0 // CONTADOR PARA VERIFICAR SE EXISTE
    console.log('Marca...............Tipo...............Preço R$:')

    for (const vinho of vinhos) {
        if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)}` + `${vinho.preco.padStart(9)}`)
            contador++
        }

        if (contador == 0) {
            console.log(`Obs.: Não há vinhos cadastrados do tipo "${tipo}`)
        }
    }

    // COMO OS DADOS FORAM CONVERTIDOS PARA MAIÚSUCLAS NA COMPARAÇÃO, INDEPENDE DO FORMATO DIGITADO PELO USUÁRIO 
}

function calcularMedia() {
    titulo('<==Média e Destaques do Cadastro de Vinhos==>')

    const num = vinhos.length
    if (num == 0) {
        console.log('Não há vinhos cadastrados')
        return
    }

    let total = 0
    for (const vinho of vinhos) {
        total += vinho.preco // PEGA O VALOR TOTAL DE TODOS OS VINHOS
    }

    const media = total / num
    const vinhos2 = [...vinhos] // CÓPIA DO VETOR ORIGINAL
    
    // sort() CLASSIFICA UMA MATRIZ NO LOCAL. ESTE MÉTODO MODIFICA O ARRAY E RETORNA UMA REFERÊNCIA AO MESMO ARRAY.
    vinhos.sort((a, b) => a.preco - b.preco) // ORDENA POR PREÇO

    const menor = vinhos2[0]        // MENOR PREÇO É O PRIMEIRO
    const maior = vinhos2[num - 1]  // MAIOR PREÇO É O ÚLTIMO

    console.log(`Preço Médio dos Vinhos R$: ${media.toFixed(2)}`)
    console.log(`Menor Valor R$: ${menor.toFixed(2)} - ${menor.marca}`)
    console.log(`Maior Valor R$: ${maior.toFixed(2)} - ${maior.marca}`)
}