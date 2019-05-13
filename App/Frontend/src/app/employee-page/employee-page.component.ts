import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../models/employee';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [EmployeeService]
})
export class EmployeePageComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee;
  first_name: String;
  last_name: String;
  phone_number: String;
  work_phone_number: String;
  email: String;
  username: String;
  fk_address_id: any;
  fk_room_id: any;
  toggleUpdateButton:boolean = false;
  id: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService
    .getEmployee()
    .subscribe(employees => this.employees = employees);
  }

  addEmployee() {
    const newEmployee = {
        employee: this.name
    }
    this.EmployeeService.addEmployee(newEmployee).subscribe(Employee => {
      this.employees.push(Employee);
      this.EmployeeService
    .getEmployee()
    .subscribe(employees => this.employees = employees);
    });
}
updateEmployee() {
  var employees = this.employees;
  const newEmployee = {
    Employee: this.name
  }
  const data = {
    EmployeeChange: newEmployee,
    idSearch: this.id
  }
  this.EmployeeService.updateEmployee(data).subscribe(Employee => {
    for(var i = 0; i < employees.length; i++ ){
      if (employees[i].Employee_id == Employee.Employee_id){
        employees[i] = Employee;
      }
    }
    this.EmployeeService
    .getEmployee()
    .subscribe(employees => this.employees = employees);
    });
    this.toggleUpdateButton = false;
  }
  deleteEmployee(id: any) {
    var employees = this.employees;
  this.EmployeeService.deleteEmployee(id).subscribe(data =>{
    for(var i = 0; i < employees.length; i++){
      if(employees[i].Employee_id == id){
        employees.splice(i, 1);
      }
    }
  });
}

updateFillIn(Employee: Employee){
  this.name =Employee.Employee;
  this.id = Employee.Employee_id;
  this.toggleUpdateButton = true;
}

}
