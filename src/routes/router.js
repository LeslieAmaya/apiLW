const { Router } = require("express");
const login = require("../controllers/login");
const userController = require("../controllers/user.controller");

const router = Router();

router.post("/login", login.login);
router.post("/user", userController.registerUser);
router.delete("/user/:id", userController.deleteUser);
router.get("/user", userController.getUser);
router.put("/user/:id", userController.updateUser);
// get obtener los datos de la base de datos
// post enviar los datos a la base de datos

module.exports = router;