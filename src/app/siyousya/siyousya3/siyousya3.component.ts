import { QuestService } from './../../@services/quest.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-siyousya3',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './siyousya3.component.html',
  styleUrl: './siyousya3.component.scss'
})
export class Siyousya3Component {
  constructor(
    private questService: QuestService,
    private router: Router,
  ){}

  quData!:any;

  //取得伺服器暫存資料
  ngOnInit(): void {
    this.quData = this.questService.questData;
  }

  goSiyousya2(){
    this.router.navigate(['/moguhyo1/siyousya2']);
  }

  goHome(){
    this.questService.questData = null;
    this.router.navigate(['/moguhyo1/siyousya1']);
  }
}
