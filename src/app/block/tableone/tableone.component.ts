// import { Component } from '@angular/core';

import { AfterViewInit, Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-tableone',
  templateUrl: './tableone.component.html',
  styleUrls: ['./tableone.component.scss']
})

export class TableoneComponent implements AfterViewInit, OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'Yes' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'Yes' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Yes' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Yes' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'Yes' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'Yes' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'No' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'Yes' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'No' },
    { position: 10,name: 'Neon', weight: 20.1797, symbol: 'No' },
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'Action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('delete') delete!: TemplateRef <any> ;

  titles = "Chemical Elements";
  descriptions = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
  actionArrays = [{ label: 'active', value: 'Yes' }, { label: 'In-active', value: 'No' }]

  constructor(private opendialogue: MatDialog){}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEmit(event: any) {
    console.log('Parent', event);
    const filterValue = this.ELEMENT_DATA.filter(item => item.symbol === event.value);
    this.dataSource = new MatTableDataSource<any>(filterValue);
    this.dataSource.paginator = this.paginator;
  }

  onDelete(element: any){
    console.log('Event: ', element);
    const dialogref= this.opendialogue.open(this.delete,{
      autoFocus: false,
      width: '400px'
    });
    dialogref.afterClosed().subscribe(response =>{
      console.log('response: ',response);
      if(response){
        const index =this.ELEMENT_DATA.findIndex(x=> x.position===element.position);
        if(index!=-1){
          this.ELEMENT_DATA.splice(index,1);
          this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
        }
      }
    });
  }
}

