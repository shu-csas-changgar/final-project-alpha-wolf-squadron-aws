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
  password: String;
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
      first_name: this.first_name,
      last_name: this.last_name,
      phone_number: this.phone_number,
      work_phone_number: this.work_phone_number,
      email: this.email,
      username: this.username,
      password: this.password,
      fk_address_id: this.fk_address_id,
      fk_room_id: this.fk_room_id
    }
    this.employeeService.addEmployee(newEmployee).subscribe(employee => {
      this.employees.push(employee);
      this.employeeService
    .getEmployee()
    .subscribe(employees => this.employees = employees);
    });
}
updateEmployee() {
  var employees = this.employees;
  const newEmployee = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone_number: this.phone_number,
      work_phone_number: this.work_phone_number,
      email: this.email,
      username: this.username,
      password: this.password,
      fk_address_id: this.fk_address_id,
      fk_room_id: this.fk_room_id
  }
  const data = {
    employeeChange: newEmployee,
    idSearch: this.id
  }
  this.employeeService.updateEmployee(data).subscribe(employee => {
    for(var i = 0; i < employees.length; i++ ){
      if (employees[i].employee_id == employee.employee_id){
        employees[i] = employee;
      }
    }
    this.employeeService
    .getEmployee()
    .subscribe(employees => this.employees = employees);
    });
    this.toggleUpdateButton = false;
  }
  deleteEmployee(id: any) {
    var employees = this.employees;
  this.employeeService.deleteEmployee(id).subscribe(data =>{
    for(var i = 0; i < employees.length; i++){
      if(employees[i].employee_id == id){
        employees.splice(i, 1);
      }
    }
  });
}

updateFillIn(employee: Employee){
  this.first_name = employee.first_name,
  this.last_name = employee.last_name,
  this.phone_number = employee.phone_number,
  this.work_phone_number = employee.work_phone_number,
  this.email = employee.email,
  this.username = employee.username,
  this.fk_address_id = employee.fk_address_id,
  this.fk_room_id = employee.fk_room_id
  this.id = employee.employee_id;
  this.toggleUpdateButton = true;
}

}
