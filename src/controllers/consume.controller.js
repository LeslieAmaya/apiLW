const Consume = require("../models/consume.model");

exports.getConsume = async (req, res) => {
    try {
        // Obtener todos los registros de consumo
        const consumes = await Consume.find({});
        // Responder con los datos
        res.status(200).json(consumes);
    } catch (error) {
        // Manejo de errores con código 500 (Error Interno del Servidor)
        res.status(500).json({ message: error.message });
    }
};

exports.createConsume = async (req, res) => {
    const consumeData = req.body;

    // Validar datos de entrada
    if (consumeData.Fecha, consumeData.Consumo) {
        return res.status(400).json({ message: "Fecha y Consumo son requeridos" });
    }

    // Validar que la fecha sea válida
    if (isNaN(Date.parse(consumeData.Fecha))) {
        return res.status(400).json({ message: "Fecha inválida" });
    }

    // Validar que el consumo sea un número
    if (typeof consumeData.Consumo !== 'number',  consumeData.Consumo < 0) {
        return res.status(400).json({ message: "Consumo debe ser un número positivo" });
    }

    try {
        // Crear un nuevo registro de consumo
        const newConsume = new Consume({
            Fecha: new Date(consumeData.Fecha), // Asegurar que la fecha esté en el formato correcto
            Consumo: consumeData.Consumo
        });

        // Guardar el registro en la base de datos
        const savedConsume = await newConsume.save();
        // Responder con los datos guardados y código 201 (Creado)
        res.status(201).json(savedConsume);
    } catch (error) {
        // Manejo de errores con código 500 (Error Interno del Servidor)
        res.status(500).json({ message: error.message });
    }
};