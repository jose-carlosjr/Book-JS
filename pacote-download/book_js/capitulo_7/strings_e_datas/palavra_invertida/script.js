const word = prompt('Digite uma palavra: ') // h o r á r i o
const tamanho = word.length

const resp = document.querySelector('pre')

// CAPTURA A ULTIMA LETRA DA PALAVRA E TRANSFORMA EM MAIÚSCULA
let inverso = word.charAt(tamanho - 1).toUpperCase()

for (let i = tamanho - 2; i >= 0; i--) {
    inverso += `${word.charAt(i)}`
}

resp.innerText = `O inverso da palavra ${word} é: ${inverso}`