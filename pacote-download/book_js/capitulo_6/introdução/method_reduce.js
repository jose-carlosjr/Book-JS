// MÉTODO reduce()
// ÚTIL PARA RECEBER VALORES CUMULATIVOS (OU CONCATENADOS)

const numbers = [23, 5, 40, 37, 25, 11]

// acumulador = VARIÁVEL QUE IRÁ ACUMULAR OS VALORES
// num = VARIÁVEL QUE CONTÉM CADA ELEMENTO DO VETOR
const soma = numbers.reduce((acumulador, num) => acumulador + num, 0) // !IMPORTANTE! 0 É O VALOR INICIAL DA VARIÁVEL acumulador

console.log(`Soma dos números ${numbers.join(', ')}: ${soma}`)

// O QUE FOI FEITO ACIMA EQUIVALE AOS SEGUINTES COMANDOS | AGORA COM for of
console.log('_'.repeat(50))

let acumulador = 0

for (const num of numbers) {
    acumulador = acumulador + num
}

console.log(`Soma com for of: ${acumulador}`)

/*
    CASO O ÚLTIMO PARÂMETRO, NO CASO '0', NÃO SEJA FORNECIDO AO reduce(), acumulador INICIA COM O 1º ELEMENTO DO VETOR
    E A REPETIÇÃO INICIA A PARTIR DO SEGUNDO ELEMENTO.
    SEM O PARÂMETRO FINAL OS COMANDOS DO reduce() EQUIVALEM A:
*/

// AGORA UTILIZANDO O for

let acumula = numbers[0] // acumula RECEBE O ELEMENTO DO 1º ÍNDICE DO VETOR numbers

for (let i = 1; i < numbers.length; i++) {
    acumula = acumula + numbers[i] // acumula = 23 e numbers[i] = 5
}

/*
    É IMPORTANTE DEIXAR ISSO CLARO POIS NO CASO DO VETOR ESTAR VAZIO E O PARÂMETRO, NO CASO '0', NÃO FOR ESTABELECIDO
    RESULTARÁ NUM ERRO, PORQUE O ELEMENTO DO ÍNDICE 0 NÃO EXISTE, VISTO Q O VETOR ESTÁ VAZIO, OU SEJA, NÃO PODE SER ACESSADO. 
    PORÉM A VARIÁVEL acumulador IRÁ TENTAR ACESSÁ-LO, AO FAZER ISSO OCORRERÁ UM ERRO. ENTÃO É SEMPRE IMPORTANTE JÁ INICIALIZAR O
    ACUMULADOR.
*/

// ARRAY COM OBJETOS

const friends = [{nome: 'jose', idade: 23},
                 {nome: 'Ana', idade: 30},
                 {nome: 'Jéssica', idade: 40}
                ]

const sum = friends.reduce((acumulador, amigo) => acumulador + amigo.idade, 0) // SOMA AS IDADES DOS AMIGOS
const todos = friends.reduce((concatena, friend) => concatena + friend.nome + ' ', '') // CONCATENA TODOS OS AMIGOS

console.log(todos)
console.log(sum)

/* 
    AS ASPAS SIMPLES PÓS VÍRGULA NO reduce() DENTRO VARIÁVEL todos É PRA INDICAR QUE O VALOR
    A SER INSERIDO NA PRIMEIRA POSIÇÃO, SE TRATA DE UMA STRING. SENÃO O JAVASCRIPT NAO COMPREENDE
    E RETORNA O TIPO DO OBJETO, QUE É Object
*/

// RECUPERAR MAIOR VALOR CONTIDO NUM ARRAY

const num = [20, 50, 75, 3, 29, 15]

// VARIÁVEL a acumula os valores
// VARIÁVEL b contém os elementos do vetor
// O MÉTODO reduce() FARÁ UM LOOP PERCORRENDO TODO O VETOR, NESSE CASO, EM BUSCA DO MAIOR VALOR

const maior = num.reduce((a, b) => Math.max(a, b), 0) // Math.max() CAPTURA O MAIOR VALOR PRESENTE NA EXPRESSÃO
console.log(`Maior valor: ${maior}`)