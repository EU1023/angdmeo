import { QuestService } from './../../@services/quest.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';


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

  constructor(
    private questService: QuestService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (!this.questService.questData) {
      this.tidyQuestArray();
    } else {
      this.userName = this.questService.questData.userName;
      this.userPhone = this.questService.questData.userPhone;
      this.userEmail = this.questService.questData.userEmail;
      this.userAge = this.questService.questData.userAge;
      this.newQuestArray = this.questService.questData.questArray;
    }
  }

  //多選M 單選Q 文字輸入T
  quData = {
    title: '問卷題目位置',
    sData: '2024/11/07',
    eData: '2024/12/31',
    ex: '問卷內容說明內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容',
    quArray: [{
      quId: 1,
      need: true,
      quName: '請選擇喜歡的食物(多選)',
      type: 'M',
      options: [
        { optionName: '拉麵', code: 'A' },
        { optionName: '披薩', code: 'B' },
        { optionName: '肉燥飯', code: 'C' },
      ]
    },
    {
      quId: 2,
      need: true,
      quName: '請選擇最愛的國家',
      type: 'Q',
      options: [
        { optionName: '台灣', code: 'A' },
        { optionName: '日本', code: 'B' },
        { optionName: '美國', code: 'C' },
      ]
    },
    {
      quId: 3,
      need: false,
      quName: '請說明您的看法',
      type: 'T',
      options: []
    }]
  }
  //資料放入newQuestArray for產生列表格數
  tidyQuestArray() {
    for (let array of this.quData.quArray) {
      this.newQuestArray.push({ ...array, answer: '', radioAnswer: '' });
    }

    for (let newArray of this.newQuestArray) {
      let options = [];
      for (let option of newArray.options) {
        options.push({ ...option, boxBoolean: false });
      }
      newArray.options = options;
    }
  }
  //資料傳送伺服器 暫存
  goMokuhyo7() {
    // if (this.checkNeed()) {
    //   this.questService.questData = {
    //     title: this.quData.title,
    //     sDate: this.quData.sData,
    //     eDate: this.quData.eData,
    //     ex: this.quData.ex,
    //     userName: this.userName,
    //     userPhone: this.userPhone,
    //     userEmail: this.userEmail,
    //     userAge: this.userAge,
    //     questArray: this.newQuestArray,
    //   }

    // };
    this.router.navigate(['/moguhyo1']);
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
}
