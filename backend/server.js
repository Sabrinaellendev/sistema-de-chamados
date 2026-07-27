

const express = require("express");

const cors = require("cors");

const app = express();

const conexao = require("./conexao");


app.use(cors());

app.use(express.json());

app.get("/", function (req, res) {
    res.send("API do helpdesk funcionando!");
});

app.post("/chamados", function (req, res) {

    const chamado = req.body;

    const sql = `
        INSERT INTO chamados
        (solicitante, setor, categoria, prioridade, assunto, descricao, status)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;


    const valores = [
        chamado.solicitante,
        chamado.setor,
        chamado.categoria,
        chamado.prioridade,
        chamado.assunto,
        chamado.descricao,
        chamado.status
    ];


    conexao.query(sql, valores, function (erro, resultado) {

        if (erro) {

            console.log("ERRO DO MYSQL:");
            console.log(erro);

            res.status(500).json({
                erro: erro.message
            });

            return;
        };



        res.json({
            mensagem: "Chamado salvo com sucesso!",
            id: resultado.insertId
        });

    });

});


app.listen(3000, function () {
    console.log("Servidor rodando na porta 3000");
});

