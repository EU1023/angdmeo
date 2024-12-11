import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { QuestService } from '../../@services/quest.service';
import { HttpClientService } from '../../http-service/http-client.service';
@Component({
  selector: 'app-siyousya4',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule],
  templateUrl: './siyousya4.component.html',
  styleUrl: './siyousya4.component.scss'
})
export class Siyousya4Component {

  // 多選M 單選Q 文字輸入T
  // questData = {
  //   questName: '範例問卷標題',
  //   sDate: '2024/11/06',
  //   eDate: '2024/12/23',
  //   quest: [
  //     {
  //       id: '1',
  //       type: 'M',
  //       labels: ['拉麵', '披薩', '肉燥飯'],
  //       name: '喜歡的食物',
  //       data: [800, 200, 100],
  //       color: ['red', 'blue', 'green']
  //     },
  //     {
  //       id: '2',
  //       type: 'Q',
  //       name: '喜歡的國家',
  //       labels: ['台灣', '日本', '美國'],
  //       data: [2000, 2100, 1000],
  //       color: ['red', 'blue', 'green']
  //     },
  //   ],
  //   quest2: {
  //     id: '3',
  //     type: 'T',
  //     name: '你想對他說的話',
  //     labels: [],
  //     data: ['安安你好', '幾歲住哪', '摳尼基挖'],
  //     color: ['red', 'blue', 'green']
  //   }
  // }

  constructor(
    private router: Router,
    private questService: QuestService,
    private http: HttpClientService,
  ) { }

  quizId!: number;
  ngOnInit(): void {
    this.quizId = this.questService.questId;

    this.getStatistics(this.quizId);
  }

  // 因為需要抓取頁面標籤所以需要使用ngAfterViewInit這個生命週期
  // 這個生命週期為當頁面渲染結束後才會觸發
  ngAfterViewInit(): void {
    // this.createPie();
  }

  statisticsData: Array<any> = [];

  getStatistics(id: number) {
    this.http.getApi('http://localhost:8080/quiz/stattistics?quizId=' + id).subscribe(
      (res: any) => {
        if (res.code != 200) {
          console.log(res.code + ' ' + res.message);
          return
        }
        // console.log(res.statisticsVoList);
        this.statisticsData = res.statisticsVoList;

        this.questDataInCreatePie();

      });

  }
  questData: Array<any> = [];
  questDataInCreatePie() {
    this.statisticsData.forEach((item: {
      quesId: number;
      quesName: string;
      optionCountMap: string;
      type: string;
    }) => {
      if (item.type!="text") {
        const entries = Object.entries(item.optionCountMap);

        const valuesData = entries.map(([key]) => key);
        const keysData = entries.map(([, value]) => value);

        console.log("Keys:", keysData);
        console.log("Values:", valuesData);
        let optionsList;

        // this.quizName = item.quizName;
        // this.quizDes = item.description;

        this.questData.push({
          quesId: item.quesId,
          type: item.type,
          quesName: item.quesName,
          data: keysData,
          labels: valuesData,
          optionCountMap: optionsList,
          color: ['red', 'blue', 'green']
        })
      }
    });

    console.log(this.questData);

    this.createPie();
  }
  goBack() {
    this.router.navigate(['/siyousyaui/siyousya1']);
  }



  createPie() {
    for (let outint of this.questData) {
      // 獲取 canvas 元素
      // 使用題目ID當作canvas的ID來分類
      // 否則ID重複程式會失敗
      let ctx = document.getElementById(outint.quesId) as HTMLCanvasElement;
      if (!ctx) {
        setTimeout(() => {
          this.createPie();
        }, 500);
        return;
      }
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
      // console.log(outint);
      if (ctx) {
        // 創建圖表
        let chart = new Chart(ctx, {
          //pie是圓餅圖,doughnut是環狀圖
          type: 'doughnut',
          data: data_for,
        });
      }

    }
  }

}
