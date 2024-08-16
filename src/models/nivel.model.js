const mongoose = require('mongoose'); 
// import mongoose from 'mongoose'; ES LO MISMO
const userSchema = new mongoose.Schema({
    Porcentaje: {
        type: Number,
    },
    Nivel: {
        type: Number,
    }
}); //

const Nivel = mongoose.model('Nivel', userSchema);

// const nuevoUsuario = new User({
//     username:"Les",
//     name: "Leslie",
//     lastname: "Amaya",
//     password:"1234",
//     rol: 0
// });

module.exports = Nivel;
// module.exports = {User /*, creaUsuario*/ };
