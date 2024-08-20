import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDepartment } from '../models/IDepartment.interface';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private readonly apiUrl = 'https://localhost:7147/api/Departments';

  constructor(private _http: HttpClient) {}

  getAllDepartments(): Observable<IDepartment[]> {
    return this._http.get<IDepartment[]>(this.apiUrl);
  }
}
