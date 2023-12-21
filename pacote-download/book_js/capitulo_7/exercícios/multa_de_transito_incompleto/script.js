const frm = document.querySelector('form')
const resp = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    let prazo = new Date()
    prazo = frm.idata.value            // 04/06/2023 | PAGAR ATÉ 90 DIAS COM 20% OFF
    const valor = Number(frm.imulta.value)  // 100.00

    for (let i = 1; i < 30; i++) {
        prazo.setDate(prazo.getDate())
        let dia = prazo.getDate()

        resp.innerText += dia
    }
})