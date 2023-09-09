const Datos = require('../data-access/controller.productos');
// agregar productos
exports.agregarProductos = async (req, res) => {
    try {
// cambiar datos cuando haga prueba
    const agregarDatos = {
        nombre:req.body.nombre,
        talla: req.body.talla,
        referencia: req.body.referencia,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        descripcion: req.body.descripcion,

    }
    
    const rr = await Datos.agregarD(agregarDatos);

    if (rr) {
        res.status(200).json({ message: 'Producto agregado con éxito' });
      } else {
        res.status(500).json({ message: 'No se pudo agregar el producto' });
      }
    
} catch (error) {
    console.log(error)
}
}
//buscar productos
exports.buscarProductos = async (req, res) => {
    try {
        const productos = await Datos.buscarP();
        res.json({productos: productos});
    } catch (error) {
        console.log(error)
    }
}
// eliminar productos
exports.eliminarProductos = async (req, res) => {
    try {
        const id = req.params.id;
        const eliminar = await Datos.eliminarP(id);
        res.json({message: 'Producto eliminado con éxito'});
    } catch (error) {
        console.log(error)
    }
};
// actualizar productos
exports.actualizarProductos = async (req, res) => {
    try {
        const id = req.params.id;
        const actualizarDatos = {
            nombre:req.body.nombre,
            talla: req.body.talla,
            referencia: req.body.referencia,
            cantidad: req.body.cantidad,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
        }
        const actualizar = await Datos.actualizarP(id, actualizarDatos);
        res.json({message: 'Producto actualizado con éxito'});
    } catch (error) {
        console.log(error)
    }
}