import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  // image=[
  //   {imgNAME:'',VALUE:},{IMGA}
  // ]
  img="1";
  onclick(i: string){
    this.img=i;
  }
}
