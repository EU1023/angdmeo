import { initialDataService } from './../../@services/initial-data-service';
import { NgClass } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ChangeDetectionStrategy, Component, computed, signal, ViewChild } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SelectionModel } from '@angular/cdk/collections';
import { QuestService } from '../../@services/quest.service';
import { HttpClientService } from '../../http-service/http-client.service';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';
@Component({
  selector: 'app-mokuhyo4',
  standalone: true,
  imports: [MatSelectModule, MatInputModule,
    MatFormFieldModule, FormsModule,
    MatButtonModule, MatDividerModule,
    MatIconModule, MatCheckboxModule,
    NgClass, MatTableModule
  ],
  templateUrl: './mokuhyo4.component.html',
  styleUrl: './mokuhyo4.component.scss'
})
export class Mokuhyo4Component {
  constructor(
    private router: Router,
    private initialdataService: initialDataService,
    private quesSiyousya: QuestService,
    private http: HttpClientService,
  ) { };
  //問題編號
  ques_id: number = 0;
  //問題名稱
  ques_name !: string;
  //問題類型
  type!: string;
  //必填
  required: boolean = false;

  editSure = false;


  //輸入問卷數陣列
  input_Questionnaire_only: Array<any> = [];

  //關閉輸入功能選項布林值
  input_cloose: boolean = false;
  //新增完成問題陣列表
  input_Questionnaire_Array: Array<any> = [];
  quest: Array<any> = [];
  //增加選項
  qa_A_id = 1;

  qQQ: boolean = false;

  ngOnInit() {
    if (this.initialdataService.quizId != null) {
      this.editAgain(this.quesSiyousya.questData.id);
    };
    this.dataSource.data = this.initialdataService.ques;
  };



  //Q單選 M複選 T文字
  generateQuestionsQuestionnaire() {
    if (this.ques_name == null || this.type == null) {
      alert('請在題目或選擇題型輸入內容');
      return;
    } else {
      this.input_Questionnaire_only.push({
        ques_id: this.ques_id,
        type: this.type,
        name: this.ques_name,
        required: this.required,
        // quest: [],
      });
    }

    if (this.type == "single" || this.type == "multi") {
      for (let i = 0; i < 2; i++) {
        this.iPuQuOnPush();
        this.qa_A_id++;
        this.qQQ = true;
        this.input_cloose = true;
      }
    }
    if (this.type == "text") {
      this.qQQ = true;
      this.input_cloose = true;
    }
    // this.iPuQuOnPush();
    console.log(this.quest);
  }

  addQA() {
    this.iPuQuOnPush();

    this.qa_A_id++;
    this.input_cloose = true;
    console.log(this.quest);
  }

  //加問題格數方法
  iPuQuOnPush() {
    this.quest.push({
      optionNumber: this.qa_A_id,
      option: '',
    });
  }

  //刪除選項
  deleteQA(index: number) {
    // console.log(index);
    // console.log(this.input_Questionnaire_only[this.ques_id].quest);
    this.quest.splice(index, 1);
  }
  //
  qData: Array<any> = [];

  addNewList() {
    let type!: string;

    if (this.type == 'text') {
      type = 'text';
    } else if (this.type == 'multi') {
      type = 'multi';
    } else if (this.type == 'single') {
      type = 'single';
    };

    this.ques_id++;

    this.input_Questionnaire_Array.push({
      ques_id: this.ques_id,
      ques_name: this.ques_name,
      type: type,
      required: this.required,
      edit: '',
      quest: this.quest
    })
    //清空陣列
    this.input_Questionnaire_only = [];
    this.quest = [];

    this.qa_A_id = 1;
    this.input_cloose = false;
    this.qQQ = false;

    //放入inputQarray的值進清單
    this.dataSource.data = this.input_Questionnaire_Array;

    //清空 輸入格內容
    //問題名稱
    this.ques_name = '';
    //問題類型
    this.type = '';
    //必填
    this.required = false;
  }

  quesId!: number;
  //編輯
  editingOptions(element: any) {
    this.quest = [];
    this.input_cloose = false;
    this.qQQ = true;
    this.editSure = true;

    this.ques_id = element.ques_id;
    this.ques_name = element.ques_name;
    this.required = element.required;

    if (element.type == 'text') {
      this.type = 'text';
    } else if (element.type == 'multi') {
      this.type = 'multi';
    } else if (element.type == 'single') {
      this.type = 'single';
    };

    for (let quest of element.quest) {
      this.quest.push(quest);
    };
  }

  // 編輯後資料傳回列表
  ConfirmEdit() {
    // 放入原位置列表清單中
    let type!: string;

    if (this.type == 'text') {
      type = 'text';
    } else if (this.type == 'multi') {
      type = 'multi';
    } else if (this.type == 'single') {
      type = 'single';
    };

    this.input_Questionnaire_Array[this.ques_id - 1] = ({
      ques_id: this.ques_id,
      ques_name: this.ques_name,
      type: type,
      required: this.required,
      edit: '',
      quest: this.quest
    });

    //放入inputQarray的值進清單
    this.dataSource.data = this.input_Questionnaire_Array;

    //清空陣列
    this.input_Questionnaire_only = [];
    this.quest = [];

    this.qa_A_id = 1;
    this.input_cloose = false;
    this.qQQ = false;
    this.editSure = false;

    //清空 輸入格內容
    //問題名稱
    this.ques_name = '';
    //問題類型
    this.type = '';
    //必填
    this.required = false;
  }


  //列表
  displayedColumns: string[] = ['select', 'ques_name', 'type', 'required', 'edit'];
  dataSource = new MatTableDataSource<addNewQuestionnaireForm>(this.input_Questionnaire_Array);
  selection = new SelectionModel<addNewQuestionnaireForm>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  //刪除列表
  deletedata() {
    // 濾除被選取的資料列
    this.dataSource.data = this.dataSource.data.filter(row => !this.selection.isSelected(row));
    // this.selection.selected=this.selection.selected.filter(s =>!this.input_Questionnaire_Array.isSelected(row));
    this.input_Questionnaire_Array = this.dataSource.data = this.dataSource.data;
    this.selection.clear();
  }

  // 問卷再編輯
  editAgain(quizId: number) {
    this.http.getApi('http://localhost:8080/quiz/getques?quizId=' + quizId).subscribe(
      (res: any) => {
        const quesList = res;
        console.log(quesList);
        quesList.forEach((item: {
          quesId: number,
          quesName: string,
          type: string,
          required: boolean,
          edit: '',
          options: any,
        }) => {
          let optionsList;
          try {
            optionsList = JSON.parse(item.options);
          } catch (e) {
            console.error("Invalid JSON in options:", item.options, e);
            optionsList = null; // 或設定為預設值
          }

          this.input_Questionnaire_Array.push({
            ques_id: item.quesId,
            ques_name: item.quesName,
            type: item.type,
            required: item.required,
            edit: '',
            quest: optionsList,
          })
        })
        this.dataSource.data = this.input_Questionnaire_Array;
      });
  }






  //
  goMokuhyo3() {
    this.router.navigate(['/moguhyo1/mokuhyo3']);
  }
  goMokuhyo5() {
    //判斷空問卷
    if (this.dataSource.data.length == 0) {
      alert('請新增問卷問題');
      return;
    } else {
      if (this.input_Questionnaire_Array.length != 0) {
        this.initialdataService.ques = this.input_Questionnaire_Array;
      }
      this.dataSource.data = [];
      this.input_Questionnaire_Array = [];
      this.router.navigate(['/moguhyo1/mokuhyo5']);
    };
  }
}

export interface addNewQuestionnaireForm {
  ques_name: string;
  type: string;
  required: boolean;
  edit: string;
}

export interface QuestionnaireForm {
  ques_id: number;
  ques_name: string;
  type: string;
  required: boolean;
  edit: string;
  quest: any;
}

