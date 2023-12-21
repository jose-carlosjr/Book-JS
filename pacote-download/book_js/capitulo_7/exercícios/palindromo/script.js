const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const frase = frm.ifrase.value // RADAR
    const tamanho = frase.length
    let inverso = ''

    for (let i = tamanho - 1; i >= 0; i--) {
        inverso += `${frase.charAt(i)}`
    }

    if (inverso == frase) {
        resp.innerText = `${inverso.toUpperCase()} é um palíndromo`
    } else {
        resp.innerText = `${inverso.toUpperCase()} não é um palíndromo`
    }
})