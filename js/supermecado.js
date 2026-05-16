const frm = document.querySelector("form");
const resp1 = document.querySelector("#outPromocao");
const resp2 = document.querySelector("#outPrecoTerceiro");

//Criar ouvinte de envento, acionado quando o submit for clicado
frm.addEventListener("submit", (e) => { 
    //obter as entradas
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    //calcular valores

    const terceiro = preco/2
    const total = (preco*2)+ terceiro;

    //exibir respostas
    resp1.innerText = ` ${produto} - Promoção: leve 3 por: R$ ${total.toFixed(2)})`;
    resp2.innerText = ` O 3º produto custa apenas: R$ ${terceiro.toFixed(2)}`;
    
    e.preventDefault();


})
