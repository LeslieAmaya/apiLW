const mongoose = require('mongoose'); 
// import mongoose from 'mongoose'; ES LO MISMO
const nivelSchema = new mongoose.Schema({
    Porcentaje: { //
        type: Number,
    },
    Nivel: { //LITROS
        type: Number,
    }
    
}); //

const Nivel = mongoose.model('Nivel', nivelSchema);


module.exports = Nivel;
// module.exports = {User /*, creaUsuario*/ };
