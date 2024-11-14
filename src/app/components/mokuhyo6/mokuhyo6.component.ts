import { Component,ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-mokuhyo6',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './mokuhyo6.component.html',
  styleUrl: './mokuhyo6.component.scss'
})
export class Mokuhyo6Component {
  //列表用
  displayedColumns: string[] = ['id', 'name', 'Fill_in_time', 'Answer_content'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
//列表用
export interface PeriodicElement {
  id: number;
  name: string;
  Fill_in_time:string;
  Answer_content:string;
}

//列表用假資料
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', Fill_in_time: '2024/12/1', Answer_content: ''},
  {id: 2, name: 'Helium', Fill_in_time: '2024/12/1', Answer_content: ''},
  {id: 3, name: 'Lithium', Fill_in_time: '2024/12/1', Answer_content: ''},
  {id: 4, name: 'Beryllium', Fill_in_time: '2024/12/1', Answer_content: ''},
  {id: 5, name: 'Boron', Fill_in_time: '2024/12/1', Answer_content: ''},
  {id: 6, name: 'Carbon', Fill_in_time: '2024/12/1', Answer_content: ''},
  {id: 7, name: 'Nitrogen', Fill_in_time: '2024/12/1', Answer_content: ''},
  {id: 8, name: 'Oxygen', Fill_in_time: '2024/12/1', Answer_content: ''},
  {id: 9, name: 'Fluorine', Fill_in_time: '2024/12/1', Answer_content: ''},
  {id: 10, name: 'Neon', Fill_in_time: '2024/12/1', Answer_content: ''},
  {id: 11, name: 'Sodium', Fill_in_time: '2024/12/1', Answer_content: ''},
];
