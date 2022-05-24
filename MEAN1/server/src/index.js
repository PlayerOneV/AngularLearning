require('./database');
const app = require("./app");

app.listen(app.get('port')); // Importamos e iniciamos el servidor que ya contiene el puerto y todas la rutas
console.log(`Servidor en puerto ${app.get('port')}`);

