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
    col3.innerHTML = "<i class='exclui material-symbols-outlined' title='Excluir'>close</i>"
}


const gravarFilme = (titulo, genero) => {
    // SE HOUVER DADOS SALVOS EM LOCAL STORAGE
    if (localStorage.getItem('filmesTitulo')) {
        // OBTÉM OS DADOS E ACRESCENTA ";" E O TÍTULO/GÊENERO INFORMADO
        const filmesTitulo = localStorage.getItem('filmesTitulo') + '; ' + titulo
        const filmesGenero = localStorage.getItem('filmesGenero') + '; ' + genero
        localStorage.setItem('filmesTitulo', filmesTitulo)
        localStorage.setItem('filmesGenero', filmesGenero)
    } else {
        // SENÃO, É A PRIMEIRA INCLUSÃO (SALVA SEM DELIMITADOR)
        localStorage.setItem('filmesTitulo', titulo)
        localStorage.setItem('filmesGenero', genero)
    }
}

window.addEventListener('load', () => {
    // SE HOUVER DADOS SALVOS EM localStorage
    if (localStorage.getItem('filmesTitulo')) {
        // OBTÉM CONTEÚDO E CONVERTE EM ELEMENTOS DE VETOR (NA OCORRÊNCIA ";")
        const titulos = localStorage.getItem('filmesTitulo').split(';')
        const genero = localStorage.getItem('filmesGenero').split(';')

        // PERCORRE OS ELEMENTOS DO VETOR
        for (let i = 0; i < titulos.length; i++) {
            inserirLinha(titulos[i], genero[i])
        }
    }
})

tbFilmes.addEventListener('click', (e) => {
    // SE A CLASSE DO ELEMENTO ALVO CLICADO CONTÉM EXCLUI
    if (e.target.classList.contains('exclui')) { // OU: e.target.classList.includes('exclui') 
        // ACESSA O PAI DO PAI DO ELEMENTO ALVO, E OBTÉM O TEXTO DO 1º FILHO, QUE NO CASO É O NOME DO FILME, JUSTAMENTE PARA APARECER NA CAIXA DE MENSAGEN
        const titulo = e.target.parentElement.parentElement.children[0].innerText

        if (confirm(`Confirma exclusão do filme: "${titulo}"?`)) {
            // REMOVE A LINHA DA TABELA, CORRESPONDENTE AO SÍMBOLO DE EXCLUIR CLICADO
            e.target.parentElement.parentElement.remove()

            // REMOVE TAMBÉM DO localStorage
            localStorage.removeItem('filmesTitulo')
            localStorage.removeItem('filmesGenero')

            for (let i = 1; i < tbFilmes.rows.length; i++) {
                // OBTÉM O CONTEÚDO DA TABELA (COLUNA 0: TITULO; COLUNA 1: GÊNERO)
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText
                const auxGenero = tbFilmes.rows[i].cells[1].innerText
                gravarFilme(auxTitulo, auxGenero)
            }
        }
    }
})