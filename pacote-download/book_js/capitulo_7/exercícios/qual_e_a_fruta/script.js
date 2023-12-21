const frm = document.querySelector('form')
const resp = document.querySelector('span')

// APENAS UMA AMOSTRA DE UM PROGRAMA QUE FOI FEITO NO CAPÍTULO 11
frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const fruta = frm.ifruta.value.toUpperCase()
    let resposta = ''

    for (const letra of fruta) { // M A M Ã O
        if (letra == fruta.charAt(0)) { // ESSE LAÇO SÓ SERVE P/ CAPTURAR A PRIMEIRA LETRA DA PALAVRA
            resposta += fruta.charAt(0) // ADICIONA caso A LETRA DIGITADA SE ASSEMELHAR COM A Q ESTÁ SENDO PERCORRIDA PELO LOOP
        } else {
            resposta += ' _' // CASO A LETRA SEJA DIFERENTE ADICIONA APENAS UM UNDERLINE 
        }
    }

    resp.innerText = resposta
    frm.ifruta.value = '*'.repeat(fruta.length)
})