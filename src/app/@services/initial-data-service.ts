import { Injectable } from "@angular/core";
@Injectable({
  providedIn:'root'
})


export class initialDataService{
  qaNewdata!:any;
  qaNewnaiyodata!:any;
  Newdata: Array<any>=[];

  qaNew(){
    this.Newdata.push(
      {
      title: this.qaNewdata.qaNamedata,
      ex: this.qaNewdata.qaContentdata,
      sData:this.qaNewdata.startTime,
      eData:this.qaNewdata.endTime,
      options:this.qaNewnaiyodata,
      }
    );

  }
}
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
