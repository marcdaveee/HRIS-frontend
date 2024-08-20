import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { provideHttpClient } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { MatIcon } from '@angular/material/icon';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    LeaveRequestComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    MatSidenavModule,
    MatIcon,
  ],
  providers: [provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
