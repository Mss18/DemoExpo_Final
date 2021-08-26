const mongoose = require("mongoose");

const Usuario = mongoose.Schema({
  nome: {
    type: String,
  },
  apelido: {
    type: String,
  },
  anoNacemento: {
    type: Number,
  }
});

module.exports = mongoose.model("Usuario", Usuario);