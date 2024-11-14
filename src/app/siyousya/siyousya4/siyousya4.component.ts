import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-siyousya4',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule],
  templateUrl: './siyousya4.component.html',
  styleUrl: './siyousya4.component.scss'
})
export class Siyousya4Component {

  // 多選M 單選Q 文字輸入T
  questData = {
    questName: '範例問卷標題',
    sDate: '2024/11/06',
    eDate: '2024/12/23',
    quest: [
      {
        id: '1',
        type: 'M',
        labels: ['拉麵', '披薩', '肉燥飯'],
        name: '喜歡的食物',
        data: [800, 200, 100],
        color: ['red', 'blue', 'green']

      },
      {
        id: '2',
        type: 'Q',
        name: '喜歡的國家',
        labels: ['台灣', '日本', '美國'],
        data: [2000, 2100, 1000],
        color: ['red', 'blue', 'green']
      },
    ],
    quest2:{
      id: '3',
      type: 'T',
      name: '你想對他說的話',
      labels: [],
      data: ['安安你好', '幾歲住哪', '摳尼基挖'],
      color: ['red', 'blue', 'green']
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  // 因為需要抓取頁面標籤所以需要使用ngAfterViewInit這個生命週期
  // 這個生命週期為當頁面渲染結束後才會觸發
  ngAfterViewInit(): void {
    this.createPie();
  }

  goBack() {
    this.router.navigate(['/moguhyo1/siyousya1']);
  }

  createPie() {
    for (let outint of this.questData.quest) {

      // 獲取 canvas 元素
      // 使用題目ID當作canvas的ID來分類
      // 否則ID重複程式會失敗
      let ctx = document.getElementById(outint.id) as HTMLCanvasElement;

      // 設定數據
      let data_for = {
        // x 軸文字
        labels: outint.labels,
        datasets: [
          {
            // 數據
            data: outint.data,
            // 線與邊框顏色
            backgroundColor: outint.color,
            //設定hover時的偏移量，滑鼠移上去表會偏移，方便觀看選種的項目
            hoverOffset: 10,
          },
        ],
      };
      console.log(outint);
      if (ctx) {
        // 創建圖表
        let chart = new Chart(ctx, {
          //pie是圓餅圖,doughnut是環狀圖
          type: 'pie',
          data: data_for,
        });
      }

    }
  }

}
