// const mongoose = require('mongoose');

const mongoose = require('../config/config');

const productosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    min: 4,
  },
  talla: {
    type: String,
    required: true,
    max: 5,
    min: 1,
  },
  referencia: {
    type: String,
    required: true,
    max: 7,
    min: 4,
  },
  cantidad: {
    type: String,
    required: true,
    min: [1, 'debe ser mayor a 1 '],
  },
  precio: {
    type: Number,
    required: true,
    man: 10000,
  },
  descripcion: {
    type: String,
    required: true,
  },
}, {timestamps: true});
const producto =mongoose.model('producto', productosSchema);
module.exports =producto;


