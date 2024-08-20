import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { DepartmentService } from '../../services/department.service';
import { IDepartment } from '../../models/IDepartment.interface';
import { ICreateEmployee } from '../../models/IEmployee.interface';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm!: FormGroup;
  departments: IDepartment[] = [];
  isFormSubmitted = false;

  constructor(
    private _employeeService: EmployeeService,
    private _departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    this.addEmployeeForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      department: new FormControl('', Validators.required),
    });

    this._departmentService.getAllDepartments().subscribe({
      next: (res) => {
        this.departments = res;
      },
    });
  }

  onSubmit() {
    this.isFormSubmitted = true;
    console.log(this.addEmployeeForm.value);
    if (this.addEmployeeForm.valid) {
      const newEmployee: ICreateEmployee = {
        firstname: this.addEmployeeForm.value.firstname,
        lastname: this.addEmployeeForm.value.lastname,
        departmentId: +this.addEmployeeForm.value.department,
      };
      console.log('New Employee:', newEmployee);
      this._employeeService.addEmployee(newEmployee).subscribe({
        next: (res) => {
          console.log(res);
          // Clear fields
          this.addEmployeeForm.reset();
          this.isFormSubmitted = false;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
