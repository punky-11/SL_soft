const { json } = require('express');
const Clientes = require('../../models/clientes.models');

exports.agregarC = async (agragarCliente) => {
  try {
    const nuevoCliente = new Clientes(agragarCliente);
    const nuevoCliente1 = await nuevoCliente.save();

    return nuevoCliente1;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.buscarClientes = async (filtro, option) => {
  try {
    const clientes = await Clientes.find(filtro, option);
    if (clientes.length > 0) {
      return clientes;
    } else {
      return ('error en el servidor');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

exports.eliminarC = async (id) => {
  try {
    const eliminar = await Clientes.findByIdAndDelete(id);
    return eliminar;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
exports.actualizarC = async (id, actualizarDatos) => {
  try {
    const actualizar = await Clientes.findByIdAndUpdate(id, actualizarDatos);
    return actualizar;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
