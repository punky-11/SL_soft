const Datos = require('../data-access/date.productos');
// agregar productos
exports.agregarProductos = async (req, res) => {
  try {
    const filtro = {referencia: req.body.referencia};
    const validarProductos = await Datos.buscarP(filtro);
    console.log(validarProductos);
    if (validarProductos.length == 0 ) {
      const cantidadTalla = req.body.talla;
      let cantidadTotal = 0;
      for (const key in cantidadTalla) {
        if (cantidadTalla.hasOwnProperty(key)) {
          cantidadTotal += cantidadTalla[key];
        }
      }
      const agregarDatos = {
        nombre: req.body.nombre,
        talla: req.body.talla,
        referencia: req.body.referencia,
        cantidad: cantidadTotal,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,

      };

      const rr = await Datos.agregarD(agregarDatos);

      if (rr) {
        res.status(200).json({message: 'Producto agregado con éxito'});
      } else {
        res.status(500).json({message: 'No se pudo agregar el producto'});
      }
    } else {
      res.json({message: 'El producto ya existe'});
    }
  } catch (error) {
    console.log(error);
  }
};
// buscar productos
exports.buscarProductos = async (req, res) => {
  try {
    const filtro = req.body;
    const productos = await Datos.buscarP(filtro);
    res.status(200).json({productos: productos});
  } catch (error) {
    console.log(error);
  }
};

// actualizar productos
exports.actualizarProductos = async (req, res) => {
  try {
    const id = req.params.id;
    const actualizarDatos = {
      nombre: req.body.nombre,
      talla: req.body.talla,
      referencia: req.body.referencia,
      cantidad: req.body.cantidad,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
    };

    await Datos.actualizarP(id, actualizarDatos);
    res.json({message: 'Producto actualizado con éxito'});
  } catch (error) {
    console.log(error);
  }
};

// eliminar productos
exports.eliminarProductos = async (req, res) => {
  try {
    const id = {_id: req.params.id};
    // const eliminar = await Datos.eliminarP(id);
    await Datos.eliminarP(id);
    res.json({message: 'Producto eliminado con éxito'});
  } catch (error) {
    console.log(error);
  }
};
