const frm = document.querySelector('.form')
const addClube = document.getElementById('addClube')
const listaClube = document.querySelector('.lista-clube')
const tabela = document.querySelector('.tabela')
const clubes = [] // INCREMENTADOR DE CLUBES

frm.addEventListener('submit', (event) => {
    event.preventDefault()

    if (clubes.length % 2 === 0) {
        const table = document.createElement('table')

        // RECEBE O length DO ARRAY DE MODO ANTECIPADO PARA Q O MESMO NÃO SEJA MODIFICADO AO LONGO DO LOOP
        const ClubesQtdItem = clubes.length

        // LOOP PARA CRIAR AS LINHAS
        for (let i = 0; i < ClubesQtdItem / 2; i++) {
            const tr = document.createElement('tr')

            // LOOP PARA CRIAR AS CÉLULAS DA LINHA
            for (let j = 0; j < 2; j++) {
                const td = document.createElement('td')
                let club = clubes.shift()
                td.innerText = club
                tr.appendChild(td)
            }

            table.appendChild(tr)
        }

        // Limpa qualquer conteúdo anterior dentro do container
        tabela.innerHTML = ''

        tabela.innerHTML += '<h2>Tabela de Jogos</h2>'
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

frm.addEventListener('reset', () => {
    tabela.innerHTML = ''
    listaClube.innerHTML = ''
})

/*
let n = ['1', '2', '3', '4', '5', '6']
console.log(n)
let x = n.shift()
console.log(x)
console.log(n)
let y = n.shift()
console.log(y)
console.log(n)
*/

// tabelaContainer.innerHTML = "";

