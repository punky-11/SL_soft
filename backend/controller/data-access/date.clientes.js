const Clientes = require('../../models/clientes.models');
exports.agregarClientes = async () => {
  try {
    const nuevoCliente = new Clientes(agregarDatos);
    const nuevoCliente1 = await nuevoCliente.save();
    return nuevoCliente1;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
