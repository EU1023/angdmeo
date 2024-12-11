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
    private quesSiyousya: QuestService,
    private dataService: DataService,
    private router: Router
  ) { }

  newQuestArray: Array<any> = [];

  userFeedbackId: any;
  userFeedbackdata: any;

  quizName!: string;
  quizDes!: string;

  ngOnInit() {
    this.userFeedbackId = this.quesSiyousya.quizId;
    this.userFeedbackdata = this.quesSiyousya.questData;

    // console.log(this.userFeedbackId);
    // console.log(this.userFeedbackdata);

    this.quizStartdate(this.userFeedbackId, this.userFeedbackdata.email);
  }

  goSiyousya2() {
    this.quesSiyousya.quizId = this.userFeedbackId;
    this.router.navigate(['/moguhyo1/mokuhyo6']);
  }

  //儲存使用者問卷紀錄 陣列
  quData: Array<any> = [];

  quizStartdate(quizId: number, email: string) {
    // 尚未定義
    this.http.getApi('http://localhost:8080/quiz/getfeedbackQuizIdEmail?quizId=' + quizId + '&email=' + email).subscribe(
      (res: any) => {
        const quesList = res;
        // console.log(quesList);
        quesList.forEach((item: {
          quesId: number;
          quizName: string;
          description: string;
          quesName: string;
          type: string;
          answerStr: string;
        }) => {

          let optionsList;
          try {
            optionsList = JSON.parse(item.answerStr);
          } catch (e) {
            console.error("Invalid JSON in options:", item.answerStr, e);
            optionsList = null; // 或設定為預設值
          }

          this.quizName = item.quizName;
          this.quizDes = item.description;

          this.quData.push({
            quesId: item.quesId,
            quesName: item.quesName,
            type: item.type,
            answer: optionsList,
          })
        })
        console.log(this.quData);
        this.tidyQuestArray();
      }
    );
  }

  options: Array<any> = [];

  tidyQuestArray() {
    for (let i=0; i<this.quData.length;i++){
      if(this.quData[i].type=='multi'){
        for(let j=0; j<this.quData[i].answer.length;j++){
          this.options.push({
            type:this.quData[i].type,
            answer:this.quData[i].answer[j],
          });
        }
      }
    }
    console.log(this.options);
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
