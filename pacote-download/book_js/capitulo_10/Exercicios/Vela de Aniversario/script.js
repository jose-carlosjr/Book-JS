const container = document.querySelector('.container')
const frm = document.querySelector('.form')

frm.addEventListener('submit', (event) => {
    event.preventDefault()

    const idade = frm.inIdade.value

    const div = document.createElement('div')
    container.appendChild(div)

    for (let i = 0; i < idade.length; i++) {
        const n = idade.charAt(i)
        div.innerHTML += `<img src='img/${n}.jpg' class='image'>`
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