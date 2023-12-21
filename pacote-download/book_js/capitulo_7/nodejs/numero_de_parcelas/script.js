const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    resp.innerText = ''

     const parcelas = Number(frm.inum.value) // 6
     const data = new Date()

     for (let i = 1; i <= parcelas; i++) {
        data.setMonth(data.getMonth() + 1)
        const dia = data.getDate()
        const mes = data.getMonth() + 1
        const ano = data.getFullYear()

        // AO INVÉS DE USAR padStart() USAREMOS UMA CONDIÇÃO

        const diaZero = dia < 10 ? '0' + dia : dia
        const mesZero = mes < 10 ? '0' + mes : mes

        resp.innerText += `${i}º Parcela: ${diaZero}/${mesZero}/${ano} \n`
     }
})

/*
    const parcelas = Number(frm.inum.value) // 6
    const hoje = new Date()
    const dia = hoje.getDate().toString().padStart(2, 0)
    const mes = hoje.getMonth() + 1
    const ano = hoje.getFullYear()

    for (let i = 1; i <= parcelas; i++) {
        resp.innerText += `${i}º Parcela: ${dia}/${(mes + i).toString().padStart(2, 0)}/${ano} \n`
    }
*/