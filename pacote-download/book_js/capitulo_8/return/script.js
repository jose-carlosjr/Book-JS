const resp = document.querySelector('pre')

const situacao = (nota, media) => {
    const resultado = nota >= media ? 'Aprovado': 'Reprovado'
    return resultado
}

const prova1 = Number(prompt('Nota: '))
alert(situacao(prova1, 7))

const aluno1 = situacao(5, 4)
resp.innerText = `Situação: ${aluno1}`

// A FUNÇÃO É CHAMADA E SEU RETORNO É UTILIZADO PARA COMPOR A STRING A SER EXIBIDA PELO ALERT()

alert(`A situação do aluno é: ${situacao(5, 7)}`)

// OU
// OS PARÊNTESES DEPOIS DA SETA SÃO OPCIONAIS
// CASO A FUNÇÃO CONTENHA UM ÚNICO PARÂMETRO, OS PARÊNTESES ENVOLVENDO ESSE PARÂMETRO TBM SÃO OPCIONAIS
const situation = (nota, media) => (nota >= media ? 'Aprovado': 'Reprovado')

