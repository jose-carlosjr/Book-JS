const frm = document.querySelector('form')
const resp =document.querySelector('pre')

function retornarTracos(nome) {
    nome = frm.iatleta.value
    const tamanho = nome.length

    resp.innerText = ''

    for (let i = 0; i < tamanho; i++) {
        resp.innerText += `${nome.charAt(i)}`
    }

    resp.innerText += '\n'

    for (let i = 0; i < tamanho; i++) {
        if (nome.charAt(i) != ' ') {
            resp.innerText += '-'
        }

        if (nome.charAt(i) == ' ') {
            resp.innerText += ' '
        }
    }
    
    resp.innerText += '\n'

    /* OU COM ARRAY
        const atleta = nome.split('')

        for (let i = 0; i < atleta.length; i++) {
            resp.innerText += `${atleta[i]}`
        }
    */
}

function categorizarAluno(n) {
    n = Number(frm.iage.value)

    resp.innerText = ''

    if (n < 5) {
        alert('Digite uma idade válida')
        frm.reset()
        resp.innerText = ''
    }

    if (n < 12 && n >= 5) {
        resp.innerText += `Categoria: Infantil`
    } else if (n >= 12 && n < 18) {
        resp.innerText += `Categoria: Juvenil`
    } else if (n >= 18) {
        resp.innerText += `Categoria: Adulto`
    }
}

frm.btCategorizar.addEventListener('click', retornarTracos)
frm.btCategorizar.addEventListener('click', categorizarAluno)