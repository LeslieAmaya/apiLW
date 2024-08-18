const mongoose = require('mongoose');
const moment = require('moment');

const consumeSchema = new mongoose.Schema({
    Fecha: {
        type: String, // Cambié a String para almacenar la fecha formateada
    },
    Consumo: {
        type: Number,
    }
});

// Middleware para formatear la fecha antes de guardarla
consumeSchema.pre('save', function(next) {
    if (this.isModified('Fecha') || this.isNew) {
        this.Fecha = moment(this.Fecha).format('YYYY-MM-DD HH:mm:ss');
    }
    next();
});

const Consume = mongoose.model('Consume', consumeSchema);

module.exports = Consume;
