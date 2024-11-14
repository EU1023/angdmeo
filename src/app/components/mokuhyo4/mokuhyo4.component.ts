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
  constructor(private router: Router) { }
  //問題編號
  idQA: number = 0;
  //問題名稱
  questionnaireName !: string;
  //問題類型
  question_type!: string;
  //必填
  must: boolean = false;


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
  //Q單選 M複選 T文字
  generateQuestionsQuestionnaire() {
    if (this.questionnaireName == null || this.question_type == null) {
      alert('請在題目或選擇題型輸入內容');
      return;
    } else {
      this.input_Questionnaire_only.push({
        id: this.idQA,
        type: this.question_type,
        name: this.questionnaireName,
        must: this.must,
        // quest: [],
      });
    }

    this.iPuQuOnPush();

    this.qa_A_id++;
    console.log(this.input_Questionnaire_only);
    this.qQQ = true;
    this.input_cloose = true;
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
      QeNumber: this.qa_A_id,
      type: this.question_type,
      value: '',
    });
  }


  //刪除選項
  deleteQA(index: number) {
    // console.log(index);
    // console.log(this.input_Questionnaire_only[this.idQA].quest);

    this.quest.splice(index, 1);
  }
  //
  qData: Array<any> = [];

  addNewList() {
    let type!: string;

    if (this.question_type == 'T') {
      type = '文字描述';
    } else if (this.question_type == 'M') {
      type = '複選題';
    } else if (this.question_type == 'Q') {
      type = '單選題';
    };

    this.idQA++;

    console.log(this.input_Questionnaire_Array);
    // console.log(this.qData);
    this.input_Questionnaire_Array.push({
      id: this.idQA,
      name: this.questionnaireName,
      type: type,
      must: this.must,
      edit: '',
      quest:this.quest
    })

    this.input_Questionnaire_only = [];
    this.quest = [];

    this.qa_A_id = 1;
    this.input_cloose = false;
    this.qQQ = false;

    // console.log(this.input_Questionnaire_Array);
    //放入inputQarray的值進清單
    this.dataSource.data = this.input_Questionnaire_Array;

  }
  //編輯
  editingOptions(element: any) {
    console.log(element);
    this.quest = [];
    this.input_cloose = false;
    this.qQQ = true;

    this.questionnaireName = element.name;

    if (element.type == '文字描述') {
      this.question_type = 'T';
    } else if (element.type == '複選題') {
      this.question_type = 'M';
    } else if (element.type == '單選題') {
      this.question_type = 'Q';
    };

    this.must = element.must;
    for(let quest of element.quest){
      this.quest.push(quest);
    };

  }


  //列表
  displayedColumns: string[] = ['select', 'name', 'type', 'must', 'edit'];
  dataSource = new MatTableDataSource<addNewQuestionnaireForm>(this.input_Questionnaire_Array);
  selection = new SelectionModel<addNewQuestionnaireForm>(true, []);

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

  deletedata() {
    // 濾除被選取的資料列
    this.dataSource.data = this.dataSource.data.filter(row => !this.selection.isSelected(row));
    // this.selection.selected=this.selection.selected.filter(s =>!this.input_Questionnaire_Array.isSelected(row));
    this.input_Questionnaire_Array = this.dataSource.data = this.dataSource.data;
  }

  //
  goMokuhyo3() {
    this.router.navigate(['/moguhyo1/mokuhyo3']);
  }
  goMokuhyo5() {
    this.router.navigate(['/moguhyo1/mokuhyo5']);
  }


}

export interface addNewQuestionnaireForm {
  name: string;
  type: string;
  must: boolean;
  edit: string;
}

