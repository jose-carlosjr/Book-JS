const frm = document.querySelector('form')
const resp = document.querySelector('h4')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const num = Number(frm.iraiz.value)
    const raiz = Math.sqrt(num)

    if (Number.isInteger(raiz)) {
        resp.innerText = `A raíz de ${num} é: ${raiz}`
        resp.style.color = '#26e51f'
    } else {
        resp.innerText = `${num} Não possui raíz exata`
        resp.style.color = 'red'
    }

})