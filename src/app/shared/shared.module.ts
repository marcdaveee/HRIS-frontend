import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { SuccessfulAlertComponent } from './alerts/successful-alert/successful-alert.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SuccessfulAlertComponent, ConfirmationDialogComponent],
  imports: [MatSnackBarModule, MatButtonModule, MatDialogModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
