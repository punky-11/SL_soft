const Usuario = require('../../models/usuarios.model');

exports.agregarUsuario = async (agragarU) => {
  try {
    const nuevoUsuario = new Usuario(agragarU);
    const nuevoUsuario1 = await nuevoUsuario.save();
    return nuevoUsuario1;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.buscarUsuario = async (filtro) => {
  try {
    const usuarios = await Usuario.find(filtro);
    return usuarios;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.eliminarUsuario = async (id) => {
  try {
    const eliminar = await Usuario.findByIdAndDelete(id);
    return eliminar;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.actualizarUsuario = async (id, actualizaru) => {
  try {
    const actualizar = await Usuario.findByIdAndUpdate(id, actualizaru);
    return actualizar;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
