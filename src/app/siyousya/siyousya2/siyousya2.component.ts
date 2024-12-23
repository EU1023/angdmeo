import { QuestService } from './../../@services/quest.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientService } from '../../http-service/http-client.service';
import { ExampleService } from '../../@services/example-service';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-siyousya2',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,],
  templateUrl: './siyousya2.component.html',
  styleUrl: './siyousya2.component.scss'
})
export class Siyousya2Component {
  //form列表
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    mobilePhoneNumber: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl(''),
  })

  newQuestArray: Array<any> = [];
  radioData!: string;
  ngclassBoolean = false;
  userName!: string;
  userPhone!: string;
  userEmail!: string;
  userAge!: string;

  //儲存問卷
  quData: Array<any> = [];

  //標題 內容說明
  quizData: any;
  quizId:any;

  constructor(
    private quDataExampleService : ExampleService,
    private http: HttpClientService,
    private questService: QuestService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // 取得問卷清單key
    this.quizId = this.questService.questId;
    this.quizData = this.questService.questData;
    this.quizStartdate(this.quizId);

  }

  //多選M 單選Q 文字輸入T
  // 資料放入newQuestArray for產生列表格數
  tidyQuestArray() {
    for (let array of this.quData) {
      this.newQuestArray.push({ ...array, answer: '', radioAnswer: '' });
    }
    for (let newArray of this.quData) {
      let options = [];
      for (let option of newArray.options) {
        options.push({ ...option, boxBoolean: false });
      }
      newArray.options = options;
    }
  }

  gohomo(){
    this.router.navigate(['']);
  }

  //資料傳送至預覽頁 暫存
  goSiyousya3() {
    if (this.checkNeed()) {
      this.quDataExampleService.quData = {
        quizId:this.quizId,
        quizName: this.quizData.quizName, //title
        quizDes: this.quizData.quizDes, //ex
        userName: this.userName,
        userPhone: this.userPhone,
        userEmail: this.userEmail,
        userAge: this.userAge,
      };
      this.quDataExampleService.quesData = this.newQuestArray;

      this.router.navigate(['/siyousyaui/siyousya3']);
    };
  }
  //判斷題型和輸入狀況
  checkNeed(): boolean {
    if (!this.userName) {
      alert('false');
      return false;
    }

    for (let quest of this.newQuestArray) {
      if (quest.need) {
        //
        if (quest.type == 'multi') {
          let chenk = false;
          for (let option of quest.options) {
            if (option.boxBoolean) {
              chenk = true;
            }
          }

          if (!chenk) {
            alert('chenk false');
            return false;
          }
        } else if (quest.type == 'single') {
          if (!quest.radioAnswer) {
            alert('single');
            return false;
          }
        } else if (quest.type == 'text') {
          if (!quest.answer) {
            alert('text');
            return false;
          }
        }
      }
    }
    return true;
  }

  quizStartdate(quizId: number) {
    this.http.getApi('http://localhost:8080/quiz/getques?quizId=' + quizId).subscribe(
      (res: any) => {

        const quesList = res;

        // 放入 問題至quData
        quesList.forEach((item: {
          quizId: number;
          quesId: number;
          quesName: string;
          type: string;
          required: boolean;
          options: any;
        }) => {
          let optionsList;
          try {
            optionsList = JSON.parse(item.options);
          } catch (e) {
            console.error("Invalid JSON in options:", item.options, e);
            optionsList = null; // 或設定為預設值
          }
          this.quData.push({
            quesId: item.quesId,
            required: item.required,
            quesName: item.quesName,
            type: item.type,
            options: optionsList,
          })
        })
        console.log(this.quData);
        this.tidyQuestArray();
      });
  }


}
// quData = {
  //   title: '問卷題目位置',
  //   sData: '2024/11/07',
  //   eData: '2024/12/31',
  //   ex: '問卷內容說明內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容',
  //   quArray: [{
  //     quId: 1,
  //     need: true,
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
  //     need: true,
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
  //     need: false,
  //     quName: '請說明您的看法',
  //     type: 'T',
  //     options: []
  //   }]
  // }
