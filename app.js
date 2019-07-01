const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();

// Middlewares
app.use(cors())
app.use(express.json())

// Importar Rutas
const postsRoute = require('./routes/posts');

// Usar las rutas
app.use('/posts', postsRoute);

// Conectar a la base de datos
mongoose.connect(
    process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('Conectado a la base de datos')
);

// Iniciar el servidor, para que escuche las peticiones
app.listen(3000)