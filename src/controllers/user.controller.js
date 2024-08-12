const User = require("../models/user.model");

// route.delete("/usuario:id")

exports.deleteUser = (req, res) => {
    const id = req.params.id; //nos trae el id de la url

    User.deleteOne({ username: id }) //eliminar el unico usuario con el id
        .then((data) => res.json(data)) //responde con los datos en caso de que se elimine
        .catch((error) => res.json({ message: error })); //nos devuelve el error en caso de que lo hubiera
}

exports.getUser = (req, res) => {
    User.find({})
        .then((data) => res.json(data)) //responde con los datos en caso de que se elimine
        .catch((error) => res.json({ message: error })); //nos devuelve el error en caso de que lo hubiera
}

exports.registerUser = async (req, res) => {
    
    const userData = req.body;
    const newUser = new User({
        username: userData.username,
        name: userData.name,
        lastname: userData.lastname,
        password: userData.password,
        rol: userData.rol
    });
    await newUser
        .save()
        .then((data) => res.json(data)) //responde con los datos en caso de que se elimine
        .catch((error) => res.json({ message: error })); //nos devuelve el error en caso de que lo hubiera
};

exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const userData = req.body;
    
    await User
        .updateOne({ _id: id }, { $set: { 
            username: userData.username,
            name: userData.name, 
            lastname: userData.lastname, 
            password:userData.password, 
            rol: userData.rol
        } })
        .then((data) => res.json(data)) //responde con los datos en caso de que se elimine
        .catch((error) => res.json({ message: error })); //nos devuelve el error en caso de que lo hubiera
}