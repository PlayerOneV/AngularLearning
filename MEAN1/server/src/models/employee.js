const { Schema, model } = require('mongoose');

//Creamos la estructura de campos/información que tendran los empleados
const employeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true },
}, {
    timestamps: true,
    versionKey: false
});

//Asignamos nuestro esquema de empleado al modelo que tendra el nombre Employee
module.exports = model('Employee', employeeSchema); //Exportamos el modelo que nos permite hacer consultas