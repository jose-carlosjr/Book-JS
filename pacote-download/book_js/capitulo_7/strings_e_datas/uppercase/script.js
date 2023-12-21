while (true) {
    const continua = prompt('Continuar (S/N)?')
    if (continua.toUpperCase() == 'N') { // ESSA CONDIÇÃO É VALIDADA MESMO QUANDO O USUARIO DIGITA "n" MINÚSCULO
        break
    }
}