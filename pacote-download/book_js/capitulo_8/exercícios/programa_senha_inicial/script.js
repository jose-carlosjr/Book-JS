const frm = document.querySelector('form')
const resp = document.querySelector('h3')

function validarNome(nome) {
    nome = frm.inome.value
    const tamanho = nome.length
    let contador = 0

    for (let i = 0; i < tamanho; i++) {
        if (nome.charAt(i) == ' ') {
            contador++
        }
    }

    if (contador >= 2) {
        return true
    } else if (contador < 2) {
        alert('Nome Incompleto!')
        frm.inome.value = ''
        frm.inome.focus()
    }
}

function obterSobrenome(nome) {
    nome = frm.inome.value
    let nomeCopia = []
    nomeCopia = nome
    const sobreNome = nomeCopia.split(' ')
    
    resp.innerText = `${sobreNome[sobreNome.length - 1]}` // CAPTURA O ÚLTIMO ÍNDICE DO VETOR sobreNome
}

function contarVogais(nome) {
    nome = frm.inome.value
    const tamanho = nome.length
    let contador = 0

    for (let i = 0; i < tamanho; i++) {
        switch (nome.charAt(i)) {
            case 'a':
            case 'A':
                contador++
                break
            case 'e':
                contador++
                break
            case 'i':
                contador++
                break
            case 'o':
                contador++
                break
            case 'u':
                contador++
                break
        }
    }
    if (contador != 0) {
        resp.innerText += `0${contador}`
    }
}

frm.btGerarSenha.addEventListener('click', validarNome)
frm.btGerarSenha.addEventListener('click', obterSobrenome)
frm.btGerarSenha.addEventListener('click', contarVogais)