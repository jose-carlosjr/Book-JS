const frm = document.querySelector('form')
const dvQuadro = document.querySelector('#divQuadro')

// ADICIONA A TAREFA
frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const tarefa = frm.inTarefa.value

    const h5 = document.createElement('h5') // CRIA UM ELEMENTO H5 NO HTML
    const texto = document.createTextNode(tarefa) // CRIA UM TEXTO
    h5.appendChild(texto) // DEFINE QUE TEXTO SERÁ FILHO DE H5
    dvQuadro.appendChild(h5) // E QUE H5 SERÁ FILHO DE divQuadro

    frm.inTarefa.value = ''
    frm.inTarefa.focus()
})

frm.btSelecionar.addEventListener('click', () => {

    const tarefas = document.querySelectorAll('h5')

    if (tarefas.length == '') {
        alert('Não há tarefas para selecionar')
        return
    }

    let aux = -1 // VARIÁVEL AUXILIAR PARA INDICAR LINHA SELECIONADA

    // PERCORRE A LISTA DE ELEMENTOS h5 INSERIDOS NA PÁGINA, OU SEJA, TAREFAS
    for (let i = 0; i < tarefas.length; i++) {
        // SE TAG É DA CLASS tarefa-selecionada (ESTÁ SELECIONADA)
        if (tarefas[i].className == 'tarefa-selecionada') {
            tarefas[i].className = 'tarefa-normal'
            aux = i
            break
        }
    }

    // SE A LINHA Q ESTÁ SELECIONADA É A ÚLTIMA, IRÁ VOLTAR PARA A 1º
    if (aux == tarefas.length - 1) {
        aux = -1
    }

    // MUDA ESTILO DA PRÓXIMA LINHA
    tarefas[aux + 1].className = 'tarefa-selecionada'
})

frm.btRetirar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5')

    let aux = -1

    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == 'tarefa-selecionada') {
            aux = i
        }
    })

    if (aux == -1) {
        alert('Selecione uma tarefa para removê-la')
        return
    }

    // SOLICITA CONFIRMAÇÃO (EXIBINDO O CONTEÚDO DA TAG h5 SELECIONADA)
    if (confirm(`Confirma exclusão de "${tarefas[aux].innerText}"?`)) {
        dvQuadro.removeChild(tarefas[aux]) // TEM QUE REFERENCIAR A TAG PAI, NO CASO dvQuadro
    }
})

frm.btGravar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5')

    if (tarefas.length == 0) {
        alert ('Não há tarefas para serem salvas')
        return
    }

    let dados = '' // IRÁ ACUMULAR OS DADOS A SEREM SALVOS
    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + '; '
    })

    // GRAVA OS DADOS EM LOCAL STORAGE, REMOVENDO O ÚLTIMO ';'
    localStorage.setItem('tarefasDia', dados.slice(0, -2))

    //CONFERE SE DADOS FORAM ARMAZENADOS EM LOCAL STORAGE
    if (localStorage.getItem('tarefasDia')) {
        alert('Dados salvos com sucesso!')
    }
})