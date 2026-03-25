listProdutos = [];

const nomeProduto = document.getElementById("p-nome");
const precoProduto = document.getElementById("p-preco");
const quantidadeProduto = document.getElementById("p-quantidade");
const Adicionar = document.getElementById("cadastrar-p");
const produtoMaisCaroNome = document.getElementById("p-caro-nome");
const valorTotal = document.getElementById("valor-estoque");
const produtoMaiorQuantidadeNome = document.getElementById("p-qtde-nome");

function valorTotalEstoque(){
    let total = 0;
    listProdutos.forEach((produto) => {
        total += produto.preco * produto.quantidade;
    });
    return total;
}

function produtoMaisCaro(){
    let maisCaro = listProdutos[0];
    listProdutos.forEach((produto) => {
        if(produto.preco > maisCaro.preco){
            maisCaro = produto;
        }
    });
    return maisCaro;
}

function produtoMaiorQuantidade(){
    let maiorQuantidade = listProdutos[0];
    listProdutos.forEach((produto) => {
        if(produto.quantidade > maiorQuantidade.quantidade){
            maiorQuantidade = produto;
        }
    });
    return maiorQuantidade;
}

Adicionar.addEventListener("click", () => {
    const produto = {
        nome: nomeProduto.value,
        preco: precoProduto.value,
        quantidade: quantidadeProduto.value,
    };

    listProdutos.push(produto);
    console.log(listProdutos);
    nomeProduto.value = "";
    precoProduto.value = "";
    quantidadeProduto.value = "";
    produtoMaisCaroNome.innerHTML = produtoMaisCaro().nome;
    valorTotal.innerHTML = valorTotalEstoque();
    produtoMaiorQuantidadeNome.innerHTML = produtoMaiorQuantidade().nome;   
})