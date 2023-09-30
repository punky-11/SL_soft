const datosUsuario = require('../data-access/data.usuario');
const datosCliente = require('../data-access/date.clientes');

// login

exports.login = async (req, res) => {
  try {
    const correoElectronico = {email: req.body.email} && {password: req.body.password};
    const validarCorreo = await datosUsuario.buscarUsuario(correoElectronico);
    console.log(validarCorreo);

    if (!validarCorreo) {
      res.status(500).json({message: 'El usuario no existe'});
    } else {
      const clienteCorreo = await datosCliente.buscarClientes({email: validarCorreo.email});
      if (clienteCorreo) {
        res.status(200).json({cliente: clienteCorreo});
      } else {
        res.status(500).json({message: 'El cliente no se encontro'});
      }
      /* console.log(cliente);
      if (cliente) {
        res.status(200).json({clientes: cliente});
      } else {
        res.status(500).json({message: 'El cliente no se encontro'});
      };*/
    };
  } catch (error) {
    console.log(error);
  }
};
