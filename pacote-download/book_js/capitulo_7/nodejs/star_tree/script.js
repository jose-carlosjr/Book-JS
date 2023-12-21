const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    resp.innerText = ''

    const linha = Number(frm.inum.value) // 8 linhas

    for (let i = 1; i <= linha; i++) {
        resp.innerText += '*'.repeat(i * 2) + '\n'
    }

    for (let c = linha; c > linha / 2; c--) {
        if (linha <= 2) {
            resp.innerText += '*'.repeat(1)
            break
        }

        resp.innerText += '*'.repeat(2) + '\n'
    }
})

/*
        **
       ****
      ******
     ********
*/