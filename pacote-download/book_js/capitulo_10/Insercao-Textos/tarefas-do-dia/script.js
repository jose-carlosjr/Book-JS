const frm = document.querySelector('form')
const dvQuadro = document.querySelector('#divQuadro')

// ADICIONA A TAREFA
frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const tarefa = frm.inTarefa.value

    const h5 = document.createElement('h5') // CRIA UM ELEMENTO H5 NO HTML
    const texto = document.createTextNode(tarefa) // CRIA UM TEXTO
    h5.appendChild(texto) // DEFINE QUE TEXTO SERÁ FILHO DE H5
    dvQuadro.appendChild(h5) // E QUE H5 SERÁ FILHO DE divQuadro

    frm.inTarefa.value = ''
    frm.inTarefa.focus()
})

