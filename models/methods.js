const mongoose = require('mongoose');


// Variável que guarda o modelo que será devolvido
const methods = mongoose.Schema({


    // Abaixo estão os modelos dos itens que serão devolvidos para consumo
    chavePrimaria:{
        type:String,
        unique: true,
    },
    nome:{
        type:String,
        required:true
    },

    // Os itens de endereço são uma lista de itens
    endereco:{
        type:Object,
        required:true,
        pais:{
            type:String,
            required: true
        },
        cidade:{
            type:String,
            required: true
        },
        estado:{
            type:String,
            required: true
        }
    },
    criadores:{
        type:String,
        required:true
    },
    resumo:{
        type:String,
        required:true
    },
    valorAvaliada:{
        type:String,
        required:true 
    },
    img:{
        type:String,
        requered:true
    }
    
})

//Export the model
module.exports = mongoose.model('methods', methods);