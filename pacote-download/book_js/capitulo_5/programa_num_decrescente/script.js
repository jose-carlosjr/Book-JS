const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = Number(frm.inumero.value) // 15

    for (let i = numero; i > 0; i--) {
        resp.innerText += ` ${i}`
    }
})

// NO JS A VARIÁVEL i (LINHA 9), DECLARADA COM LET, É UMA VARIÁVEL DE BLOCO. OU SEJA, ELA NÃO MAIS EXISTE APÓS O LAÇO.