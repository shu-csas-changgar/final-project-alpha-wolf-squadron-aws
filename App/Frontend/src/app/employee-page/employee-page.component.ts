import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['../app.component.css'],
  providers: [EmployeeService]
})
export class EmployeePageComponent implements OnInit {

  employees: Employee[] = []
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

}
