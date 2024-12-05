import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PracticeComponent } from './practice/practice.component';

import { TourokuComponent } from './components/touroku/touroku.component';
import { Mokuhyo1Component } from './components/mokuhyo1/mokuhyo1.component';
import { Mokuhyo2Component } from './components/mokuhyo2/mokuhyo2.component';
import { Mokuhyo3Component } from './components/mokuhyo3/mokuhyo3.component';
import { Mokuhyo4Component } from './components/mokuhyo4/mokuhyo4.component';
import { Mokuhyo5Component } from './components/mokuhyo5/mokuhyo5.component';
import { Mokuhyo6Component } from './components/mokuhyo6/mokuhyo6.component';
import { Mokuhyo7Component } from './components/mokuhyo7/mokuhyo7.component';
import { Mokuhyo8Component } from './components/mokuhyo8/mokuhyo8.component';
import { SiyousyaUiComponent } from './siyousya/siyousya-ui/siyousya-ui.component';
import { Siyousya1Component } from './siyousya/siyousya1/siyousya1.component';
import { Siyousya2Component } from './siyousya/siyousya2/siyousya2.component';
import { Siyousya3Component } from './siyousya/siyousya3/siyousya3.component';
import { Siyousya4Component } from './siyousya/siyousya4/siyousya4.component';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { Chart } from 'chart.js/auto';
export const routes: Routes = [
  { path: '', redirectTo:'/siyousyaui/siyousya1' , pathMatch: 'full'},
  { path: 'moguhyo1', component: Mokuhyo1Component, children:[
    // { path: '', redirectTo: '/moguhyo1/mokuhyo3', pathMatch: 'full'},
    { path: '', redirectTo: '/moguhyo1/siyousya1', pathMatch: 'full'},
    { path: 'touroku', component: TourokuComponent },
    { path: 'mokuhyo2', component: Mokuhyo2Component },
    { path: 'mokuhyo3', component: Mokuhyo3Component },
    { path: 'mokuhyo4', component: Mokuhyo4Component },
    { path: 'mokuhyo5', component: Mokuhyo5Component },
    { path: 'mokuhyo6', component: Mokuhyo6Component },
    { path: 'mokuhyo7', component: Mokuhyo7Component },
    { path: 'mokuhyo8', component: Mokuhyo8Component },
    { path: 'siyousya1', component: Siyousya1Component },
    { path: 'siyousya2', component: Siyousya2Component },
    { path: 'siyousya3', component: Siyousya3Component },
    { path: 'siyousya4', component: Siyousya4Component },
  ]},
  { path: 'siyousyaui', component: SiyousyaUiComponent, children:[
    { path: '', redirectTo: '/siyousyaui/siyousya1', pathMatch: 'full'},
    { path: 'touroku', component: TourokuComponent },
    { path: 'siyousya1', component: Siyousya1Component },
    { path: 'siyousya2', component: Siyousya2Component },
    { path: 'siyousya3', component: Siyousya3Component },
    { path: 'siyousya4', component: Siyousya4Component },
  ]},


  //{ path: '', redirectTo: '/',pathMatch: 'full'},
  // path: ''的''是指第一段輸入的內容 full指的是必須完全一樣
];
