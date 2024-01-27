const frm = document.querySelector('form')
const tbFilmes = document.querySelector('table')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const titulo = frm.inTitulo.value
    const genero = frm.inGenero.value

    inserirLinha(titulo, genero)
    gravarFilme(titulo, genero)

    frm.reset()
    frm.inTitulo.focus()
})

const inserirLinha = (titulo, genero) => {
    // ADICIONA UMA LINHA NA TABELA. (-1) INSERE A LINHA NO FINAL DA TABELA
    const linha = tbFilmes.insertRow(-1)

    // CRIA COLUNAS NA LINHA INSERIDA
    const col1 = linha.insertCell(0)
    const col2 = linha.insertCell(1)
    const col3 = linha.insertCell(2)

    col1.innerText = titulo
    col2.innerText = genero
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008</i>"
}