alert('Programa x2 de par, x3 de ímpar')
alert('Digite 0 para sair')

/*
    AS VARIÁVEIS n E sair FORAM DECLARADAS COM const, PORÉM
    COMO ELAS ESTÃO DENTRO DE UM BLOCO DE COMANDOS (NO CASO, do... while)
    NÃO HÁ PROBLEMAS, VISTO Q ELAS DEIXARÃO DE EXISTIR AO FINAL DO LOOP
*/

do {
    const n = Number(prompt('Digite um número'))
    if (n == 0 || isNaN(n)) {
        const sair = confirm('Confirma saída?')
        if (sair) {
            break
        }else if (!sair) {
            continue
        }
    }
    
    else if (n % 2 == 0) {
        alert(`O dobro de ${n} é ${n*2}`)
    } else {
        alert(`O triplo de ${n} é ${n*3}`)
    }

} while (true)

alert('bb!')
