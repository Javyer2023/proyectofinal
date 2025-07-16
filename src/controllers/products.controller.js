import * as model from "../models/products.model.js";

export const getAllProducts = async(req, resp) => {
    resp.status(200).json(await model.getAllProducts());
};

export const searchProducts = (req, resp) => {
    const categoria = req.query.categoria;
    //const articulo = req.query.articulo;
    const filtrados = model.searchProducts(categoria);

    if (filtrados.length == 0 ) {
        resp.status(404).json({error: "Busqueda no coincide"});
    }
    
    resp.status(200).json(filtrados);
    
};


export const getProductById = (req , resp) => {
    const id = req.params.id;
    const product = model.getProductById(id);

    if (product == undefined) {
        resp.status(404).json({error : "Producto No encontrado"});
    }

    resp.json(product);
};

export const createProduct = (req, resp) => {
    const {categoria, articulo, precio } = req.body;
    const productoCreado = model.createProduct(categoria, articulo, precio);
    resp.json(productoCreado);
}

export const deleteProduct = (req, resp) => {
    const id = parseInt(req.params.id);
    const registroBorrado = model.deleteProduct(id);
    if (registroBorrado == undefined ){
        resp.status(404).json({error : "Producto No encontrado"});
    }
    else {
        resp.json(registroBorrado);
    }
    
}

export const updateProduct = (req, resp) => {
    const id = parseInt(req.params.id);
    const datosBody = req.body;
    const registroActualizado = model.updateProduct(id, datosBody);
    if (registroActualizado == undefined ){
        resp.json({error : "Producto inexistente, no se puede actualizar!"});
    }
    else {
        resp.json(registroActualizado);
}
    }
    