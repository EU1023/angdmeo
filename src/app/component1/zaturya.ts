import { Injectable } from "@angular/core";
@Injectable({
  providedIn:'root'
})


export class initialDataService{


  constructor(){}
  data=[
    {
    name:'小明',
    id:123456,
    age:12,
    seibetu:'男',
    data:[
      {
        syouhin:'筆電',
        mani: 3000,
        iro:'藍色',
        su:1,
      },
      {
        syouhin:'滑鼠',
        mani: 20,
        iro:'黑色',
        su:1,
      },
      {
        syouhin:'鍵盤',
        mani: 50,
        iro:'紅色',
        su:1,
      },
      {
        syouhin:'筆電包',
        mani: 500,
        iro:'黑色',
        su:1,
      },
    ],
    }
  ];

}
