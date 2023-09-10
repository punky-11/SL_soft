const {Schema} = require('mongoose');
const mongoose = require('../config/config');

const shemaEmpleado = new mongoose.Schema({
  nombre: {
    type: String,
    require: [true, 'Se requiere un nombre del empleado'],
  },
  apellido: {
    type: String,
    require: [true, 'Se requiere los apellido del empleado'],
  },
  documento: {
    type: String,
    default: 'Sin registrar numero celular',
  },
  correo: {
    type: String,
    default: 'Sin registrar direccion',
  },
  cargo: {
    type: String,
    require: [true, 'Se deve espesificar un cargo'],
  },
  estado: {
    type: Boolean,
    default: true,
    required: [true, 'Se requiere el estado del empleado'],
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: usuarios,
    required: true,
  },
}, {timestamps: true});

module.exports = mongoose.model('empleados', shemaEmpleado);
