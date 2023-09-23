const mongoose = require('../config/config');
const SchemaUsuarios = new mongoose.Schema({

  __di: {
    type: Object,
    // require: [true, 'Se requiere un id'],
  },
  email: {
    type: String,
    // require: [true, 'Se requiere un correo'],
  },
  password: {
    type: String,
    // require: [true, 'Se requiere una contraseña'],
  },
  rol: {
    type: String,
    // require: [true, 'Se requiere un rol'],
  },

});

const Usuario =mongoose.model('Usuario', SchemaUsuarios);
module.exports =Usuario;
