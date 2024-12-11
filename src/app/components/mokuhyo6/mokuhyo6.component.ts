import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClientService } from '../../http-service/http-client.service';
import { Router } from '@angular/router';
import { QuestService } from '../../@services/quest.service';
@Component({
  selector: 'app-mokuhyo6',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './mokuhyo6.component.html',
  styleUrl: './mokuhyo6.component.scss'
})
export class Mokuhyo6Component {
  constructor(
    private http: HttpClientService,
    private quesSiyousya: QuestService,
    private router: Router

  ) { }

  //列表用
  displayedColumns: string[] = ['id', 'userName', 'fillinDate', 'email'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }
  // id
  quizId:any;

  ngOnInit(): void {

    this.quizId = this.quesSiyousya.quizId;
    this.userData(this.quizId);
    // console.log(this.quizId);
  }


  userBrowseResults(userName:string, email:string, phone:string, age:number) {
    this.quesSiyousya.quizId=this.quizId;
    this.quesSiyousya.questData=({
      userName:userName,
      email:email,
      phone:phone,
      age:age,
    });
    this.router.navigate(['/moguhyo1/mokuhyo7']);
  }

  gotoStattistics(){
    this.quesSiyousya.questId=this.quizId;
    this.router.navigate(['/moguhyo1/siyousya4']);
  }


  goback() {
    this.router.navigate(['/moguhyo1/mokuhyo2']);
  }

  userData(quizId: number) {
    this.http.getApi('http://localhost:8080/quiz/getfeedback?quizId=' + quizId).subscribe((res: any) => {
      // console.log(res);
      let userFeedbackList: PeriodicElement[] = [];
      let i = 1;
      res.forEach((item: any) => {
        if (item.email)
          userFeedbackList.push({
            id: i,
            quizId:item.quizId,
            userName: item.userName,
            phone:item.phone,
            age:item.age,
            email: item.email,
            fillinDate: item.fillinDate,
          });
        i++;
      });

      const uniqueList = Object.values(
        userFeedbackList.reduce<Record<string, typeof userFeedbackList[0]>>((acc, item) => {
          if (!acc[item.email]) {
            acc[item.email] = item;
          }
          return acc;
        }, {})
      ).map((item, index) => ({
        ...item,
        id: index + 1 // Assign new ID starting from 1
      }));
      // console.log(uniqueList);
      this.dataSource.data = uniqueList;
      // if (res.StatusCode != 200) {
      //   console.log(res);
      //   // this.dataSource =res;
      //   return
      // }else{

      //   console.log(' =========回傳成功，請做確認========');
      // }
    })
  }

}
//列表用
export interface PeriodicElement {
  id: number;
  quizId:number;
  userName: string;
  phone:string;
  age:string;
  email: string;
  fillinDate: string;

}
//列表用假資料
// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, name: 'Hydrogen', start_time: '2024/12/1', GoTo: ''},
//   {id: 2, name: 'Helium', start_time: '2024/12/1', GoTo: ''},
//   {id: 3, name: 'Lithium', start_time: '2024/12/1', GoTo: ''},
//   {id: 4, name: 'Beryllium', start_time: '2024/12/1', GoTo: ''},
//   {id: 5, name: 'Boron', start_time: '2024/12/1', GoTo: ''},
//   {id: 6, name: 'Carbon', start_time: '2024/12/1', GoTo: ''},
//   {id: 7, name: 'Nitrogen', start_time: '2024/12/1', GoTo: ''},
//   {id: 8, name: 'Oxygen', start_time: '2024/12/1', GoTo: ''},
//   {id: 9, name: 'Fluorine', start_time: '2024/12/1', GoTo: ''},
//   {id: 10, name: 'Neon', start_time: '2024/12/1', GoTo: ''},
//   {id: 11, name: 'Sodium', start_time: '2024/12/1', GoTo: ''},
// ];
