const  User = require('../models/user.model');

exports.login = async (req, res) => { //Espera peticion y devuelve respuesta
    const {username, password, rol } = req.body;
    console.log(req.body);

    try{
        const user = await User.findOne({username});
        /* creaUsuario(); */
        if (user && (password== user.password)){
            res.send({ username, password, rol});
            console.log({user});
        } else {
            res.status(501).json({message: "Usuario o contraseña incorrecta"})
        }
    } catch(err){
        console.log(err);
    }
}