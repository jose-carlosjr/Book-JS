const frm = document.querySelector('form')
const resp1 = document.getElementById('resp1')
const resp2 = document.getElementById('resp2')

// VARIÁVEIS DECLARADAS NO ESCOPO GLOBAL PARA QUE CONTINUEM DISPONÍVEIS EM MEMÓRIA ENQUANTO A PÁGINA ESTÁ ATIVA
let resposta = '' // String COM A RESPOSTA A SER EXIBIDA
let numContas = 0 // INICIALIZA O CONTADOR
let valTotal = 0 // E ACUMULADOR (VARIÁVEIS GLOBAIS)

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const descricao = frm.idescricao.value
    const valor = Number(frm.ival.value)

    numContas++ // ADICIONA VALORES AO CONTADOR E ACUMULADOR
    valTotal = valTotal + valor // OU valTotal += valor
    resposta = resposta + descricao + ' - R$: ' + valor.toFixed(2) + '\n'
    resp1.innerText = `${resposta} -----------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.idescricao.value = ''
    frm.ival.value = ''
    frm.idescricao.focus()
})