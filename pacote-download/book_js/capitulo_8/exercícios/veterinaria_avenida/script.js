const frm = document.querySelector('form')
const resp1 = document.getElementById('resp1')
const resp2 = document.getElementById('resp2')

/*
frm.inao.addEventListener('click', () => {
    frm.iconvenio.className = 'oculta'
    frm.conv.className = 'oculta'
})

frm.isim.addEventListener('click', () => {
    
})
*/

function calcularDesconto(valor, taxaDesc) {
    valor = Number(frm.ivacina.value) // 200
    let convenio = frm.iconvenio.value

    if (convenio == 'semConvenio') {
        taxaDesc = valor * 0.10
        resto = valor - taxaDesc

        resp1.innerText = `Desconto R$: ${taxaDesc}`
        resp2.innerText = `A Pagar R$: ${resto}`
    } else if (convenio == 'amgAnimal') {
        taxaDesc = valor * 0.20
        resto = valor - taxaDesc
        
        resp1.innerText = `Desconto R$: ${taxaDesc}`
        resp2.innerText = `A Pagar R$: ${resto}`
    } else {
        taxaDesc = valor * 0.50
        resto = valor - taxaDesc
        
        resp1.innerText = `Desconto R$: ${taxaDesc}`
        resp2.innerText = `A Pagar R$: ${resto}`
    }
}

frm.btCalcular.addEventListener('click', calcularDesconto)