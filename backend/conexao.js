const mysql = require("mysql2");

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Slipknot13579hot.",
    database: "helpdesk"
});

conexao.connect(function(erro) {
    if (erro) { 
        console.log("Erro ao conectar no banco", erro);
        return;
    }
    console.log("Conectado ao MySQL!");
});

module.exports = conexao;