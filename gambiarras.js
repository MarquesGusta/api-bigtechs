const mongoose = require('mongoose');

const methods = require('./models/methods')

mongoose.Promise = global.Promise;

// Variável para inserir informações no banco de dados
const novoMetodo = new methods({
    chavePrimaria:"6",
    nome:"Sony Corporation",
    endereco:{
        pais:"Japão",
        estado:"Tóquio",
        cidade:"Tóquio"
    },
    criadores:"Masaru Ibuka e Akio Morita",
    resumo:"A Sony Group Corporation é uma multinacional japonesa, fundada em 1946, por Masaru Ibuka e Akio Morita. Com sede em Tóquio, no Japão, o grupo tem como domínio principal de negócios os setores de eletrônicos e entretenimento, desenvolvendo produtos e serviços para as respectivas indústrias.",
    valorAvaliada:"800 bilhões de dólares",
    img:"https://logodownload.org/wp-content/uploads/2014/02/sony-logo-1-1.png",
})

// Salva as informações no banco de dados
novoMetodo.save()
.then((comentarioSalvo) => {
    console.log("Comentario salvo com sucesso" + comentarioSalvo)
})
.catch((erro) =>{
    console.log("Erro" + erro)
})