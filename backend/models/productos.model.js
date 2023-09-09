const mongoose = require('mongoose');

const productosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  talla: {
    type: String,
    required: true,
  },
  referencia: {
    type: String,
    required: true,
  },
  cantidad: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('productos', productosSchema);


