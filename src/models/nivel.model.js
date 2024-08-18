const mongoose = require('mongoose'); 
// import mongoose from 'mongoose'; ES LO MISMO
const userSchema = new mongoose.Schema({
    Porcentaje: { //
        type: Number,
    },
    Nivel: { //LITROS
        type: Number,
    }
    
}); //

const Nivel = mongoose.model('Nivel', userSchema);


module.exports = Nivel;
// module.exports = {User /*, creaUsuario*/ };
