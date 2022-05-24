const express = require('express');
const morgan = require("morgan");

const app = express(); //Asignamos express

app.set('port', process.env.PORT || 4000); //Declaramos nuestro puerto

app.use(morgan('dev')); //Asignamos morgan para probar
app.use(express.json()); //Indicamos que utilizaremos json
app.use(express.urlencoded({ extended: false })); //Esto lo utilizaremos cuando recivamos datos de formularios

app.use(require("./routes/employees.routes")) //Importamos el modulo con todas las rutas

module.exports = app; //Exportamos la app