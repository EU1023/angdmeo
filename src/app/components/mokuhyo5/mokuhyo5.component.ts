import { StatusCode } from './../../component1/component1.component';
import { QuestService } from './../../@services/quest.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { initialDataService } from '../../@services/initial-data-service';
import { HttpClientService } from '../../http-service/http-client.service';
@Component({
  selector: 'app-mokuhyo5',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule],
  templateUrl: './mokuhyo5.component.html',
  styleUrl: './mokuhyo5.component.scss'
})
export class Mokuhyo5Component {

  newQuestArray: Array<any> = [];
  radioData!: string;
  ngclassBoolean = false;
  userName!: string;
  userPhone!: string;
  userEmail!: string;
  userAge!: string;

  quiz!: any;
  ques!: any;
  initialData!: any;
  constructor(
    private http: HttpClientService,
    private initialdataService: initialDataService,
    private questService: QuestService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.quiz = this.initialdataService.quiz;
    this.ques = this.initialdataService.ques;
    this.initialdataService.qaNew();
    this.initialData = this.initialdataService.ques;
    console.log(this.initialdataService.quiz);
    console.log(this.initialdataService.ques);
    this.questService.questData='';
    console.log(this.ques.length);
    //?
    if (!this.questService.questData) {
      this.tidyQuestArray();
    }
  }

  //多選M 單選Q 文字輸入T


  // quData = {
  //   title: '問卷題目位置',
  //   sData: '2024/11/07',
  //   eData: '2024/12/31',
  //   ex: '問卷內容說明內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容',
  //   quArray: [{
  //     quId: 1,
  //     must: true,
  //     quName: '請選擇喜歡的食物(多選)',
  //     type: 'M',
  //     options: [
  //       { optionName: '拉麵', code: 'A' },
  //       { optionName: '披薩', code: 'B' },
  //       { optionName: '肉燥飯', code: 'C' },
  //     ]
  //   },
  //   {
  //     quId: 2,
  //     must: true,
  //     quName: '請選擇最愛的國家',
  //     type: 'Q',
  //     options: [
  //       { optionName: '台灣', code: 'A' },
  //       { optionName: '日本', code: 'B' },
  //       { optionName: '美國', code: 'C' },
  //     ]
  //   },
  //   {
  //     quId: 3,
  //     must: false,
  //     quName: '請說明您的看法',
  //     type: 'T',
  //     options: []
  //   }]
  // }


  //資料放入newQuestArray for產生列表格數
  tidyQuestArray() {
    for (let array of this.initialData) {
      this.newQuestArray.push({ ...array, answer: '', radioAnswer: '' });
      // console.log(this.newQuestArray);
    }

    for (let newArray of this.newQuestArray) {
      let options = [];
      for (let option of newArray.quest) {
        options.push({ ...option, boxBoolean: false });
      }
      newArray.options = options;
      // console.log(newArray.options);
    }
  }

  // 取消
  Cancel(){
    this.initialdataService.quiz='';
    this.initialdataService.ques='';
    this.router.navigate(['/moguhyo1']);
  }

  goMokuhyo4() {
    this.router.navigate(['/moguhyo1/mokuhyo4']);
  }

  //判斷題型和輸入狀況
  checkNeed(): boolean {
    if (this.userName || !this.userPhone) {
      alert();
      return false;
    }

    for (let quest of this.newQuestArray) {
      if (quest.need) {
        //
        if (quest.type == 'M') {
          let chenk = false;
          for (let option of quest.options) {
            if (option.boxBoolean) {
              chenk = true;
            }
          }

          if (!chenk) {
            alert();
            return false;
          }
        } else if (quest.type == 'Q') {
          if (!quest.radioAnswer) {
            alert();
            return false;
          }
        } else if (quest.type == 'T') {
          if (!quest.answer) {
            alert();
            return false;
          }
        }
      }
    }
    return true;
  }
  // 更新問卷
  updateQues(){
    let quesList: {}[] = [];
    console.log('for前');
    for (let i = 0; i < this.ques.length; i++) {
      let res = {
        quizId: this.quiz.id,
        quesId: this.ques[i].ques_id,
        quesName: this.ques[i].ques_name,
        type: this.ques[i].type,
        required: this.ques[i].required,
        options: JSON.stringify(this.ques[i].quest)
      }
      quesList = [...quesList, res];
    };

    console.log(this.quiz.id);
    console.log('routerData前');
    let routerData = {
      id: this.quiz.id,
      name: this.quiz.name,
      description: this.quiz.description,
      start_date: this.quiz.start_date,
      end_date: this.quiz.end_date,
      published: false,
      ques_list: quesList,
    }
    console.log(routerData);
    console.log('postapi前');
    this.http.postApi('http://localhost:8080/quiz/update', routerData).subscribe((res: any) => {
      console.log(res);
      if (res.StatusCode != 200) {
        alert(res.code + ' ' + res.message);
        return
      }
      alert('回傳成功，請做確認');
    })
    this.initialdataService.ques=[];
    this.router.navigate(['/moguhyo1']);
  }


  // 僅儲存
  juststoreService() {
    let quesList: {}[] = [];
    console.log('for前');
    for (let i = 0; i < this.ques.length; i++) {
      let res = {
        quiz_id: 0,
        quesId: this.ques[i].ques_id,
        quesName: this.ques[i].ques_name,
        type: this.ques[i].type,
        required: this.ques[i].required,
        options: JSON.stringify(this.ques[i].quest)
      }
      quesList = [...quesList, res];
    };

    console.log(quesList);
    console.log('routerData前');
    let routerData = {
      id: 0,
      name: this.quiz.name,
      description: this.quiz.description,
      start_date: this.quiz.start_date,
      end_date: this.quiz.end_date,
      published: false,
      ques_list: quesList,
    }
    console.log(routerData);
    console.log('postapi前');
    this.http.postApi('http://localhost:8080/quiz/create', routerData).subscribe((res: any) => {
      console.log(res);
      if (res.StatusCode != 200) {
        alert(res.code + ' ' + res.message);
        return
      }
      alert('回傳成功，請做確認');
    })
    this.router.navigate(['/moguhyo1']);
  }
  // 儲存並發布
  storeService() {
    let quesList: {}[] = [];
    console.log('for前');
    for (let i = 0; i < this.ques.length; i++) {
      let res = {
        quiz_id: 0,
        quesId: this.ques[i].ques_id,
        quesName: this.ques[i].ques_name,
        type: this.ques[i].type,
        required: this.ques[i].required,
        options: JSON.stringify(this.ques[i].quest)
      }
      quesList = [...quesList, res];
    };

    console.log(quesList);
    console.log('routerData前');
    let routerData = {
      id: 0,
      name: this.quiz.name,
      description: this.quiz.description,
      start_date: this.quiz.start_date,
      end_date: this.quiz.end_date,
      published: this.quiz.published,
      ques_list: quesList,
    }
    console.log(routerData);
    console.log('postapi前');
    this.http.postApi('http://localhost:8080/quiz/create', routerData).subscribe((res: any) => {
      console.log(res);
      if (res.StatusCode != 200) {
        alert(res.code + ' ' + res.message);
        return
      }
      alert('回傳成功，請做確認');
    })
    this.router.navigate(['/moguhyo1']);
  }
}
