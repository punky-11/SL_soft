const datos = require('../data-access/date.clientes');
const datosUsuario = require('../data-access/data.usuario');


exports.agregarClientes = async (req, res) => {
  try {
    const correoElectronico = {email: req.body.email};
    const validarCorreo = await datos.buscarClientes(correoElectronico) ;

    if (validarCorreo) {
      const agragarCliente = {nombre, apellido, documento, celular, direccion, email} = req.body;

       await datos.agregarC(agragarCliente);

      const agregarUsuario = correoElectronico 
      const validarCorreoUsuario = await datosUsuario.buscarUsuario(agregarUsuario);

      if (validarCorreoUsuario) {
        const agregarUsuario = {password, email} = req.body;
        await datosUsuario.agregarUsuario(agregarUsuario);
        res.status(200).json({message: 'Cliente agregado con éxito'} && {message: 'Usuario agregado con éxito'});
      } else {      
        res.status(500).json({message: 'No se pudo agregar el usuario'});
      }


    } else {
      res.json({message: 'El cliente ya existe'} && {message: 'El usuario ya existe'});
    }
  } catch (error) {
    console.log(error);
  }
};

exports.buscarClientes = async (req, res) => {
  try {
    const filtro = {email: req.body.email};
    
    const usuario = await datos.buscarClientes(filtro);
    if (usuario) {
      res.status(200).json({cliente: usuario});
    } else {
      res.status(500).json({message: 'No se pudo encontrar los datos del cliente'});
    }
  } catch (error) {
    console.log(error);
  }
};


exports.eliminarClientes = async (req, res) => {
  try {
    const id = req.body.id;
    const eliminar = await datos.eliminarC(id) 

    if (eliminar) {
      res.status(200).json({message: 'Cliente eliminado con éxito'});
    } else {
      res.status(500).json({message: 'No se pudo eliminar el cliente'});
    }
  } catch (error) {

  }
};

exports.actualizarClientes = async (req, res) => {
  try {
    const id = req.params.id;
    if (id) {
      const actualizarCliente = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        documento: req.body.documento,
        celular: req.body.celular,
        direccion: req.body.direccion,
        email: req.body.email,
      };
      const actualizaru = {password: req.body.password, email: req.body.email};
      const actualizar = await datos.actualizarC(id, actualizarCliente) && await datosUsuario.actualizarUsuario(id, actualizaru);
      if (actualizar) {
        res.status(200).json({message: 'Cliente actualizado con éxito'});
      } else {
        res.status(500).json({message: 'No se pudo actualizar el cliente'});
      }
    }
  } catch (error) {
    console.log(error);
  }
};
