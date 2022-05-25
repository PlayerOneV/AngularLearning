import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //Declaramos la dirección url en donde se ejecuta nuestro servidor API
  URL_API = "http://localhost:4000/api/employees"
  selectedEmployee: Employee = {
    name: '',
    office: '',
    position: '',
    salary: 0
  };
  employees: Employee[] = []; //En este array guardaremos los resultados de la consulta getEmployees

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);
  }

  createEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  updateEmployee(employee: Employee){
    return this.http.put(`${this.URL_API}/${employee._id}`, employee);
  }

  deleteEmploye(id:String|undefined){
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
