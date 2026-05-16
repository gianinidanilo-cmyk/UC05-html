const frm = document.querySelector("form");
const resp1 = document.querySelector("#outMedicamento");
const resp2 = document.querySelector("#outValor");

frm.addEventListener("submit", (e) => {
    const medicamento = String(frm.inMedicamento.value);
    const valor = Number(frm.inValor.value);

    const valorTotal = (valor)*2;
    const promocao = Math.floor(valorTotal);

    resp1.innerText = `Promoçao de ${medicamento}`;

    resp2.innerText = `Leve 2 por : R$ ${promocao}`;

    e.preventDefault();



})
