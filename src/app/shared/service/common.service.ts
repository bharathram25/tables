import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../component/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackbar: MatSnackBar) { }

  snack(msg: any, action: any, icon: any) {
    this.snackbar.openFromComponent(SnackbarComponent, {
      data: {
        content: msg,
        icons: icon
      },
      duration:3000,
      panelClass: action
    });
  }
}
