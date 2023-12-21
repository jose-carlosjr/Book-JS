const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

frm.addEventListener('submit', (e) => {
    const titulo = frm.inTitulo.value
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) // ARREDONDA PARA BAIXO O RESULTADO, OBTENDO ASSIM AS HORAS
    const minutos = duracao % 60 // RECEBE O RESTO DA DIVISÃO, Q SEGUINDO A LÓGICA, SÃO OS MINUTOS

    resp1.innerText = titulo
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault()
})