const mongoose = require('mongoose'); 
// import mongoose from 'mongoose'; ES LO MISMO
const userSchema = new mongoose.Schema({
    Fecha: {
        type: Date,
        unique: true,
    },
    Consumo: {
        type: Number,
    }
}); //

const Consumo = mongoose.model('Consumo', userSchema);

// const nuevoUsuario = new User({
//     username:"Les",
//     name: "Leslie",
//     lastname: "Amaya",
//     password:"1234",
//     rol: 0
// });

module.exports = Consumo;
// module.exports = {User /*, creaUsuario*/ };
