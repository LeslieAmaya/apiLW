const Nivel = require("../models/nivel.model");

// route.delete("/usuario:id")

exports.getNivel = (req, res) => {
    Nivel.find({})
        .then((data) => res.json(data)) //responde con los datos en caso de que se elimine
        .catch((error) => res.json({ message: error })); //nos devuelve el error en caso de que lo hubiera
}

exports.createNivel = async (req, res) => {
    
    const nivelData = req.body;
    const newNivel = new Nivel({
        Nivel: nivelData.Nivel,
        Porcentaje: nivelData.Porcentaje
    });
    await newNivel
        .save()
        .then((data) => res.json(data)) //responde con los datos en caso de que se elimine
        .catch((error) => res.json({ message: error })); //nos devuelve el error en caso de que lo hubiera
};

exports.updateNivel = async (req, res) => {
    const id = req.params.id;
    const nivelData = req.body;
    
    await Nivel
        .updateOne({ _id: id }, { $set: { 
            Nivel: nivelData.Nivel,
            Porcentaje: nivelData.Porcentaje
        } })
        .then((data) => res.json(data)) //responde con los datos en caso de que se elimine
        .catch((error) => res.json({ message: error })); //nos devuelve el error en caso de que lo hubiera
}