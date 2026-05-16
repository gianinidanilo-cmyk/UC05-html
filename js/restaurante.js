//Criar referencia ao form e ao h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar ouvinte e evento ao clicar no botão submit
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value); // obtem o valor do kg

    
    const consumo = Number(frm.inConsumo.value);

    const valor = (quilo / 1000)*consumo;//calcula o valor a pagar

    resp.innerText = `Valor a pagar : R$ ${valor.toFixed(2)}`;

    e.preventDefault(); //evita o envio do form


})