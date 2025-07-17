import 'dotenv/config';
import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/products.router.js"


const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

//el metodo listen recibe dos argumentos, el puerto y una funcion callback
app.listen(PORT,() => (console.log(`Servidor corriendo en http://localhost:${PORT}`)));

app.use('/api',productsRouter);

app.get('/', (req, resp) => {resp.send('Node Js desde Express');});

app.use((req, resp, next) => {
    resp.status(404).json({error: "Recurso No Encontrado"});
});