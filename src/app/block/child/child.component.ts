// import { Component } from '@angular/core';

import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() title!:string;
@Input() description!:string;
@Input() actionArray!:any[];
@Output() actionEmit=new EventEmitter<any>();

ngOnInit(){

}
onActionEmit(bharath :any){
console.log('onActionEmit:',bharath);
this.actionEmit.emit(bharath);
}

}
