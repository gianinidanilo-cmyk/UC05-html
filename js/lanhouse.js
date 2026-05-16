//criar referencias ao form e ao h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criar ouvinte de envento quando meu botao submit for clicado
frm.addEventListener("submit", (e) => {
    //obter conteudo de entrada
    const valor = Number (frm.inValor.value);
    const tempo = Number (frm.inUso.value);

    //calcular valor a pagar
    //exemplo. arredodondando para cima
    //const pagar = Math.ceil (tempo/15)*valor;

    const blocos = Math.ceil(tempo/15);
    const valorPagar = blocos*valor;

    resp.innerText=`Valor a pagar R$ ${valorPagar}`;

    e.preventDefault();
    
})
