const frm = document.querySelector('form')
const resp1 = document.getElementById('resp1')
const resp2 = document.getElementById('resp2')

let num = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const n = Number(frm.inum.value)

    if (num.includes(n)) {
        alert('O número já consta no array')
        frm.reset()
        return
    } else {
        num.push(n)
        frm.inum.focus()
        frm.reset()
    }

    resp1.innerText += ` ${n}`

})

frm.btVerificar.addEventListener('click', () => {
    for (let i = 1; i <= num.length; i++) { // 4 5 6 3
        if (num[i] > num[i - 1]) {
            resp2.innerText = 'Os números estão em ordem crescente!'
        }

        if(num[i] < num[i - 1]) {
            resp2.innerText = 'Atenção! Números não estão em ordem crescente'
            break // IMPEDE QUE O LOOP CONTINUE, VISTO Q UM ÚNICO Nº MENOR QUE SEU ANTECESSOR JÁ TORNA A LISTA Ñ CRESCENTE
        }
    }
})