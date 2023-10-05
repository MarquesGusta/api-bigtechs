// configuração inicial
const express = require('express');//
const app = express();//
const mongoose = require('mongoose');//
const conectar_bd = require('./service/mongo_connect')//
const dotenv = require('dotenv')//
dotenv.config()//

const methods = require('./models/methods')//

// Função para conectar ao banco de dados
conectar_bd()//

// rotas

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

app.get("/search/:name" , (req,res) =>{

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