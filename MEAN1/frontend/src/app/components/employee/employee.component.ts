import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (v) => this.employeeService.employees = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    }
    );
  }

  addEmployee(form: NgForm) {
    if (form.value._id) {
      this.employeeService.updateEmployee(form.value).subscribe({
        next: (res) => {
          console.log(res)
          this.getEmployees();
          form.reset();
        },
        error: (err) => console.error(err)
      })
    } else {
      this.employeeService.createEmployee(form.value).subscribe({
        next: (res) => {
          console.log(res)
          this.getEmployees();
          form.reset();
        },
        error: (err) => console.error(err)
      })
    }
  }

  updateEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(id: String | undefined) {
    const res = confirm("Are you sure you want to delete it?");
    if (res) {
      this.employeeService.deleteEmploye(id).subscribe({
        next: (res) => {
          console.log(res)
          this.getEmployees();
        },
        error: (err) => console.error(err)
      })
    }
  }
}
