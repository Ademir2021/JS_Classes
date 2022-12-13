class Pessoa{
    constructor(ID, nome, endereco, email, telefone){
        this.ID = ID
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
        this.telefone = telefone;
    };
    getNome(){
        this.nome = 'Maria Luiza de Almeida'
        return  `${"Definido na Classe: "+this.nome}`
    };
    fPessoa(){
      let ficha = [this.ID = ID,
            this.nome = nome,
            this.endereco = endereco,
            this.email = email,
            this.telefone = telefone]
        return ficha
    };
};
