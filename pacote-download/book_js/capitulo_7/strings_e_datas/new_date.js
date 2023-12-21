const hoje = new Date()
console.log(hoje + '\n')

const amanha = new Date()
console.log(amanha + '\n')

const dia = amanha.getDate()
console.log(dia + '\n')

amanha.setDate(dia + 1)


console.log(`Hoje: ${hoje}\nAmanhã: ${amanha}`)
