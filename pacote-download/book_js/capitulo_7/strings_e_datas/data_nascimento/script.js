const anoAtual = new Date().getFullYear()
const idade = prompt(`Quantos anos voce comemora em ${anoAtual}`)
const anoNasc = anoAtual - idade

alert(`Voce nasceu em ${anoNasc}`)

/*
    AS DATAS JAVASCRIPT SÃO ARMAZENADAS INTERNAMENTE COMO UM VALOR NUMÉRICO

    SE QUISERMOS OBTER A DIFERENÇA DE DIAS ENTRE DUAS DATAS, PODEMOS SUBTRAIR AS DATAS E DIVIDIR O 
    VALOR POR 86.400.000M (NÚMERO DE MILISSEGUNDOS DE UM DIA) OU SEJA:
    24 HORAS * 60 MINUTOS * 60 SEGUNDOS * 1000 MILISSEGUNDOS
    
*/