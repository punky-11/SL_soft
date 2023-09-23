const mongoose = require('../config/config');

const productosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'es requeriodo el nombre'],
    min: 4,
  },
  talla: {
    type: Object,
    required: [true, 'es requeriodo talla'],
    max: 5,
    min: 1,
  },
  referencia: {
    type: String,
    required: [true, 'es requeriodo la referencia'],
    max: 7,
    min: 4,
  },
  cantidad: {
    type: Number,
    required: [true, 'es requeriodo la cantadad'],
    min: [1, 'debe ser mayor a 1 '],
  },
  precio: {
    type: Number,
    required: [true, 'es requeriodo el precio'],
    man: 10000,
  },
  descripcion: {
    type: String,
    required: [true, 'es requeriodo la descripcion'],
  },
  categoria: {
    type: String,
    required: [true, 'es requeriodo la categoria'],
  },
}, {timestamps: true});
const producto =mongoose.model('producto', productosSchema);
module.exports =producto;


