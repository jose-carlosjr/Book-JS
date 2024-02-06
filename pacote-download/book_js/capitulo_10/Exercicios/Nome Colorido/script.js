const frm = document.querySelector('.form')
const container = document.querySelector('.container')
const div = document.querySelector('.res')

frm.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = frm.inNome.value
    const div = document.createElement('div')
    div.className = 'res'

    // NÃO ESTÁ FUNCIONANDO AINDA
    if (document.contains(div)) {
        div.remove()
    }

    const nomes = nome.split(' ')
    console.log(nomes)

    const color = ['blue', 'red', 'green', 'magenta', 'orange', 'purple', 'yellow', 'grey', 'brown', 'aqua']

    for (let i = 0; i < nomes.length; i++) {
        const randomColor = Math.floor(Math.random() * 6)
        let text = nomes[i]
        div.innerHTML += `<h3 style='color:${color[randomColor]};'>${text}</h3>`
        color.splice(randomColor, 1)
    }

    container.appendChild(div)
})

function deleteDiv() {
    if (div) {
        div.remove()
    }
}