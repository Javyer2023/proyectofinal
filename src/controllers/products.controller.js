import * as model from "../models/products.model.js";

export const getAllProducts = async(req, resp) => {
    resp.status(200).json(await model.getAllProducts());
};


export const getProductById = async (req , resp) => {
    const id = req.params.id;
    const product =  await model.getProductById(id);

    if (product == undefined) {
        resp.status(404).json({error : "Producto No encontrado"});
    }

    resp.status(200).json(product);
};

export const createProduct = async (req, resp) => {
    const campos = req.body;
    console.log(req.body);
    const productoCreado = await model.createProduct(campos);
    resp.status(201).json(productoCreado);
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
    