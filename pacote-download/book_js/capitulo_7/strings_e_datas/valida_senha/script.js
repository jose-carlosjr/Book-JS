const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const pw = frm.isenha.value
    const erros = []

    if (pw.length < 8 || pw.length > 15) {
        erros.push('Possuir entre 8 e 15 caracteres')
    }

    if (pw.match(/[0-9]/g) == null) {
        erros.push('Possuir números (No mínimo 1)')
    }

    if (pw.match(/[a-z]/g) == null) {
        erros.push('Possuir letra minúscula (No mínimo 1)')
    }

    if (!pw.match(/[A-Z]/g) || pw.match(/[A-Z]/g).length == 1) {
        erros.push('Possuir no mínimo duas letras maiúsculas')
    }

    if (!pw.match(/[\W/|_]/g)) {
        erros.push('Possuir no mínimo um símbolo')
    }

    if (erros.length == 0) {
        resp.innerText = 'Senha Válida!'
    } else {
        resp.innerText = `Erro... A senha deve:\n${erros.join('\n')}`
    }
})
