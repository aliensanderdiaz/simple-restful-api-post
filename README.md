# Simple Restful Api Posts
API Restful simple para aplicación de posts.

### Nota:
- Hecho en nodejs, con express y mongoDB.
- Se utilizan funciones async/await para las query en la base de datos.
- Debes crear un archivo .env 

```
DB_CONNECTION=XXXXX
```
- Donde XXXXX es la dirección de tu base de datos. Ej: mongodb://localhost:27017/rest
- No olvides correr la aplicación de mongo si lo haces en local.

```
mongod
```
- Es necesario reconstruir los módulos de node.

```
npm install
```


### Créditos:
- Tomado como metodo de estudio desde el canal de youtube de [Dev Ed](https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q)
- El título del video es [Build A Restful Api With Node.js Express & MongoDB | Rest Api Tutorial](https://www.youtube.com/watch?v=vjf774RKrLc)