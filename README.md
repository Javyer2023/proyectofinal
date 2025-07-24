# Proyecto Final API REST con Node y Express
### Descripcion:
Se trata de una aplicación que conecta a una base de datos de firebase que contiene datos de productos de un negocio que vende cierres y deslizadores.

Las operaciones http que se pueden hacer son las siguientes:

1. GET (obtener todos los productos o requerir por id)
2. POST (para crear un nuevo documento o producto, requiere un token)
3. DELETE (para borrar un documente o producto)

### Instalación:

- Clonar el repositorio de github
- Instalar Dependencias con el siguiente comando:
```
npm install
```
> #### Dependencias Instaladas:
> - cors
> - nodemon
> - express
> - dotenv
> - firebase
> - jsonwebtoken 

- Comprobar dependencias con:

```
npm list
```
- Ejecutar con:
```
npm run dev
```

## COMO USAR LA API:
Hay dos tipos de documentos: 
- Cierres

``` json

 {
    "id": "NUH5T0t0IdL7ICRJG1B9",
    "color": "verde militar",
    "tipo": "desmontable",
    "medida": 80,
    "material_diente": "metal",
    "precio": 2500,
    "categoria": "cierre"
 }


```
- Deslizadores
```json
 {
    "id": "6xo0UfrGjQFr1SLsf23G",
    "precio": 1000,
    "categoria": "deslizadores",
    "tipo": "reversible",
    "ancho": 5
 }
```

### Obtener todos los productos:

> Metodo: **GET**  Endpoint: **'api/products'**
* Respuesta: **200**
* Respuesta: **404** (No encontrado)

### Obtener un producto por id:

> Metodo: **GET** Endpoint: **'api/products/:id'**
* Respuesta: **200**
* Respuesta: **404** (No encontrado)


### Crear un producto:

> Requiere login: 
>Metodo **POST** Endpoint: **'api/login'**
```json
{
    "email": "admin@gmail.com",
    "password": "12345"
}
```
* Respuesta: **200**
* Respuesta: **401** (No autorizado)

> Metodo:   **POST**  Endpoint: **'api/products/:id'**
- El token generado en la ruta del login se debe pegar enviar en el item **Authorization --> bearer token**
* Respuesta: **201** (recurso creado)
* Respuesta: **403** (No permitido)


### Borrar un producto:

> Requiere login : **DELETE** Endpoint: **'api/login'**
```json
{
    "email": "admin@gmail.com",
    "password": "12345"
}
```
> Metodo **DELETE** Endpoint: **'api/products/:id'**
- El token generado en la ruta del login se debe pegar enviar en el item **Authorization --> bearer token**
* Respuesta: **200** 
* Respuesta: **403** (No permitido)


