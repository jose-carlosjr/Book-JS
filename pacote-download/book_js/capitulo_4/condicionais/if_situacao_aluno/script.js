const frm = document.querySelector('form')
let resp1 = document.querySelector('h3')
let resp2 = document.querySelector('h4')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.idnome.value
    const nota1 = Number(frm.idnota1.value)
    const nota2 = Number(frm.idnota2.value)
    const media = (nota1 + nota2) / 2

    resp1.innerText = `Média das notas: ${media}`

    if (media >= 7) {
        resp2.innerText = `Parabéns ${nome}, Você foi aprovado!`
        resp2.style.color = '#33ed29'
    } else if (media >= 4 && media < 7) {
        resp2.innerText = `Atenção! ${nome}, você está de recuperação`
        resp2.style.color = '#e2711a'
    }
    else {
        resp2.innerText = `${nome}, você foi reprovado!`
        resp2.style.color = '#ed0909'
    }
})

///////////////////////////////////////////////////////

const resp = document.getElementById('resp')

resp.addEventListener('submit', (x) => {    
    x.preventDefault()

    nome.innerText = ''
    frm.idnota1.innerText = ''
    frm.idnota2.innerText = ''
    resp1.inneHTML = ''
    resp2.innerText = ''
})