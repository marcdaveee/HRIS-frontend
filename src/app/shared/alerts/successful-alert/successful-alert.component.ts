import { Component, Inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-successful-alert',
  templateUrl: './successful-alert.component.html',
  styleUrl: './successful-alert.component.css',
})
export class SuccessfulAlertComponent {
  constructor(
    public _snackbarRef: MatSnackBarRef<SuccessfulAlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
}
