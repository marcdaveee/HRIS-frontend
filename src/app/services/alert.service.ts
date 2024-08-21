import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessfulAlertComponent } from '../shared/alerts/successful-alert/successful-alert.component';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private _snackBar: MatSnackBar) {}

  showSuccesfulAlert(msg: string) {
    return this._snackBar.openFromComponent(SuccessfulAlertComponent, {
      // duration: 5000,
      panelClass: 'success-alert',
      data: {
        msg: msg,
      },
    });
  }
}
