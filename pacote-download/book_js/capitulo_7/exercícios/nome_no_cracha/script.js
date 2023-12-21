const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    // METHOD trim() REMOVE OS ESPAÇOS EM BRANCO INICIAIS E FINAIS E OS CARACTERES DE TERMINAÇÃO DE LINHA DE UMA STRING.
    const nome = frm.inome.value.trim()

    if (!nome.includes(' ')) { // SE O NOME NÃO TIVER ESPAÇOS 
        alert('Insira o nome completo')
        return
    }
    // EXEMPLO: JOSÉ (1º ESPAÇO) CARLOS PEREIRA (ÚLTIMO ESPAÇO) JÚNIOR
    const firstSpace = nome.indexOf(' ') // CAPTURA O 1º ESPAÇO
    const lastSpace = nome.lastIndexOf(' ') // CAPTURA O ÚLTIMO ESPAÇO

    const cracha = nome.substring(0, firstSpace) + nome.substring(lastSpace)

    resp.innerText = ''
    resp.innerText = `${cracha}`
})