import { Router } from '@angular/router';
import { Component, ViewChild, Input, ChangeDetectionStrategy, computed, signal } from '@angular/core';
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
import { QuestService } from '../../@services/quest.service';
import { DataService } from '../../@services/data-service';
import { } from '@angular/core';
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
    MatInputModule,
    NgClass],
  templateUrl: './mokuhyo2.component.html',
  styleUrl: './mokuhyo2.component.scss'
})
export class Mokuhyo2Component {
  constructor(
    private router: Router,
    private quesSiyousya2: QuestService,
    private dataService: DataService,
    private http: HttpClientService
  ) { }
  //時間選擇器的變數
  fdata!: any;
  edata!: any;
  //列表用

  displayedColumns: string[] = ['select', 'id', 'name', 'status', 'start_date', 'end_date', 'GoTo'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  //打勾
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //當前時間(年月日)
  date!: any;
  ngOnInit() {
    this.date = this.dataService.changeDateFormat(new Date());
    this.quizStartdate();
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
    let enddata;
    Sdata = this.dataService.changeDateFormat2(this.fdata);
    enddata = this.dataService.changeDateFormat2(this.edata);

    this.dS = this.dataSource.data;
    console.log(this.dS);

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

  userQuestionnaireList(id: number) {
    this.quesSiyousya2.quizId = id;
    this.router.navigate(['/moguhyo1/mokuhyo6']);
  }

  //刪除清單按鈕
  deleteChecklist() {
    const quiz_id_list = this.dataSource.data
      .filter(row => this.selection.isSelected(row))
      // map 遍歷將 quiz id 取出
      .map(item => item.id);
    const deletreq = { quizIdList: quiz_id_list };

    console.log(deletreq);

    this.http.postApi('http://localhost:8080/quiz/delete', deletreq).subscribe(
      (res: any) => {
        if (res.StatusCode != 200) {
          console.log(res);
          return
        }
      });

      // 前端濾除被選取的資料列
      this.dataSource.data = this.dataSource.data.filter(row => !this.selection.isSelected(row));
      // 清除選取狀態
      this.selection.clear();
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




  //依時間賦予狀態
  getStatus(item: PeriodicElement) {
    const nowDate = this.date;
    const startDate = this.dataService.changeDateFormat(new Date(item.start_date));
    const endDate = this.dataService.changeDateFormat(new Date(item.end_date));
    const published = new Boolean(item.published);
    if (published == false) {
      return '未發布';
    }
    if (published == true) {
      if (nowDate < startDate) {
        return '尚未開始';
      }
      if (nowDate > endDate) {
        return '已結束';
      }
      if (nowDate >= startDate && this.date <= endDate) {
        return '進行中';
      }
    }
    return '';
  }

  //儲存問卷名稱 說明內容陣列
  quizNameDescription: any;

  quizStartdate() {
    this.http.getApi('http://localhost:8080/quiz/getquiz').subscribe(
      (res: any) => {
        // console.log(res);
        // if (res.StatusCode != 200) {
        //   alert(res.code+' '+ res.message);
        //   return
        // }
        // this.dataSource.data = res;
        // console.log(Array.isArray(res));
        this.dataSource.data = res.map((item: PeriodicElement) => {
          item.status = this.getStatus(item);
          return item;
        });
      });
  }
}



//列表用
export interface PeriodicElement {
  id: number;
  name: string;
  description: String;
  status?: String;
  start_date: string;
  end_date: string;
  published: boolean;
  GoTo: string;
}
