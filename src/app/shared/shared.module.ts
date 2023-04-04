import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule
  ],
  entryComponents: [
    SnackbarComponent
  ]
})
export class SharedModule { }
