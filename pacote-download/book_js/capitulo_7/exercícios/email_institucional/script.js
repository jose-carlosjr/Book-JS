const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const nome = frm.inome.value   // Pedro Alberto Junior
    const partes = nome.split(' ') // VETOR ÍNDICE 0 AO 2: 'Pedro', 'Alberto', 'Junior'
    let email = ''
    const tamanho = partes.length  // 3

    for (let i = 0; i < tamanho - 1; i++) {
        email += partes[i].charAt(0)
        /* PRIMEIRA OCORRÊNCIA:
            partes[i] == partes[0] == 'Pedro'
            chartAt(0) == 'P'edro (O PRIMEIRO CARACTER DA STRING)
            E POR AÍ VAI...
        */
    }

    email += `${partes[partes.length - 1]}@empresa.com` // PAJunior@empresa.com
    resp.innerText = email.toLowerCase() //pajunior@empresa.com
})
