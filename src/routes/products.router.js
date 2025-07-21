import { Router } from "express";
import {auth} from "../middlewares/auth.middleware.js"
import { getAllProducts, getProductById, createProduct, deleteProduct } from "../controllers/products.controller.js";
const router = Router();

export default router;

//las rutas con query deben ir antes de las rutas con params para evitar conflictos. 
router.get('/products', getAllProducts);

router.get('/products/:id', getProductById );

router.post('/products/', auth, createProduct );

router.delete('/products/:id', auth, deleteProduct);