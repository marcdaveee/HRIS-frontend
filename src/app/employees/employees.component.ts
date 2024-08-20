import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from '../models/IEmployee.interface';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  employees: IEmployee[] = [];
  isContentLoading = true;
  errorMessage = '';

  constructor(private _employeeService: EmployeeService) {
    this._employeeService.getAllEmployees().subscribe({
      next: (employees) => {
        console.log(employees);
        this.employees = employees;
        this.isContentLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to Load Data';
        this.isContentLoading = false;
      },
    });
  }
}
