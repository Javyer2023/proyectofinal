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

### Obtener todos los productos:

> Metodo: **GET**  Endpoint: **'api/products'**

### Obtener un producto por id:

> Metodo: **GET** Endpoint: **'api/products/:id'**

### Crear un producto:

> Requiere login: 
>Metodo **POST** Endpoint: **'api/login'**


> Metodo:   **POST**  Endpoint: **'api/products/:id'**
> 





