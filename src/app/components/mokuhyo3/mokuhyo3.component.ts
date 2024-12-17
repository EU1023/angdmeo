import { initialDataService } from './../../@services/initial-data-service';

import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { DataService } from '../../@services/data-service';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';
@Component({
  selector: 'app-mokuhyo3',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    FormsModule,
  ],
  templateUrl: './mokuhyo3.component.html',
  styleUrl: './mokuhyo3.component.scss'
})
export class Mokuhyo3Component {
  constructor(
    private dataService: DataService,
    private router: Router,
    private initialdataservice: initialDataService,
  ) { }

  questionnaireName !: string;
  questionnaireContent !: string;

  //時間選擇器的變數
  fdata=new Date();
  edata=new Date();

  //時間選擇器
  //開始時間的限制
  private readonly _currentYear1 = new Date().getFullYear();
  readonly minDate1 = new Date();
  //結束時間的限制
  private readonly _currentYear2 = new Date().getFullYear();
  readonly minDate2 = new Date(this.fdata);

  goMokuhyo4() {
    if (this.questionnaireName == null || this.questionnaireContent == null || this.edata == null) {
      alert('請輸入內容');
      return;
    } else {
      this.initialdataservice.quiz = {
        name: this.questionnaireName,
        description: this.questionnaireContent,
        start_date: this.dataService.changeDateFormat2(this.fdata),
        end_date: this.dataService.changeDateFormat2(this.edata),
        published: true,
      };

      this.router.navigate(['/moguhyo1/mokuhyo4'])
    }
  }

}
