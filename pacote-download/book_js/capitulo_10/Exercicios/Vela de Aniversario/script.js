const container = document.querySelector('.container')
const frm = document.querySelector('.form')
let deleteDivRes = document.querySelector('.res')

frm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (deleteDivRes) {
        deleteDivRes.remove()
    }

    const idade = frm.inIdade.value

    const div = document.createElement('div')
    div.className = 'res'
    container.appendChild(div)

    for (let i = 0; i < idade.length; i++) {
        if (idade <= 120) {
            const n = idade.charAt(i)
            div.innerHTML += `<img src='img/${n}.png' class='image'>`
        }
    }

    if (idade > 120) {
        alert(`Impossível sua idade ser ${idade}`)
    }
})

/*
if (idade.length == 1) {
    container.appendChild(div)
    div.appendChild(span)
    const texto = document.createTextNode(idade)
    span.appendChild(texto)
}
*/