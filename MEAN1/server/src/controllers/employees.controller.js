const employeesController = {}
const Employee = require('../models/employee');

//En el controlador de los empleados estan las funciones que permiten realizar el CRUD

//Función que crea un nuevo empleado
employeesController.createEmployees = async (req, res) => {
    //res.send("Creando un empleado");
    //console.log(req.body); con req.body recuperamos información json
    const newEmployee = new Employee(req.body); //Recuperamos el json que se envia a la url 

    await newEmployee.save(); //Guardamos el nuevo registro

    res.send({ message: "Employee Created." });
}

//Función que obtiene todos los empleados
employeesController.readEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

//Función que obtiene un empleado
employeesController.readEmployee = async (req, res) => {
    const id = req.params.id; //Obtenemos el id a traves de la url
    const employee = await Employee.findOne({ _id: id });
    //Employee.findById(id);
    res.json(employee);
}

//Función que actualiza un empleado
employeesController.updateEmployees = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Employee updated" });
}

//Función que elimina un empleado
employeesController.deleteEmployees = async (req, res) => {
    const id = req.params.id;
    await Employee.findByIdAndDelete(id);
    res.json({ message: "Empleado eliminado correctamente" });
}

module.exports = employeesController;