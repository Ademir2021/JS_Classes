// var id = 1;
// var pedidos=[]
// item = item.value
// quant = quant.value
// valor = valor.value
// var venda = new Venda(id, item, quant, valor);
// var pedido = JSON.stringify(venda.getVenda());
// console.log(pedido)
// pedidos.push(pedido)
// console.log(pedidos)
// document.getElementById('render').innerHTML = pedidos

// function enviar(){
// const button = document.querySelector("#add")
// button.addEventListener("click", function(e){
//        // e.preventDefault()
// let item = document.querySelector('#item').value;
// let quant = document.querySelector('#quant').value;
// let valor = document.querySelector('#valor').value;
//     });
// };

/**
 * Classe Pessoa
 */
// var ID = 1
// var nome = "Ademir Souza de Almeida";
// var endereco = "Avenida Castro Alves";
// var email = "centroserra@gmail.com";
// var telefone = "44 98852-1033"

// const pessoa = new Pessoa(ID, nome, endereco, email, telefone)

// console.log(pessoa.fPessoa())
// console.log(pessoa.getNome())
// //console.log(pessoa.nome)

/**
 * Classe Conta
 */
var deposito = 0;
var saque = 0
var banco = '0001';
var ag = "222-4";
var conta = '333-9';
var correntista = "Ademir Souza de Almeida";
var senha = '123abc';
var sInicial = 22.20
deposito = 20
deposito = 10
deposito = 34
saque = 4
saque = 2

const conta1 = new Conta(banco,
                    ag,
                    conta,
                    correntista,
                    senha,
                    sInicial,
                    deposito,
                    saque
                    );
console.log(conta1.getsAtual())

