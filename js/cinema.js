//criar referencias ao form e ao elementos h3 e h4
const frm = document.querySelector("form"); 
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");


// criar um ouvinte de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit",(e) =>{
    const titulo = frm.inTitulo.value; // obtem o conteudo dos campos
    const duracao = Number(frm.inDuracao.value);

    // converter duracao em hora e minutos
    const horas =  Math.floor(duracao / 60); //arredonda para baixo
    const minutos = duracao % 60; // resto da divisão

    // exibir respostas
    resp1.innerText = titulo;
    resp2.innerText = `${horas} horas(s) e ${minutos} minutos(s)`;
    e.preventDefault(); //evita envio do form
})