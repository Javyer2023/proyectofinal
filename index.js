import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js"
import 'dotenv/config';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

//el metodo listen recibe dos argumentos, el puerto y una funcion callback
app.listen(PORT,() => (console.log(`Servidor corriendo en http://localhost:${PORT}`)));

app.use('/api',productsRouter);

app.get('/', (req, resp) => {resp.send('Node Js desde Express');});

app.use((req, resp, next) => {
    resp.status(404).json({error: "Recurso No Encontrado"});
});