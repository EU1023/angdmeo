import { Component } from '@angular/core';
import { QuestService } from '../../@services/quset.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule 
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss'
})
export class PreviewComponent {
  questData!: any;
  constructor(
    private questService: QuestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.questData = this.questService.questData;
  }

  goBack() {
    this.router.navigate(['/questionnaire']);
  }

  goList() {
    // 儲存成功後記得將Service中的資料清空避免資料錯誤
    this.questService.questData = ''; 
    this.router.navigate(['/list']);
  }
}
