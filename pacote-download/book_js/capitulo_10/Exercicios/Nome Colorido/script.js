const frm = document.querySelector('.form')

frm.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = frm.inNome.value
    const div = document.createElement('div')
    div.className = 'res'

    const nomes = nome.split(' ')
    console.log(nomes)

    const color = ['blue', 'red', 'green', 'magenta', 'orange', 'purple']

    for (let i = 0; i < nomes.length; i++) {
        const randomColor = Math.floor(Math.random() * 6)
        let text = nomes[i]
        div.innerHTML += `<h3 style='color:${color[randomColor]};'>${text}</h3>`
    }

    frm.appendChild(div)
})