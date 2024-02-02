const container = document.querySelector('.container')
const frm = document.querySelector('.form')

frm.addEventListener('submit', (event) => {
    event.preventDefault()

    const idade = frm.inIdade.value

    const div = document.createElement('div')
    const span = document.createElement('span')

    for (let i = 0; i < idade.length; i++) {
        const n = idade.charAt(i)
        container.appendChild(div)
        div.appendChild(span)
        const texto = document.createTextNode(n)
        span.appendChild(texto)
    }

    console.log(idade)
})

/*
if (idade.length == 1) {
    container.appendChild(div)
    div.appendChild(span)
    const texto = document.createTextNode(idade)
    span.appendChild(texto)
}
*/