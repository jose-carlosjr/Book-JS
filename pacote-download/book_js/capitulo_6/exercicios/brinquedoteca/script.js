const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const criancas = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.ichild.value
    const idade = Number(frm.inIdade.value)

    criancas.push({nome, idade})
    frm.reset() // reset() DISPARA QUANDO O USUÁRIO REDEFINE UM FORMULÁRIO.
    frm.ichild.focus()
    frm.btListar.dispatchEvent(new Event('click'))
})

frm.btListar.addEventListener('click', () => {
    if (criancas.length == 0) {
        alert('Não há crianças na lista')
        return
    }

    let lista = ''

    for (const crianca of criancas) {
        const { nome, idade } = crianca // DESESTRUTURANDO O OBJETO
        lista += nome + ' - ' + idade + ' anos\n'
    }

    resp.innerText = lista
})

frm.btResumir.addEventListener('click', () => {
    if (criancas.length == 0) {
        alert('Não há criancas na lista')
        return
    }

    const copia = [...criancas] // CÓPIA DO VETOR criancas
    copia.sort((a, b) => a.idade - b.idade) // ORDENA PELA IDADE
    let resumo = '' // PARA CONCATENAR A SAÍDA
    let aux = copia[0].idade // CAPTURA A MENOR IDADE DO VETOR ORDENADO
    let nomes = [] // PARA INSERIR NOMES DE CADA IDADE

    for (const crianca of copia) {
        const {nome, idade} = crianca // DESESTRUTURANDO O OBJETO

        if (idade == aux) { // SE É DA MESMA IDADE AUXILIAR
            nomes.push(nome) // ADICIONA AO ATRIBUTO NOMES
        } 
        
        else { // SENÃO, MONTA O RESUMO PARA CADA IDADE
            resumo += aux + 'ano(s): ' + nomes.length + ' criança(s) - '
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + '%\n' // CAPTURA O PERCENTUAL DESSA IDADE NA LISTA
            resumo += '(' + nomes.join(', ') + ')\n\n'

            aux = idade // OBTÉM A NOVA IDADE NA ORDEM
            nomes = [] // LIMPA O VETOR DOS NOMES
            nomes.push(nome) // ADICIONA O PRIMEIRO DA NOVA IDADE
        }
    }

    // ADICIONA A ÚLTIMA CRIANÇA
    resumo += aux + ' anos(s): ' + nomes.length + ' criança(s) - '
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + '%\n'
    resumo += '(' + nomes.join(', ') + ')\n\n'
    resp.innerText = resumo
})

/*  EXEMPLO BASE DE LISTA
    
    lucas - 4 anos     ana - 3 anos
    ana - 3 anos       juliana - 3 anos
    bianca - 6 anos    joao - 4 anos
    pedro - 6 anos     lucas - 4 anos
    joao - 4 anos      marina - 4 anos
    marina - 4 anos    bianca - 6 anos
    juliana - 3 anos   cátia - 6 anos
    cátia - 6 anos     pedro - 6 anos
*/

/* RESUMO

3ano(s): 2criança(s) - 25.00%
(ana, juliana)

4ano(s): 3criança(s) - 37.50%
(lucas, joao, marina)

6 anos(s): 3 criança(s) - 37.50%
(bianca, pedro, cátia)
*/