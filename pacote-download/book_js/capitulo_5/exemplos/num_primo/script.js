const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const num = Number(frm.inum.value)
    let nDivisores = 0 // RECEBE O NÚMERO DE VEZES QUE O num RETORNOU RESTO 0

    for (let cont = 1; cont <= num; cont++) {
        if (num % cont == 0) {
            nDivisores++
            if (nDivisores > 2) {
                break
            }
        }
    }

    if (nDivisores == 2) {
        resp.innerText = `O número ${num} é primo`
    } else {
        resp.innerText = `O número ${num} não é primo`
    }
})