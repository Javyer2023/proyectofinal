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
    else {
        resp.status(200).json(product);
    }

    
};
//Utilicé la constante campos porque tengo documentos con diferentes estructuras.
//Podría hacer una función que determinara la estructura y enviar solo los parametros necesarios.
export const createProduct = async (req, resp) => {
    const campos = req.body;
    const productoCreado = await model.createProduct(campos);
    resp.status(201).json(productoCreado);
        
};

export const deleteProduct = async (req, resp) => {
    const id = req.params.id;
    const registroBorrado = await model.deleteProduct(id);
    if (registroBorrado){
       resp.status(200).json({resultado: "Documento Borrado"});
    }
    else {
         resp.status(404).json({error : "Producto No encontrado"});
    };
    
};

