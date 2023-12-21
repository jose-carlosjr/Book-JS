/*
                *EVENTOS JAVASCRIPT*
    EXEMPLOS:

    EVENTOS DE INTERFACE DO USUARIO (load, unload, resize)
    EVENTOS DE MOUSE (click, dblclick, mouseover)
    EVENTOS DE TECLADO (keypress, keydown, keyup)
    EVENTOS DE FORMULÁRIO (change, focus, blur)
*/

const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const itens = []

// RADIO BUTTONS
frm.rbPizza.addEventListener('click', () => {
    frm.inBebida.className = 'oculta' // OCULTA SELECT DAS PIZZAS
    frm.inPizza.className = 'exibe'   // OCULTA SELECT DAS BEBIDAS
})

frm.rbBebida.addEventListener('click', () => {
    frm.inBebida.className = 'exibe'
    frm.inPizza.className = 'oculta'
})

// INPUT idetalhe RECEBE INFORMAÇÕES DAS PIZZAS QUANDO ESTÁ COM FOCO, CASO O RADIO BUTTON PIZZA ESTEJA MARCADO
frm.idetalhe.addEventListener('focus', () => {
    if (frm.rbPizza.checked) {
        const pizza = frm.inPizza.value
        // if > else if > else PORÉM COM OPERADOR TERNÁRIO | POV: HORRÍVEL, NÃO FAÇA MAIS ISSO
        const num = pizza == 'media' ? 2 : pizza == 'grande' ? 3 : 4
        frm.idetalhe.placeholder = `Até ${num} sabores`
    }
})

// RETIRA A INFO DO PLACEHOLDER DO INPUT idetalhe QUANDO PERDE O FOCO
frm.idetalhe.addEventListener('blur', () => {
    frm.idetalhe.placeholder = ''
})

// FUNÇÃO ANÔNIMA
frm.addEventListener('submit', (e) => {
    e.preventDefault()

    let produto
    if (frm.rbPizza.checked) {
        const num = frm.inPizza.selectedIndex // OBTEM O NÚMERO DO ITEM SELECIONADO
        produto = frm.inPizza.options[num].text
    } else {
        const num = frm.inBebida.selectedIndex
        produto = frm.inBebida.options[num].text
    }

    const detalhes = frm.idetalhe.value // RECEBE O CONTEÚDO DO INPUT idetalhe
    itens.push(`${produto} ( ${detalhes} )`) // ADICIONA O ITEM DO CAMPO idetalhe AO ARRAY itens
    resp.innerText = `${itens.join('\n')}`

    frm.reset()
    frm.rbPizza.dispatchEvent(new Event('Click'))
})