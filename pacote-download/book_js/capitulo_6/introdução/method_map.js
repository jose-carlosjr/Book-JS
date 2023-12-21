// MÉTODO map()
// "MAPEIA" CADA ELEMENTO DE UM VETOR, REALIZA UM PROCESSAMENTO COM OS MESMOS E RETORNA UM NOVO VETOR
// O OBJETIVO DO map() É ALTERAR OS ELEMENTOS DE UM VETOR E AO FINAL CRIAR UM NOVO, COM A MESMA QTD DE ITENS DO VETOR ORIGINAL

const num = [5, 10, 15, 20, 30]
const double = num.map(num => num * 2) // CADA NÚMERO É OBTIDO E MULTIPLICADO POR 2

console.log(num.join(', '))
console.log(double.join(', '))

// ARRAY DE OBJETOS

const amigos = [{nome: 'jose', idade: 20},
                {nome: 'maria', idade: 25},
                {nome: 'joaquim', idade: 30}
            ]

// ARROW FUNCTION Q CRIA UM NOVO ATRIBUTO: "nasc" > Q FAZ UMA SUBTRAÇÃO COM A IDADE PARA PEGAR O ANO DE NASCIMENTO
const amigos2 = amigos.map(aux => ({nome: aux.nome, idade: aux.idade, nasc: 2023 - aux.idade}))

for (const amigo of amigos2) {
    console.log(`${amigo.nome}, ${amigo.idade} anos, nasceu em: ${amigo.nasc}`)
}