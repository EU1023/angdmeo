import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-touroku',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './touroku.component.html',
  styleUrl: './touroku.component.scss'
})
export class TourokuComponent {

  //form列表 可用於登入
  form: FormGroup = new FormGroup({
    account: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
  })

  loginRegiser1:boolean = true;
  loginRegiser2:boolean = false;
  //登入鍵
  showfromDataLogin(){
    console.log(this.form.value);
  }
  //確定註冊鍵
  registerSure(){

  }
  //註冊鍵
  register(){
    this.loginRegiser1 = false;
    this.loginRegiser2 = true;

  }
  //返回登入鍵
  returnToLogin(){
    this.loginRegiser1 = true;
    this.loginRegiser2 = false;
  }




}
