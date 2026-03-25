// encapsulamento

class conta{
    #senha
    #agencia
    #n_conta
    #titular
    #saldo

    constructor(senha, agencia, n_conta, titular, saldo) {
        this.#senha =senha
        this.#agencia = agencia
        this.#n_conta = n_conta
        this.#titular = titular
        this.#saldo = saldo
    }


    get saldo() {
        return this.#saldo;
}
    set saldo(value) {
        this.#saldo += value;
    }
depositar(n_conta, agencia, valor) {
    if(n_conta == this.#n_conta && agencia == this.#agencia){
        this.#saldo += valor
    }
    else
        return console.error( "Não foi possível executar a operação")
}

}

const c1 = new conta("1234", '101', 40028922, 'Diego', 2000)

c1.depositar(40028922, '101', 0.01)

console.log(c1.saldo)
