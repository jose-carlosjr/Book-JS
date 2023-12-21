const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formula = frm.icalc.value // 5 * 3 * (8 - 1 / (2 * 2)) - 1 
    let abre = ''
    let fecha = ''

    for (const simbolo of formula) { // PERCORRE TODOS OS CARACTERES DE formula
        if (simbolo == '(') {
            abre++
        } else if (simbolo == ')') {
            fecha++
        }

        // SE EM ALGUM MOMENTO fecha FOR MAIOR Q abre SIGNIFICA Q ALGUM PARÊNTESE FOI FECHADO SEM SER ABERTO
        if (fecha > abre) {
            break
        }
    }

    if (abre == fecha) {
        alert('Fórmula Correta (Em relação aos parênteses)')
    } else {
        alert('Fórmula Incorreta')
    } 
})

/*
    if (formula.includes('(')) {
        alert('Inclui (')
    } else if (!formula.includes('(')) {
        alert('Não inclui (')
    }
*/