const frm = document.querySelector('form')
const res = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    let n = Number(frm.inum.value)

    n % 2 == 0 ? res.innerText = `${n} é par` : res.innerText = `${n} é ímpar`

    e.preventDefault()
})

frm.addEventListener('reset', (e) => {
    res.innerText = ''
})

/* 
    if (n % 2 == 0) {
        res.innerText = `${n} é par`
    } else {
        res.innerText = `${n} é ímpar`
    }
*/