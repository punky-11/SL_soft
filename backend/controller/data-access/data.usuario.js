const Usuario = require('../../models/usuarios.model');
const bcrypt = require('bcrypt');

exports.agregarUsuario = async (agragarU) => {
  try {
    const salt = await bcrypt.genSalt(10);
    agragarU.password = await bcrypt.hash(agragarU.password, salt);
    
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
    if (usuarios.length > 0) {
      return usuarios;
    } else {
      return ('error en el servidor');
    }
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
