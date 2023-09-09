const Producto  = require('../../models/productos.model.js');

exports.agregarD = async  (_agregarDatos) => {
    try {
        const producto1 = new Producto(_agregarDatos);

        const guardod = await Producto(producto1).save(); 

        return guardod;

       
    } catch (error) {
        console.log(error);
        throw error;
    }
};
// buscra productos
exports.buscarP = async () => {
    try {
        
        const productos = await Producto.find();
        console.log("pasa por aqui");
        return productos;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
exports.eliminarP = async (id) => {
    try {
        const eliminar = await Producto.findByIdAndDelete(id);
        return eliminar;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
exports.actualizarP = async (id, _actualizarDatos) => {
    const actualizar = await Producto.findByIdAndUpdate(id, _actualizarDatos);
    return actualizar;
}