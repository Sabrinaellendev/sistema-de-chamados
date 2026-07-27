const formulario = document.querySelector("#formChamado");

function mostrarToast(mensagem, tipo = 'sucesso') {
    const toast = document.getElementById('toast');
    toast.textContent = mensagem;
    
    if (tipo === 'erro') {
        toast.style.backgroundColor = '#fd0c0c';
    } else {
        toast.style.backgroundColor = '#10b981';
    }
    
    toast.classList.add('show');

    // A forma correta e limpa do temporizador:
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const chamado = {
        solicitante: document.querySelector("#solicitante").value,
        setor: document.querySelector("#setor").value,
        categoria: document.querySelector("#categoria").value,
        prioridade: document.querySelector("#prioridade").value,
        assunto: document.querySelector("#assunto").value,
        descricao: document.querySelector("#descricao").value,
        status: "Aberto"
    };


    fetch("http://localhost:3000/chamados", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(chamado)

    })

        .then(resposta => resposta.json())

        .then(dados => {

            console.log(dados);

            mostrarToast("Chamado registrado com sucesso!");
            
            formulario.reset();

        })

        .catch(erro => {

            console.log("Erro", erro);

            mostrarToast("Erro ao registrar chamado", "erro");

        });

});