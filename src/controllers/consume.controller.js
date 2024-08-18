const Consume = require("../models/consume.model");


exports.getConsume = (req, res) => {
    Consume.find({})
        .then((data) => res.json(data)) //responde con los datos en caso de que se elimine
        .catch((error) => res.json({ message: error })); //nos devuelve el error en caso de que lo hubiera
}

exports.createConsume = async (req, res) => {
    
    const consumeData = req.body;
    const newConsume = new Consume({
        Fecha: consumeData.Fecha,
        Consumo: consumeData.Consumo
    });
    await newConsume
        .save()
        .then((data) => res.json(data)) //responde con los datos en caso de que se elimine
        .catch((error) => res.json({ message: error })); //nos devuelve el error en caso de que lo hubiera
};
