const frm = document.querySelector('.form')

frm.addEventListener('submit', (event) => {
    event.preventDefault()

    const nome = frm.inNome.value
    const div = document.createElement('div')
    const h3 = document.createElement('h3')

    const nomes = nome.split(' ')
    console.log(nomes)

    for (let i = 0; i < nomes.length; i++) {
        let text = document.createTextNode(nomes[i])
        h3.appendChild(text)
        div.appendChild(h3)
    }
})