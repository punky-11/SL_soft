const datos = require('../data-access/date.clientes');
const datosUsuario = require('../data-access/data.usuario');




exports.agregarClientes = async (req, res) => {
  try {
    const correoElectronico = { email: req.body.email };
    const validarCorreo = await datos.buscarClientes(correoElectronico);
console.log(validarCorreo);
    if (validarCorreo.length == 0) {
      const agragarCliente = { nombre, apellido, documento, celular, direccion, email } = req.body;
            const validacion = await datos.agregarC(agragarCliente);
            
      if (validacion) {
        res.status(200).json({ message: 'Cliente agregado con éxito' });
      } else {
        res.status(500).json({ message: 'No se pudo agregar el cliente' });
      }
      
      
    // guardar usuario
    const correUsuario = { email: req.body.email };
    const validarCorreo = await datosUsuario.buscarUsuario(correUsuario);
    if (validarCorreo.length == 0) {
      
      const agragarU = {_id:validacion._id,  
        password: req.body.password,
         email: req.body.email,
         "rol": "cliente"
        };
      const validacion1 = await datosUsuario.agregarUsuario(agragarU);
      if (validacion1) {
        res.status(200).json({ message: 'Usuario agregado con éxito' });
      } else {
        res.status(500).json({ message: 'No se pudo agregar el usuario' });
      }
    }



    }else {
      res.json({ message: 'El cliente ya existe' } && { message: 'El usuario ya existe' });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.buscarClientes = async (req, res) => {
  try {
    const filtro = req.body;
    const clientes = await datos.buscarClientes(filtro);
    res.json({ clientes: clientes });
  } catch (error) {
    console.log(error);
  }
};


exports.eliminarClientes = async (req, res) => {
  try {
    const id = req.params.id;
    const eliminar = await datos.eliminarC(id) && await datosUsuario.eliminarUsuario(id);
    
    if (eliminar) {
      res.status(200).json({ message: 'Cliente eliminado con éxito' });
    } else {
      res.status(500).json({ message: 'No se pudo eliminar el cliente' });
    }
    
  } catch (error) {
    
  }
};

exports.actualizarClientes = async (req, res) => {
  try {
    const id = req.params.id;
    const actualizarDatos = { nombre, apellido, documento, celular, direccion, email } = req.body;
    comst actualizarDatosU = { password: req.body.password, email: req.body.email };
    const actualizar = await datos.actualizarC(id, actualizarDatos);
    if (actualizar) {
      res.status(200).json({ message: 'Cliente actualizado con éxito' });
    } else {
      res.status(500).json({ message: 'No se pudo actualizar el cliente' });
    }
  } catch (error) {
    console.log(error);
  }
}