//伺服器傳變數
import { FaekData } from './../../@services/faekdata';
//
import { Managedata } from '../../@services/managedata';
import { DataService } from './../../@services/data-service';
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
import { HttpClientService } from '../../http-service/http-client.service';
import { QuestService } from '../../@services/quest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-siyousya1',
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
    MatInputModule],
  templateUrl: './siyousya1.component.html',
  styleUrl: './siyousya1.component.scss'
})
export class Siyousya1Component {
  constructor(
    private http: HttpClientService,
    private quesSiyousya: QuestService,
    private dataService: DataService,
    private router: Router,
    private mangeData: Managedata
  ) { }
  //時間選擇器的變數
  fdata!: any;
  edata!: any;

  //列表用
  displayedColumns: string[] = ['id', 'name', 'status', 'start_date', 'end_date', 'GoTo'];
  dataSource = new MatTableDataSource<PeriodicElement>();
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

  siyosya2(id: number, name: string, description: string) {
    this.quesSiyousya.questId = id;
    this.quesSiyousya.questData = ({
      quizName: name,
      quizDes: description,
    });

    if (this.mangeData.manage == false) {
      this.router.navigate(['/siyousyaui/siyousya2']);
    }
    if (this.mangeData.manage == true) {
      this.router.navigate(['/moguhyo1/siyousya2']);
    }

  };

  siyosya4(id: number) {
    this.quesSiyousya.questId = id;

    if (this.mangeData.manage == false) {
      this.router.navigate(['/siyousyaui/siyousya4']);
    }
    if (this.mangeData.manage == true) {
      this.router.navigate(['/moguhyo1/siyousya4']);
    }
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
        console.log(array);
        //====發生錯誤=====
        if (array != -1) {
          console.log(array.start_time);
          tidyData.push(array);

        }
      }
    } else if (!this.fdata) {
      //結束時間
      for (let array of this.dS) {
        if (array.end_time.indexOf(this.edata) != -1) {
          tidyData.push(array);
        }
      }
    } else {
      //名稱
      for (let array of this.dS) {
        if (array.name.indexOf(this.Questionnaire_n) != -1) {
          tidyData.push(array);
        }
      }
    }
    this.dataSource.data = tidyData;
  };
}



export interface quiz_list {
  id: number;
  name: String;
  description: String;
  start_date: Date;
  end_date: Date;
  published: boolean;
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
