import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class DataService{

  changeDateFormat(nowdate:Date){
    let nowDate = nowdate;
    let year; //年
    let month; //月
    let date; //日
    if (nowDate) {
      year = nowDate.getFullYear();
      month = nowDate.getMonth() + 1;
      if(String(month).length == 1){
        month = '0' + month;
      }
      date = nowDate.getDate();
      if (String(date).length == 1){
        date = '0' + date;
      }
      return year + '/' + month + '/' +date;
    } else{ return '';}
  }
}
