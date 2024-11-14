import { ExampleService } from './@services/example-service';
import {Component,} from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';

import { TourokuComponent } from './components/touroku/touroku.component';
import { Mokuhyo1Component } from './components/mokuhyo1/mokuhyo1.component';
import { Mokuhyo2Component } from './components/mokuhyo2/mokuhyo2.component';
import { Mokuhyo3Component } from "./components/mokuhyo3/mokuhyo3.component";
import { Mokuhyo4Component } from "./components/mokuhyo4/mokuhyo4.component";
import { Mokuhyo5Component } from './components/mokuhyo5/mokuhyo5.component';
import { Mokuhyo6Component } from './components/mokuhyo6/mokuhyo6.component';
import { Mokuhyo7Component } from './components/mokuhyo7/mokuhyo7.component';
import { Mokuhyo8Component } from './components/mokuhyo8/mokuhyo8.component';

import { DilalogComponent } from './component1/dilalog';

import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import { HttpClientService } from './http-service/http-client.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { Component1Component } from "./component1/component1.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Component1Component,
            RouterOutlet, MatIconModule, RouterLink,
            RouterLinkActive, TourokuComponent,
            MatPaginator,MatPaginatorModule,MatTableModule,
            Mokuhyo1Component, Mokuhyo2Component,Mokuhyo3Component,Mokuhyo4Component,Mokuhyo5Component,Mokuhyo6Component,Mokuhyo7Component,Mokuhyo8Component,
            FormsModule,ReactiveFormsModule,
            DilalogComponent
             ], //組件位置
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angdmeo';

  constructor(private http: HttpClientService,
              private exampleService: ExampleService){
  }

  ngOnInit(): void{
  }

  //form列表 可用於登入
  form: FormGroup = new FormGroup({
    account: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  showfromData(){
    console.log(this.form.value);
  }
}
