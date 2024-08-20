import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ICreateEmployee,
  IEditEmployee,
  IEmployee,
} from '../models/IEmployee.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly apiUrl = 'https://localhost:7147/api/Employees';

  constructor(private _http: HttpClient) {}

  getAllEmployees(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(this.apiUrl);
  }

  getEmployeeById(id: number | string): Observable<IEmployee> {
    return this._http.get<IEmployee>(`${this.apiUrl}/${id}`);
  }

  addEmployee(newEmployee: ICreateEmployee) {
    return this._http.post(this.apiUrl, newEmployee);
  }

  updateEmployee(updatedEmployee: IEditEmployee) {
    return this._http.post(
      `${this.apiUrl}/${updatedEmployee.id}`,
      updatedEmployee
    );
  }
}
