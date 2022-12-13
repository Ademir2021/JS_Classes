class Conta{
    constructor(banco,
                ag,
                conta,
                correntista,
                senha,
                sInicial,
                deposito,
                saque,
                sAtual){
                    this.banco = banco;
                    this.ag = ag;
                    this.conta = conta;
                    this.correntista = correntista;
                    this.senha = senha;
                    this.sInicial = sInicial;
                    this.deposito = deposito;
                    this.saque = saque;
                    this.sAtual = sAtual;
    };
    getsAtual(){
        this.sAtual = 0
        this.sAtual = this.sInicial + this.deposito - this.saque
        let ficha = [this.banco,
                    this.ag,
                    this.conta,
                    this.correntista,
                    this.senha,
                    this.sInicial,
                    this.deposito,
                    this.saque,
                    this.sAtual]
        return ficha
    };
};