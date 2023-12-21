const frm = document.querySelector('form')
const respErros = document.getElementById('outErros')
const respChances = document.querySelector('span#outChances')
const respDica = document.querySelector('h3#outDica')

const erros = [] // NÚMEROS QUE JÁ FORAM UTILIZADOS PELO USUÁRIO
const sorteado = Math.floor(Math.random() * 100) + 1 // NÚMERO QUE FOI SORTEADO, ENTRE 1 E 100
const chances = 6 // NÚMERO DE CHANCES DO USUÁRIO

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const numero = Number(frm.inum.value)

    if (numero == sorteado) {
        respDica.innerText = `Parabéns!! Número Sorteado: ${sorteado}`
        frm.btSubmit.disabled = true // TROCA STATUS DO BOTÃO
        frm.btNovo.className = 'exibe'
    } else {
        if (erros.includes(numero)) { // SE O NÚMERO EXISTE NO VETOR erros (JÁ APOSTOU)
            alert(`Você já apostou o número ${numero}`)
        } else {
            erros.push(numero) // ADICIONA O NÚMERO DIGITADO NO VETOR ERROS
            const numErros = erros.length // VARIÁVEL PARA REGISTRAR A QUANTIDADE DE TENTATIVAS
            const numChances = chances - numErros // CALCULA NÚMERO DE CHANCES RESTANTES

            // EXIBE Nº DE ERROS, CONTEÚDO DO VETOR E Nº DE CHANCES
            respErros.innerText = `${numErros} (${erros.join(', ')})`
            respChances.innerText = numChances

            if (numChances == 0) {
                alert('Suas chances acabaram...')
                frm.btSubmit.disabled = true
                frm.btNovo.className = 'exibe'
                respDica.innerText = `Game Over!! Número Sorteado: ${sorteado}`
            } else { // OU SEJA, SE AINDA HOUVER CHANCES

                // SE O NÚMERO DIGITADO FOR MAIOR Q O SORTEADO A DICA DIZ Q TEM Q SER MENOR. E VICE-VERSA
                const dica = numero < sorteado ? 'Maior' : 'Menor'
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        } 
    }

    frm.inum.value = ''
    frm.inum.focus()
})

frm.btNovo.addEventListener('click', () => { // BOTÃO JOGAR NOVAMENTE -> RECARREGA A PÁGINA
    frm.btNovo = location.reload()
})