const datos = require('../data-access/date.clientes');

exports.agregarClientes = async (req, res) => {
  try {
    const correoElectronico = {email: req.body.email};
    const validarCorreo = await datos(correoElectronico);
    if (validarCorreo.length == 0) {
      const agragarCliente ={nombre, apellido, documento, celular, direccion, email} = req.body;
      await datos.agregarClientes(agragarCliente);
    }
  } catch (error) {
    console.log(error);
  }
};
