import { ExampleService } from '../../@services/example-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpUserService } from '../../@services/http-service';
import { HttpClientService } from '../../http-service/http-client.service';
import { DataService } from '../../@services/data-service';
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
    private http: HttpClientService,
    private httpUserService: HttpUserService,
    private exampleService: ExampleService,
    private router: Router,
    private dateService: DataService
  ) { }


  quData!: any;
  quesData!: any;

  //取得伺服器暫存資料
  ngOnInit(): void {
    this.quData = this.exampleService.quData;
    this.quesData = this.exampleService.quesData;

    console.log(this.quData);
    console.log(this.quesData);
  }

  goSiyousya2() {
    this.router.navigate(['/siyousyaui/siyousya2']);
  }

  goHome() {
    this.userQuesData();


    this.exampleService.quData = null;
    this.exampleService.quesData = null;
    this.router.navigate(['/siyousyaui/siyousya1']);
  }

  userQuesData() {
    let userList: {}[] = [];
    let quesIdAnswer: { [key: number]: Array<string> } = {};

    let routerUserData: any;

    // 放入
    console.log('for前');
    for (let fb = 0; fb < this.quesData.length; fb++) {

      let userSelectAnswer: Array<string> = [];

      console.log('======'+this.quesData[fb].type + '======');

      //single答案放入
      if (this.quesData[fb].type == 'single') {
        // this.quesData[fb].options.forEach((item:any) => {
        //   userSelectAnswer.push(item.option);
        // });
        userSelectAnswer.push(this.quesData[fb].options[Number(this.quesData[fb].radioAnswer) - 1].option);
        console.log(userSelectAnswer);
      }
      //multi答案放入
      if (this.quesData[fb].type == 'multi') {
        this.quesData[fb].options.forEach((item:any) => {
          if(item.boxBoolean){
            userSelectAnswer.push(item.option);
          }
        });
        console.log(userSelectAnswer);
      }
      //text答案放入
      if (this.quesData[fb].type == 'text') {
        userSelectAnswer.push(this.quesData[fb].answer);
        console.log(userSelectAnswer);
      }
      quesIdAnswer[this.quesData[fb].quesId] =userSelectAnswer;
    }
    console.log(quesIdAnswer);
    console.log('routerData前');
      routerUserData = {
        quizId: this.quData.quizId,
        answer:  quesIdAnswer,
        userName: this.quData.userName,
        phone: this.quData.userPhone,
        email: this.quData.userEmail,
        age: this.quData.userAge,
        fillinDate: this.dateService.changeDateFormat2(new Date()),
      }
      console.log(routerUserData);

    this.http.postApi('http://localhost:8080/quiz/fillin', routerUserData).subscribe((res: any) => {
      if (res.StatusCode != 200) {
        console.log(res);
        // alert(res.code + ' ' + res.message);
        return
      }else{console.log(' =========回傳成功，請做確認========');}
    })
    routerUserData = null;
    // this.router.navigate(['']);
  }
}
