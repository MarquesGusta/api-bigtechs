// configuração inicial
const express = require('express');//
const app = express();//
const mongoose = require('mongoose');//
const cors = require('cors');
const conectar_bd = require('./service/mongo_connect')//
const dotenv = require('dotenv')//
dotenv.config()//

app.use(cors());

const methods = require('./models/methods')//


// rotas

app.get('/', (req, res) => {
    
    try{

        // Função para conectar ao banco de dados
        conectar_bd()

    }
    catch(error){
        res.status(400).json("Server error")
    }
    finally{
        res.status(200).json("Servidor on... '/all' devolve todas as marcas, '/search/:chavePrimaria' devolve apenas a marca com aquela chave primária")
    }

})

app.get('/all', (req, res) => {
  MethodsModel.find({}, (err, resultado) => {
    if (err) {
      res.status(500).json("Erro: " + err);
    } else {
      res.status(200).send(resultado);
    }
  });
});

app.get('/search/:chavePrimaria', (req, res) => {
  MethodsModel.findOne({ chavePrimaria: req.params.chavePrimaria }, (err, resultado) => {
    if (err) {
      res.status(500).json("Erro: " + err);
    } else if (resultado) {
      res.status(200).send(resultado);
    } else {
      res.status(404).json("Resource not found");
    }
  });
});

// Porta da api

app.listen(process.env.SERVER_PORT)//
