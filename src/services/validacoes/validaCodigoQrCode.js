exports.validaCodigo = (palestra, codigo) => {
    // Vai pegar da entidade palestra que carrega esse código
    if (codigo !== 'hashQualquer' && palestra !== 1) {
        return false;
    }

    return true;
}