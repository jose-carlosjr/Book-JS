const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const chinQtd = Number(frm.ichin.value) // 4 chinchilas
    const ano = Number(frm.iano.value)      // 6 anos
    let triple = Number(chinQtd)    // 12 chinchilas

    resp.innerText = `1º Ano: ${chinQtd} Chinchilas \n`

    for (let i = 2; i <= ano; i++) {
        triple = triple * 3
        resp.innerHTML += `${i}º Ano: ${triple} Chinchilas <br>`
    }
})