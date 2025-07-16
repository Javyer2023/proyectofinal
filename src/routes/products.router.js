import { Router } from "express";
import { getAllProducts, searchProducts, getProductById, createProduct, deleteProduct, updateProduct } from "../controllers/products.controller.js";
const router = Router();

export default router;

//las rutas con query deben ir antes de las rutas con params para evitar conflictos. 
router.get('/products', getAllProducts);

router.get('/products/search', searchProducts);
router.get('/products/:id', getProductById );

router.post('/products/', createProduct );
//console.log(productos);

router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);