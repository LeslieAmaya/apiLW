const Consume = require("../models/consume.model");

exports.getConsume = async (req, res) => {
    try {
        const consumes = await Consume.find({});
        res.status(200).json(consumes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createConsume = async (req, res) => {
    const { fecha, consumo } = req.body;

    // Validación de los datos
    if (!fecha,  !consumo && consumo === 0) {
        return res.status(400).json({ message: "Fecha y Consumo son requeridos" });
    }

    // Validar que la fecha sea válida
    const parsedFecha = Date.parse(Fecha);
    if (isNaN(parsedFecha)) {
        return res.status(400).json({ message: "Fecha inválida" });
    }

    // Validar que Consumo sea un número
    if (typeof consumo !== 'number',  consumo < 0) {
        return res.status(400).json({ message: "Consumo debe ser un número positivo" });
    }

    try {
        const newConsume = new Consume({
            fecha: new Date(parsedFecha),
            consumo: consumo
        });

        const data = await newConsume.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};