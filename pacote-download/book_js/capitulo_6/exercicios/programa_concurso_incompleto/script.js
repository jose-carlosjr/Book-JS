const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const resp2 = document.querySelector('h3')

let candidato = [{}]

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // DESESTRUTURAÇÃO DO OBJETO
    //let {nome, acertos} = candidato

    nome = frm.icandidato.value
    acertos = Number(frm.inum.value)

    candidato.push({nome, acertos})

    resp.innerText += `${nome} - ${acertos} acertos \n`

    frm.reset()
    frm.icandidato.focus()
})

frm.btListar.addEventListener('click', () => {
    
})

frm.btAprovados.addEventListener('click', () => {
    if (candidato.length == 0) {
        alert('Não há candidatos na lista')
        return
    }

    resp2.innerText = ''

    const question = window.prompt('Número de acertos para a aprovação: ')
    const candidatoCopy = candidato.filter(x => x.acertos >= question)

    for (let c of candidatoCopy) {
        resp2.innerText += `${c.nome} - ${c.acertos} acertos \n`
    }

    if (candidatoCopy.length == 0) {
        alert('Ninguém está aprovado')
    }

})

// max.unshift(Math.max(c.acertos))

// candidatoCopy.unshift(Math.max(c.acertos))

/*
    jose -   50 acertos 
    maria -  35 acertos 
    josias - 67 acertos 
    jonas -  34 acertos 
    beca -   87 acertos
*/