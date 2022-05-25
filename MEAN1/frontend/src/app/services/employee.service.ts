import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //Declaramos la dirección url en donde se ejecuta nuestro servidor API
  URL_API = "http://localhost:4000/api/employees"

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get(this.URL_API);
  }
}
