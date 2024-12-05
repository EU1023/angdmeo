import { QuestService } from './../../@services/quest.service';
import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataService } from './../../@services/data-service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientService } from '../../http-service/http-client.service';
@Component({
  selector: 'app-mokuhyo7',
  standalone: true,
  imports: [FormsModule,
            MatPaginatorModule,
            MatTableModule,
            MatPaginatorModule
  ],
  templateUrl: './mokuhyo7.component.html',
  styleUrl: './mokuhyo7.component.scss'
})
export class Mokuhyo7Component {
  constructor(
    private http: HttpClientService,
    private dataService: DataService,
    private router: Router
  ) { }


  ngOnInit() {
    // this.quizStartdate();

  }





  //儲存使用者問卷紀錄 陣列
  userDescription: any;

  quizStartdate() {
    // 尚未定義
    this.http.getApi('http://localhost:8080/quiz/feedback').subscribe(
      (res: any) => {
        // console.log(res);
        // if (res.StatusCode != 200) {
        //   alert(res.code+' '+ res.message);
        //   return
        // }
        // this.dataSource.data = res;
        // console.log(Array.isArray(res));

      });
  }

}
export interface PeriodicElement {
  id: number;
  name: string;
  state: string;
  start_time: string;
  end_time: string;
  GoTo: string;
}
