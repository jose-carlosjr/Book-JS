const frm = document.querySelector('form')
const respNome = document.querySelector('span')
const respLista = document.querySelector('pre')

const pacientes = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.ipaciente.value
    pacientes.push(nome) // ADICIONA O PACIENTE AO FINAL DO VETOR

    let lista = ''

    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]} \n`
    }

    respLista.innerText = lista // EXIBE A LISTA DE PACIENTES NA PÁGINA
    frm.ipaciente.value = '' // LIMPA O CONTEÚDO DO CAMPO DO FORMULÁRIO
    frm.ipaciente.focus() // POSICIONA O CURSOR NO CAMPO
})

// OUVINTE PARA O BOTÃO DE URGÊNCIA
frm.btUrgencia.addEventListener('click', () => {
    /*
        AS REGRAS DE VALIDAÇÃO ADICIONADAS AOS CAMPOS FORM, COMO required, min, max, SAO AVALIADAS APENAS
        QUANDO O BOTÃO submit É CLICADO. ENTÃO QUANDO UTILIZARMOS UM button E QUISERMOS VALIDAR O FORM, DEVEMOS
        ACRESCENTAR ESSA CONDIÇÃO 
    */
    if (!frm.checkValidity()) { // RETURNS WHETHER A FORM WILL VALIDATE WHEN IT IS SUBMITTED, WITHOUT HAVING TO SUBMIT IT.
        alert('Informe o nome do paciente a ser atendido em caráter de urgência!')
        frm.ipaciente.focus()
        return // RETORNA AO FORMULÁRIO
    }

    const nome = frm.ipaciente.value
    pacientes.unshift(nome) // ADICIONA PACIENTE NO INÍCIO DO VETOR
    let lista = '' // string PARA CONCATENAR PACIENTES

    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`))
    respLista.innerText = lista
    frm.ipaciente.value = ''
    frm.ipaciente.focus()
})

// OUVINTE PARA O BOTÃO ATENDER

frm.btAtender.addEventListener('click', () => {
    // SE O TAMANHO DO VETOR FOR IGUAL A 0
    if (pacientes.length == 0) {
        alert('Não há pacientes na lista de espera')
        frm.ipaciente.focus()
        return
    }

    const atender = pacientes.shift() // REMOVE E CAPTURA O PRIMEIRO NOME DA LISTA
    respNome.innerText = atender // EXIBE O NOME DO PACIENTE EM ATENDIMENTO
    let lista = '' // string PARA CONCATENAR PACIENTES

    // LAÇO PARA "ATUALIZAR" A LISTA DE PACIENTES. O SEGUNDO PASSA A SER O PRIMEIRO E ASSIM POR DIANTE
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente} \n`))
    respLista.innerText = lista // respLista RECEBE A LISTA ATUALIZADA. APÓS O 1º PACIENTE SER ATENDIDO
})

frm.addEventListener('reset', (e) => { // LIMPA TODOS OS DADOS
    respNome.innerText = ''
    respLista.innerText = ''
})