import { Injectable } from "@angular/core";
@Injectable({
  providedIn:'root'
})

export class FaekData{
  //列表用假資料
  ELEMENT_DATA:PeriodicElement[] = [
    {id: 1, name: 'Hydrogen', html:'http://localhost:4200/siyousyaui/siyousya2', state: '進行中', start_time: '2024/11/01', end_time:'2024/11/30', GoTo:'http://localhost:4200/moguhyo1/siyousya4'},
    {id: 2, name: 'Helium', html:'', state: '未開始', start_time: 'F', end_time:'2024/11/30', GoTo:''},
    {id: 3, name: 'Lithium', html:'', state: '已結束', start_time: 'M', end_time:'2024/11/30', GoTo:''},
    {id: 4, name: 'Beryllium', html:'', state: '進行中', start_time: 'F', end_time:'2024/11/30', GoTo:''},
    {id: 5, name: 'Boron', html:'', state: '已結束', start_time: 'F', end_time:'2024/11/30', GoTo:''},
    {id: 6, name: 'Carbon', html:'', state: '進行中', start_time: 'F', end_time:'2024/11/30', GoTo:''},
    {id: 7, name: 'Nitrogen', html:'', state: '已結束', start_time: 'M', end_time:'2024/11/30', GoTo:''},
    {id: 8, name: 'Oxygen', html:'', state: '已結束', start_time: 'M', end_time:'2024/11/30', GoTo:'前往'},
    {id: 9, name: 'Fluorine', html:'', state: '已結束', start_time: 'F', end_time:'2024/11/30', GoTo:''},
    {id: 10, name: 'Neon', html:'', state: '已結束', start_time: 'F', end_time:'2024/11/30', GoTo:''},
    {id: 11, name: 'Sodium', html:'', state: '已結束', start_time: 'M', end_time:'2024/11/30', GoTo:''},
  ];

  constructor(){}

  getArray():PeriodicElement[]{
    return this.ELEMENT_DATA;
  }
}

//列表用
export interface PeriodicElement {
  id: number;
  name: string;
  html: string;
  state:string;
  start_time:string;
  end_time:string;
  GoTo:string;
}


