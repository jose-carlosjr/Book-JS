const frm = document.querySelector('form')
const resp = document.querySelector('h3')

const taxaMulta = 2 / 100    // MULTA POR ATRASO
const taxaJuros = 0.33 / 100 // JUROS POR DIA DE ATRASO

// new Date() CREATES A DATE OBJECT SET TO THE CURRENT DATE AND TIME
// DETALHE IMPORTANTE: setMonth() retorna o mês de janeiro como 0

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.ivalor.value)
    const hoje = new Date()   // CRIA VARIÁVEIS (INSTANCIA OBJETOS)
    const vencto = new Date() // DO TIPO Date()

    const partes = dataVenc.split('-')     // DATA VEM NO FORMATO: aaaa-mm-dd | [aaaa, mm, dd]
    vencto.setDate(Number(partes[2]))      // CAPTURA O DIA
    vencto.setMonth(Number(partes[1]) - 1) // CAPTURA O MÊS
    vencto.setFullYear(Number(partes[0]))  // CAPTURA O ANO

    const atraso = hoje - vencto // CALCULA A DIFERENÇA DE DIAS ENTRE DATAS (EM MS)
    let multa = 0
    let juros = 0

    if (atraso > 0) { // SE ESTIVER EM ATRASO
        // CONVERTE MS DO ATRASO EM DIAS (1 DIA = 24h X 60min x 60seg x 1000ms: 86.400.000)
        const dias = atraso / 86400000
        multa = valor * taxaMulta          // CALCULA MULTA (VALOR * 0.02)
        juros = valor * taxaJuros * dias   // CALCULA JUROS (VALOR * 0.33 * DIAS DE ATRASO)
        const total = valor + multa + juros
        
        frm.imulta.value = multa.toFixed(2)
        frm.ijuros.value = juros.toFixed(2)
        frm.itotal.value = total.toFixed(2)
    }

})
// EXEMPLO: VALOR R$ 1000.00 | 10 DIAS DE ATRASO

/*
    console.log(1000 * 0.02)       // MULTA
    console.log(1000 * 0.33 * 10) // JUROS
*/