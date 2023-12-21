const hoje = new Date()

const dia = hoje.getDate()
console.log(dia)
const mes = hoje.getMonth() + 1
const ano = hoje.getFullYear()

console.log(hoje)

const hoje2 = hoje.toString()

// getMonth() GERA O NÚMERO DO MÊS, PORÉM INICIANDO POR 0

/*
    0 - Janeiro
    1 - Fevereiro
    2 - Março
    E POR AÍ VAI...
*/

console.log(`Data: ${dia}/${mes}/${ano} \n`)

// CONSERTANDO...

console.log(`Data: ${dia}/${mes + 1}/${ano}`)

console.log(Date())
console.log('_'.repeat(40))

//////////////////////////////////////////////////////////////

// MÉTODO padStart()

// padStart() É APLICADO SOBRE VARIÁVEIS DO TIPO String. ENTÃO CONVERTEMOS O QUE É Number PARA String

console.log(typeof dia)
const dia2 = dia.toString()
const dia3 = dia2.padStart(2, 0)
console.log(dia3)

const mes2 = mes.toString()
const mes3 = mes2.padStart(2, 0)
console.log(mes3)

//////////////////////////////////////////////////////////

// DETALHE: getDay() RETORNA O DIA DA SEMANA

const today = new Date()
const d1a = today.getDate()
const month = today.getMonth() + 1
const year = today.getFullYear()
const d1a2 = d1a.toString().padStart(2, '0')
const month2 = month.toString().padStart(2, '0')

console.log(`${d1a2}/${month2}/${year}`)