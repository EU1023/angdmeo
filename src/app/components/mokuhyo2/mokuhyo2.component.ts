import { FaekData } from './../../@services/faekdata';
import { Router } from '@angular/router';
import { Component, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { NgClass } from '@angular/common';
import { HttpClientService } from '../../http-service/http-client.service';
@Component({
  selector: 'app-mokuhyo2',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatIconModule,
    MatPaginator,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule, NgClass,],
  templateUrl: './mokuhyo2.component.html',
  styleUrl: './mokuhyo2.component.scss'
})
export class Mokuhyo2Component {
  constructor(
    private router:Router,
    private faekData: FaekData,
    private http:HttpClientService
  ) { }
  //時間選擇器的變數
  fdata!: any;
  edata!: any;
  //列表用

  displayedColumns: string[] = ['select', 'id', 'name', 'state', 'start_time', 'end_time', 'GoTo'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  //打勾
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource.data = this.faekData.getArray();
  }

  //時間選擇器
  //開始時間的限制
  private readonly _currentYear1 = new Date().getFullYear();
  // readonly minDate1 = new Date();
  //結束時間的限制
  private readonly _currentYear2 = new Date().getFullYear();
  readonly minDate2 = new Date(this.fdata);

  //搜尋問卷名稱欄
  Questionnaire_n !: string;

  dS: Array<any> = [];
  //搜尋按鈕
  searchChecklist() {
    //搜尋時使用的時間格式
    let Sdata;
    if (this.fdata != null) {
      Sdata = this.fdata.getFullYear() + '/' + (this.fdata.getMonth() + 1) + '/0' + this.fdata.getDate();
    }
    this.dS = this.dataSource.data;
    // console.log(Sdata);
    console.log(this.dS);
    // let enddata = this.edata.getFullYear()+'/'+(this.edata.getMonth()+1) +'/'+ this.edata.getDate();

    let tidyData: PeriodicElement[] = [];
    if (!this.Questionnaire_n) {
      //開始時間
      for (let array of this.dS) {
        if (array.start_time.indexOf(Sdata) != -1) {
          console.log(array.start_time);

          tidyData.push(array);
        }
      }
      //結束時間
      // for (let array of ELEMENT_DATA){
      //   if (array.end_time.indexOf(this.edata)!=-1){
      //     tidyData.push(array);
      //   }
      // }
    }
    else {
      //名稱
      for (let array of this.dS) {
        if (array.name.indexOf(this.Questionnaire_n) != -1) {
          tidyData.push(array);
        }
      }
    }
    this.dataSource.data = tidyData;

  };

  userQuestionnaireList(id:number,name:string){

    this.router.navigate(['/moguhyo1/mokuhyo6']);
  }

  //刪除清單按鈕
  deleteChecklist() {
    this.selection.selected.forEach(s => console.log(s.name));
  };

  //勾選處
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}



//列表用
export interface PeriodicElement {
  id: number;
  name: string;
  state: string;
  start_time: string;
  end_time: string;
  GoTo: string;
}
