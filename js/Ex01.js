//Criar referencia ao form e ao elemento h3(onde vai exibir a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// crir um ouvinte de evento, acioando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value;  // Obtem o conteudo do campo texto
    resp.innerText = `Olá ${nome}`; // exibe a resposta

    //impede o envio do form
    e.preventDefault();
})
