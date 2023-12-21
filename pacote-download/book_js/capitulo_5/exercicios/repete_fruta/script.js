const frm = document.querySelector('form')
const resp1 = document.getElementById('fruta')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    resp1.innerText = ''

    const nome = frm.ifruta.value           // Manga
    const fruta = Number(frm.iqtd.value)    // 5

    for (let i = fruta; i != 0; i--) {
        resp1.innerText += ` ${nome} *`
    }
})