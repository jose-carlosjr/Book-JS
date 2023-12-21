// UMA EXPRESSÃO REGULAR CONTÉM UM CONJUNTO DE CARACTERES Q INDICAM UM PADRÃO A SER PESQUISADO
const palavra = '#SenhA_123!'

const vetor = palavra.match(/[A-Z]/g)
console.log(vetor) // 'S', 'A'

// /[A-Z]/ É O PADRÃO DE EXPRESSÃO REGULAR Q SE DESEJA ENCONTRAR NA PALAVRA
// A OPÇÃO g INDICA Q A PESQUISA DEVE RETORNAR TODAS AS OCORRÊNCIAS DOS CARACTERES DA STRING
// O RETORNO É UM VETOR CONTENDO TODOS OS ELEMENTOS ENCONTRADOS OU null, CASO O PADRÃO NÃO EXISTA NA STRING FORNECIDA

const vetor1 = palavra.match(/[a-z]/g) // 'e', 'n', 'h'
console.log(vetor1) 

const vetor2 = palavra.match(/[0-9]/g) // '1', '2', '3']
console.log(vetor2)  

const vetor4 = palavra.match(/[T-Z]/g) // null
console.log(vetor4)

/* 
    METACARACTERE \W RETORNA OS SÍMBOLOS DA STRING ANALISADA
    O '_' (UNDERLINE) NÃO É RECUPERADO PELO \W, ENTÃO SE USA '|_' (Q SIGNIFICA: OU '_')
*/
const vetor5 = palavra.match(/\W|_/g) // '#', '_', '!'
console.log(vetor5)