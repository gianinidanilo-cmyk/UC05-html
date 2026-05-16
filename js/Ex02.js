const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const numero = frm.inNumero.value*2;
    resp.innerText = `O dobro é ${numero}`;
    e.preventDefault();
})
