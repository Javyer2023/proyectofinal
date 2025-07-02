import express from "express";

const app = express();

const PORT = 3000;

//el metodo listen recibe dos argumentos, el puerto y una funcion callback
app.listen(PORT,() => (console.log(`Servidor corriendo en http://localhost:${PORT}`)));

app.get('/', (req, resp)=> resp.send(`<h1>Hola Mundo desde  Express<h1>`));
