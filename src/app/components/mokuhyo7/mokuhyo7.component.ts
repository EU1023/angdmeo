import { QuestService } from './../../@services/quest.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-mokuhyo7',
  standalone: true,
  imports: [],
  templateUrl: './mokuhyo7.component.html',
  styleUrl: './mokuhyo7.component.scss'
})
export class Mokuhyo7Component {
  displayedColumns: string[] = ['select', 'id', 'name', 'state', 'start_time', 'end_time', 'GoTo'];
  // dataSource = new MatTableDataSource<PeriodicElement>();

}
export interface PeriodicElement {
  id: number;
  name: string;
  state: string;
  start_time: string;
  end_time: string;
  GoTo: string;
}
