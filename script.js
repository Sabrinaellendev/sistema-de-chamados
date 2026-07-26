const chamados = [];
const formulario = document.querySelector("#formChamado");
const listaChamados = document.querySelector("#listaChamados");

formulario.addEventListener("submit", function (event) {


    event.preventDefault();

    const solicitante = document.querySelector("#solicitante").value;
    const setor = document.querySelector("#setor").value;
    const categoria = document.querySelector("#categoria").value;
    const prioridade = document.querySelector("#prioridade").value;
    const assunto = document.querySelector("#assunto").value;
    const descricao = document.querySelector("#descricao").value;

    const chamado = {
        solicitante: solicitante,
        setor: setor,
        categoria: categoria,
        prioridade: prioridade,
        assunto: assunto,
        descricao: descricao
    };

    chamados.push(chamado);

    exibirChamados();

    alert("Chamado enviado com sucesso!");

});

function exibirChamados() {

    listaChamados.innerHTML = "";

    for (const chamado of chamados) {

        listaChamados.innerHTML += `
     <div class="card">

     <h3>${chamado.assunto}</h3>
     <p><strong>Solicitante:</strong> ${chamado.solicitante}</p>
     <p><strong>Setor:</strong> ${chamado.setor}</p>
     <p><strong>Prioridade:</strong> ${chamado.prioridade}</p>
     <p><strong>Status:</strong> Aberto</p>
     
      </div>

     `;

    }

};