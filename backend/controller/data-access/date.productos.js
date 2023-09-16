const Producto = require('../../models/productos.model.js');

exports.agregarD = async (agregarDatos) => {
  try {
    const producto1 = new Producto(agregarDatos);
    const guardod = await producto1.save();
    return guardod;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// buscra productos
exports.buscarP = async (filtro) => {
  try {
    const productos = await Producto.find(filtro);
    console.log('pasa por aqui buscando productos');
    return productos;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.eliminarP = async (id) => {
  try {
    const eliminar = await Producto.findByIdAndDelete(id);
    return eliminar;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.actualizarP = async (id, actualizarDatos) => {
  try {
    console.log(id);
    const actualizar = await Producto.findByIdAndUpdate(id, actualizarDatos);
    return actualizar;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
