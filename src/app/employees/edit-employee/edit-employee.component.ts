import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDepartment } from '../../models/IDepartment.interface';
import { EmployeeService } from '../../services/employee.service';
import { DepartmentService } from '../../services/department.service';
import { IEditEmployee, IEmployee } from '../../models/IEmployee.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AlertService } from '../../services/alert.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
})
export class EditEmployeeComponent {
  editEmployeeForm!: FormGroup;
  employeeToUpdate?: IEmployee;
  departments: IDepartment[] = [];
  isFormSubmitted = false;

  constructor(
    private _employeeService: EmployeeService,
    private _departmentService: DepartmentService,
    private _alertService: AlertService,
    private _dialogService: DialogService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getEmployeeToUpdate();

    this.editEmployeeForm = new FormGroup({
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

  getEmployeeToUpdate() {
    const employeeId = this._route.snapshot.params['id'];
    this._employeeService.getEmployeeById(employeeId).subscribe({
      next: (res) => {
        this.employeeToUpdate = res;
        this.editEmployeeForm.patchValue({
          firstname: this.employeeToUpdate.firstname,
          lastname: this.employeeToUpdate.lastname,
          department: this.employeeToUpdate.departmentId,
        });
      },
      error: (err) => {
        if (err.status === 404) {
          console.log('Not found', err);
          // redirect to not found page
        }
      },
    });
  }

  onRemove() {
    this._dialogService
      .openConfirmDialog('Are you sure you want to delete this employee?')
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          console.log('To be deleted');
          const employeeId = this._route.snapshot.params['id'];
          this._employeeService.deleteEmployeeById(employeeId).subscribe({
            next: () => {
              this._alertService.showSuccesfulAlert(
                'Employee was deleted successfully.'
              );
              this._router.navigate(['/employees']);
            },
            error: () => {
              this._alertService.showSuccesfulAlert(
                'Error occured. Please try again'
              );
            },
          });
        }
      });
  }

  onSubmit() {
    this.isFormSubmitted = true;
    console.log(this.editEmployeeForm.value);
    if (this.editEmployeeForm.valid) {
      const updatedEmployee: IEditEmployee = {
        id: this.employeeToUpdate?.id,
        firstname: this.editEmployeeForm.value.firstname,
        lastname: this.editEmployeeForm.value.lastname,
        departmentId: +this.editEmployeeForm.value.department,
      };
      console.log('Updated Employee:', updatedEmployee);

      this._employeeService.updateEmployee(updatedEmployee).subscribe({
        next: (res) => {
          console.log(res);
          this.editEmployeeForm.patchValue({
            firstname: res.firstname,
            lastname: res.lastname,
            department: res.departmentId,
          });
          this._alertService.showSuccesfulAlert('Updated Successfully');
          this.isFormSubmitted = false;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
