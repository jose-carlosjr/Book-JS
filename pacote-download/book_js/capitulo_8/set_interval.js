const mostraHora = () => {
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const sec = data.getSeconds()
    console.log(`Atenção para o horário: ${hora}:${min}:${sec}`)
}


setInterval(mostraHora, 5000) // MOSTRA A HORA A CADA 5 SEGUNDOS