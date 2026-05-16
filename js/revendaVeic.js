// criar referencias de form e dos elementos de repostas (h3)
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// criar um ouvinte de envento para o submit
frm.addEventListener("submit", (e) =>{
    // obter os valores dos campos de entrada
    const veiculo = frm.inVeiculo.value;
    const preco =  Number(frm.inPreco.value);

    const entrada = preco *0.50; // calcuco valor da entrada
    const parcela = (preco*0.50)/12; // calculo valor das parcelas


    // exibir respostas
    resp1.innerText = `Promoção ${veiculo}`;
    resp2.innerText = `Entrada de R$ ${entrada}`;
    resp3.innerText = `+12x R$ ${parcela.toFixed(2)}`;

    e.preventDefault(); //evita o envio do form



})