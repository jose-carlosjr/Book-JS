const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const ano = Number(frm.iano.value)

    if (ano == 0) {
        resp.innerText = 'Fim do programa!'
    } else if (ano < 1930 || ano > 2022 || ano == 1942 || ano == 1946) {
        resp.innerText = `Não houve copa do mundo no ano de: ${ano}`
    } else if (ano % 4 == 2) {
        resp.innerText = `${ano} é ano de copa do mundo!`
    } else if (ano % 4 != 2) {
        resp.innerText = `${ano} não é ano de copa do mundo.`
    }
})