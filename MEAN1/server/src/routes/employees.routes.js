const { Router } = require('express');
const router = Router();
const employeesController = require("../controllers/employees.controller.js")
//Crearemos las rutas que utilizaremos para realizar el CRUD a la BD

router.get('/', (req, res) => res.send("bienvenido al home")); //Página principal del servidor
router.get('/api/employees', employeesController.readEmployees); //Obtenemos todos los empleados
router.post('/api/employees', employeesController.createEmployees); //Creamos un nuevo empleado
router.get('/api/employees/:id', employeesController.readEmployee); //Obtenemos un empleado especifico
router.put('/api/employees/:id', employeesController.updateEmployees); //Actualizamos un empleado
router.delete('/api/employees/:id', employeesController.deleteEmployees); //Eliminamos un empleado


module.exports = router;