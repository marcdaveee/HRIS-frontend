import { IDepartment } from './IDepartment.interface';

export interface IEmployee {
  id?: number;
  firstname: string;
  lastname: string;
  departmentId: number;
  department?: IDepartment;
}

export interface ICreateEmployee {
  id?: number;
  firstname: string;
  lastname: string;
  departmentId: number;
}

export interface IEditEmployee {
  id?: number;
  firstname: string;
  lastname: string;
  departmentId: number;
}
