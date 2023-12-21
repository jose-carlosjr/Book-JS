const conta = prompt('Valor total a ser pago: ')
const garcom = Number(conta) * 0.10
const total = Number(conta) + garcom

// CALCULA A TAXA DE 10% DO GARÇOM
// TROCA O PONTO POR VÍRGULA E PERMITE APENAS DUAS CASAS DECIMAIS APÓS A VÍRGULA
window.alert(`Valor: R$${conta} \nTaxa do garçom: R$${garcom.toFixed(2).replace('.',',')} \nTotal a pagar R$${total.toFixed(2).replace('.',',')}`
)

// OU

const almoco = 80
const waiter = almoco * 0.10
const tot4l = almoco + (almoco * 0.10) // OU: almoco * 1.10

console.log(`Conta: R$${almoco} \n10%: R$${waiter} \nValor total: R$${tot4l}`)