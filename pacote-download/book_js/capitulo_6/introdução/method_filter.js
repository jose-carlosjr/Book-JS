// MÉTODO filter()
// SUBMETE CADA ELEMENTO DO VETOR A UMA CONDIÇÃO, Q SE VERDADEIRA, ADICIONA UM ELEMENTO AO NOVO ARRAY

const numbers = [20, 45, 31, 5, 1, 10, 56]

const pares = numbers.filter(num => num % 2 == 0) // FILTRA SOMENTE OS NÚMEROS QUE SÃO PARES

console.log(pares.join(' - '))

// VETOR DE OBJETOS

const amigos = [{nome: 'joana', idade: 21},
                {nome: 'maria', idade: 27},
                {nome: 'Brenda', idade: 20},
                {nome: 'Bruna', idade: 19}
            ]

// FILTRA SOMENTE AMIGOS QUE TENHAM A LETRA 'B' NO NOME E SEJAM MAIORES DE 21
const amigues = amigos.filter(aux => aux.nome.includes('B') && aux.idade >= 19)

// CASO NENHUM ELEMENTO TENHA ATENDIDO AOS CRITÉRIOS ESTABELECIDOS PELO FILTRO O ARRAY FICA VAZIO
// LEMBRE-SE. O MÉTODO filter() CRIA UM NOVO ARRAY
for (const amigo of amigues) {
    console.log(`${amigo.nome} | ${amigo.idade} anos`)
}

/*
    COMO UM NOVO ARRAY É GERADO COM filter(), FICA MAIS FÁCIL DE INFORMAR SE O FILTRO OBTEVE REGISTRO OU NÃO
    BASTA CHECAR SE O ARRAY ESTÁ VAZIO
*/

if (amigues.length == 0) {
    console.log('Não há amigues com tais critérios')
}