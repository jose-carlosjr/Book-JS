const frm = document.querySelector('.form')
const addClube = document.getElementById('addClube')
const listaClube = document.querySelector('.lista-clube')
const tabela = document.querySelector('.tabela')
const clubes = [] // INCREMENTADOR DE CLUBES

frm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(clubes)

    if (clubes.length % 2 === 0) {
        const table = document.createElement('table')

        // LOOP PARA CRIAR AS LINHAS
        for (let i = 0; i < clubes.length / 2; i++) {
            const tr = document.createElement('tr')

            // LOOP PARA CRIAR AS CÉLULAS DA LINHA
            for (let j = 0; j < 2; j++) {
                const td = document.createElement('td')
                let club = clubes.splice(0)
                td.innerText = club
                tr.appendChild(td)
            }

            table.appendChild(tr)
        }

        tabela.innerHTML = ''
        tabela.appendChild(table)
    }
})

addClube.addEventListener('click', () => {
    const clube = frm.inClube.value

    listaClube.innerHTML += `<h5 class='clubes'>${clube}</h5>`
    clubes.push(clube)
    frm.inClube.focus()
    frm.inClube.value = ''
})


// Limpa qualquer conteúdo anterior dentro do container
// tabelaContainer.innerHTML = "";

