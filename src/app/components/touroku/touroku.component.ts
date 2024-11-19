import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Managedata } from '../../@services/managedata';

@Component({
  selector: 'app-touroku',
  standalone: true,
  imports: [FormsModule,
            ReactiveFormsModule,
            ],
  templateUrl: './touroku.component.html',
  styleUrl: './touroku.component.scss'
})
export class TourokuComponent {
  constructor(
    private router: Router,
    private managedata: Managedata,) {}
  //form列表 可用於登入
  form: FormGroup = new FormGroup({
    account: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  //登入鍵
  showfromDataLogin(){

    this.managedata.manage = true;
    console.log(this.managedata.manage);
    this.router.navigate(['/moguhyo1/siyousya1']);
  }




}
