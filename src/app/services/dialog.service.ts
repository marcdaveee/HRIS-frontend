import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/dialogs/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private _dialog: MatDialog) {}

  openConfirmDialog(msg: string) {
    return this._dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: {
        msg: msg,
      },
      disableClose: true,
    });
  }
}
