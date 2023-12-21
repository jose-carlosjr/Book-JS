// FUNÇÃO ANÔNIMA DENTRO DO MÉTODO setInterval()

setInterval(() => {
    const data = new Date()
    const hora = data.getHours()
    const min = data.getMinutes()
    const sec = data.getSeconds()
    console.log(`Atenção para o horário: ${hora}:${min}:${sec}`)
}, 1000);