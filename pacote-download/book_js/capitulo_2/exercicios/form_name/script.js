let frm = document.querySelector('form')
let resp = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // OBTÉM O NOME DIGITADO NO FORM
    resp.innerText = `Olá ${nome}` // EXIBE A RESPOSTA DO PROGRAMA
    e.preventDefault() // EVITA ENVIO DO FORM (IMPORTANTE!)
})

/*
    Babeljs.io
        EXISTEM NAVEGADORES COM VERSÕES ANTIGAS QUE NÃO SUPORTAM ELEMENTOS COMO
        queryselector POR EXEMPLO. PARA ISSO USAMOS "TRANSPILADORES" DE CÓDIGO.

        CASO VC PRECISE QUE SEU PROGRAMA FUNCIONE EM VERSÕES ANTIGAS DOS BROWSERS, VOCE
        RECORRE AO TRANSPILER E ELE CONVERTERÁ O SEU CÓDIGO MODERNO PARA INSTRUÇÕES EQUIVALENTES
        COMPATÍVEIS COM ESSES BROWSERS.

        babeljs É UM TRANSPILER
*/

// A PROPRIEDADE innerHTML PODE APRESENTAR ALGM RISCO À SEGURANÇA DENOMINADO XSS (Cross-Site-Scripting) - PESQUISAR

/*
    PROPRIEDADES SEMELHANTES:
        innerText;
        textContent;
        outerText
*/

/*
    OBJETO: REPRESENTA UMA INSTÂNCIA DE UMA CLASSE
    MÉTODO: REPRESENTA UMA INSTRUÇÃO OU CONJUNTO DE INSTRUÇÕES QUE EXECUTAM UMA TAREFA
    PROPRIEDADE: REPRESENTA UMA CARACTERÍSTICA (ATRIBUTO) DE UM OBJETO
*/