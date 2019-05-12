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

  employees: Employee[] = []
  employeeForm = new FormGroup({
    first_name: new FormControl,
    last_name: new FormControl,
    phone_number: new FormControl,
    work_number: new FormControl,
    email: new FormControl,
    username:  new FormControl,
    address_id: new FormControl,
    room_id:  new FormControl
  })
  constructor(private employeesService: EmployeeService) { }

  ngOnInit() {
    this.fetchEmployee();
  }

  fetchEmployee() {
    this.employeesService
    .getEmployee()
    .subscribe((data: Employee[]) => {
      this.employees = data;
    });
  }

  createSubmit(){
    console.log(this.employeeForm.value)
  }

}
