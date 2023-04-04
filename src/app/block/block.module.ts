import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableoneComponent } from './tableone/tableone.component';
import { MaterialModule } from '../material/material.module';
import { ChildComponent } from './child/child.component';
import { TaskComponent } from './task/task.component';
import { FormsComponent } from './forms/forms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';




@NgModule({
  declarations: [
    TableoneComponent,
    ChildComponent,
    TaskComponent,
    FormsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterOutlet,
    RouterModule
  ],
  exports: [
    TableoneComponent,
    ChildComponent,
    TaskComponent,
    FormsComponent,
    NavbarComponent
  ]
})
export class BlockModule { }
