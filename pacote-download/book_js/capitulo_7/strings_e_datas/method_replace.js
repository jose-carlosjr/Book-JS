const senha = 'ABACAD'

const senha1 = senha.replace('A', 'X')  // XBACAD
console.log(senha1)

// UTILIZANDO EXPRESSÃO REGULAR COM A OPÇÃO g (GLOBAL), TODAS AS LETRAS 'A' SÃO ALTERADAS POR 'X'
const senha2 = senha.replace(/A/g, 'X') // XBXCXD
console.log(senha2)

console.log('\n')
////////////////////////////////////////////

// RETIRAR ESPAÇOS

const app = 'App Controle Financeiro'

const app1 = app.replace(' ', '') // AppControle Financeiro
console.log(app1)

const app2 = app.replace(/ /g, '') // AppControleFinanceiro
console.log(app2)

const app3 = app.replace(/ /g, '').toLowerCase() // appcontrolefinanceiro
console.log(app3)