const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/router");
const cors = require("cors");

app.use(express.json()); //Obtener los json
app.use(cors());
app.use("/api", router);

try {
  mongoose.connect(
    "mongodb+srv://UsuarioPrueba:UsuarioPrueba@miprimercluster.rix6jne.mongodb.net/LevelWater2"
    // después del "/" poner la base de datos que vas a usar
  );
  console.log("Si está conectado");
} catch (err) {
  console.log(err);
}

app.listen(3001, () => console.log("Esta jalando :)"));

module.exports = app;
