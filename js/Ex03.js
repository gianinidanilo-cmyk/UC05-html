const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {

    

    const nota1 = Number(frm.inNumero_01.value);
    const nota2 = Number(frm.inNumero_02.value);
    const nota3 = Number(frm.inNumero_03.value);

    const media = (nota1.value) + (nota2.value) + (nota3.value) / 3;

    resp.innerText = `A média é ${media}`;

    e.preventDefault();
});
