import { Component,ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { HttpClientService } from '../../http-service/http-client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mokuhyo6',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './mokuhyo6.component.html',
  styleUrl: './mokuhyo6.component.scss'
})
export class Mokuhyo6Component {
  constructor(
    private http: HttpClientService,
    private router: Router
  ) { }


  //列表用
  displayedColumns: string[] = ['id', 'name', 'start_time', 'GoTo'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  userBrowseResults(id:number){

    this.router.navigate(['/moguhyo1/moguhyo8']);
  }




}
//列表用
export interface PeriodicElement {
  id: number;
  name: string;
  start_time:string;
  GoTo:string;
}

//列表用假資料
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', start_time: '2024/12/1', GoTo: ''},
  {id: 2, name: 'Helium', start_time: '2024/12/1', GoTo: ''},
  {id: 3, name: 'Lithium', start_time: '2024/12/1', GoTo: ''},
  {id: 4, name: 'Beryllium', start_time: '2024/12/1', GoTo: ''},
  {id: 5, name: 'Boron', start_time: '2024/12/1', GoTo: ''},
  {id: 6, name: 'Carbon', start_time: '2024/12/1', GoTo: ''},
  {id: 7, name: 'Nitrogen', start_time: '2024/12/1', GoTo: ''},
  {id: 8, name: 'Oxygen', start_time: '2024/12/1', GoTo: ''},
  {id: 9, name: 'Fluorine', start_time: '2024/12/1', GoTo: ''},
  {id: 10, name: 'Neon', start_time: '2024/12/1', GoTo: ''},
  {id: 11, name: 'Sodium', start_time: '2024/12/1', GoTo: ''},
];
