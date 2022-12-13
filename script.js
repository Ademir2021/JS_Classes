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
var ID = 1
var nome = "Ademir Souza de Almeida";
var endereco = "Avenida Castro Alves";
var email = "centroserra@gmail.com";
var telefone = "44 98852-1033"

var pessoa = new Pessoa(ID, nome, endereco, email, telefone)

console.log(pessoa.fPessoa())
console.log(pessoa.getNome())
//console.log(pessoa.nome)


