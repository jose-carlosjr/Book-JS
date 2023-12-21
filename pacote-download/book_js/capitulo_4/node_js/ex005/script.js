const frm = document.querySelector('form')
const res = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    const velP = Number(frm.ivelP.value) // 100
    const velC = Number(frm.ivelC.value) 
    
    if (velC <= velP) {
        res.innerText = 'Sem Multa!'
    } else if (velC > velP && velC <= (velP * 1.2)) {
        res.innerText = 'Multa Leve!'
    } else {
        res.innerText = 'Multa Grave!'
    }

    e.preventDefault()
})

frm.addEventListener('reset', (e) => {
    res.innerText = ''
})