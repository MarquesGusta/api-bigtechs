// configuração inicial
const express = require('express');//
const app = express();//
const mongoose = require('mongoose');//
const cors = require('cors');
const conectar_bd = require('./service/mongo_connect')//
const dotenv = require('dotenv')//
dotenv.config()//

app.use(cors({origin: '*'}));
const methods = require('./models/methods')//

// chamada da função para conectar com o banco de dados com o servidor
conectar_bd()

// rotas

app.get('/', (req, res) => {
    
    res.status(200).json("Servidor on... '/all' devolve todas as marcas, '/search/:chavePrimaria' devolve apenas a marca com aquela chave primária")

})

app.get('/all', (req, res) => {//

    // Guarda os valores do modelo em uma variável
    let resultado =  methods.find()//
    .then(//
        (resultado) => {//
            if(resultado){//
                // Caso dê certo devolve as informações
                res.status(200).send(resultado)//
            }//
            else{//
                res.status(404).json("Resource not found")  // Erro na requisição//
            }//
        } //
    )//
    .catch((err) =>{//
        res.status(500).json("Erro : " + err) // Erro no servidor
    })//
})//

app.get("/search/:chavePrimaria" , (req,res) =>{

    let resultado =  methods.findOne({chavePrimaria: req.params.chavePrimaria})//
    .then(//
        (resultado) => {//
            if(resultado){//
                // Caso dê certo devolve as informações
                res.status(200).send(resultado)//
            }//
            else{//
                res.status(404).json("Resource not found")  // Erro na requisição//
            }//
        } //
    )//
    .catch((err) =>{//
        res.status(500).json("Erro : " + err) // Erro no servidor
    })//

})

// Porta da api

app.listen(process.env.SERVER_PORT)//
