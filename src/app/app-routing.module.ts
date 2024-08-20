import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'new-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'leave-request', component: LeaveRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
