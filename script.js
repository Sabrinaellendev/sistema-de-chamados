const formulario = document.querySelector("#formChamado");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Chamado enviado com sucesso!");

    const solicitante = document.querySelector("#solicitante").value;

    console.log(solicitante);
});