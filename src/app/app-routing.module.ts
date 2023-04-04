import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableoneComponent } from './block/tableone/tableone.component';
import { NavbarComponent } from './block/navbar/navbar.component';
import { TaskComponent } from './block/task/task.component';
import { FormsComponent } from './block/forms/forms.component';

const routes: Routes = [
  {path:'',redirectTo: '/app/table',pathMatch:'full'},
  {path:'app',component:NavbarComponent,children:[
      {path:'table',component:TableoneComponent},
      {path:'task',component:TaskComponent},
      {path:'forms',component:FormsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
