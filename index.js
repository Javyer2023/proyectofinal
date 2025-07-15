import express from "express";
import cors from "cors";
import 'dotenv/config';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

//el metodo listen recibe dos argumentos, el puerto y una funcion callback
app.listen(PORT,() => (console.log(`Servidor corriendo en http://localhost:${PORT}`)));

app.get('/', (req, resp)=> resp.send(`<h1>Hola Mundo desde  Express<h1>`));
