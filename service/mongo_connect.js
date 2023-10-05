const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

// Função que conecta ao bando de dados do MongoDB
async function conectar_bd (){
mongoose
    // Link do banco de dados
    .connect(
       `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.aschwu5.mongodb.net/?retryWrites=true&w=majority`,
    )
    .then(() => {
        console.log("Conectado com sucesso")  // Confirma a conexão

    })
    .catch((err) => console.log(err))}  // Informa o erro

module.exports = conectar_bd