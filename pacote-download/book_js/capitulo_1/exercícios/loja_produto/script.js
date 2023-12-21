let produto = 'Pneu'
let preco = 90

// CALCULA O PRECO DO PRODUTO COM 10% DE DESCONTO E TBM PARCELADO EM 3X
console.log(`Produto: ${produto} | Preço: R$${preco}`)
console.log(`Valor à vista com 10% de desconto: R$${(preco * 0.90).toFixed(2)}`)
console.log(`Parcelado em 3x: R$${(preco / 3).toFixed(2)}`)