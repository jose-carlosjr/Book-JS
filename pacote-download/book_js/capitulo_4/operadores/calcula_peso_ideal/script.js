const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.inome.value
    const masc = frm.imasc.checked
    const altura = Number(frm.ialtura.value)
    let pesoIdeal

    if (masc) {
        pesoIdeal = 22 * (Math.pow(altura, 2))
    } else {
        pesoIdeal = 21 * (Math.pow(altura, 2))
    }
    resp.innerText = `${nome}. Seu peso ideal é: ${Number(pesoIdeal).toFixed(2)} Kg`
})

frm.addEventListener('reset', () => {
    resp.innerText = ''
})