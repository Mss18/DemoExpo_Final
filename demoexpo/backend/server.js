const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Usuario = require("./models/Usuario");

mongoose.connect("mongodb://localhost/demoexpo", { 
    useUnifiedTopology: true,
    useNewUrlParser: true });

mongoose.connection.once("open", () => {
  console.log("Conexión establecida con MongoDB");
});

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Usuario.find((err, usuarios) => {
    if (err) {
      console.log(err);
    } else {
      res.json(usuarios);
    }
  });
});

app.post("/crear", (req, res) => {
  const usuario = new Usuario(req.body);
  usuario
    .save()
    .then((usuario) => {
      res.json(usuario);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Usuario.findById(id, (err, usuario) => {
    res.json(usuario);
  });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  Usuario.findById(id, (err, usuario) => {
    if (!usuario) {
      res.status(404).send("Usuario non atopado");
    } else {
      usuario.text = req.body.text;

      usuario
        .save()
        .then((usuario) => {
          res.json(usuario);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});