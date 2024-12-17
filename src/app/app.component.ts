import { ExampleService } from './@services/example-service';
import {Component,} from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';

import { Managedata } from './@services/managedata';

import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import { HttpClientService } from './http-service/http-client.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { SiyousyaUiComponent } from "./siyousya/siyousya-ui/siyousya-ui.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, MatIconModule, MatPaginatorModule, MatTableModule,
    FormsModule, ReactiveFormsModule,

], //組件位置
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angdmeo';
  manage!:boolean;
  constructor(private http: HttpClientService,
              private exampleService: ExampleService,
              private manageData:Managedata,
            private router: Router){}

  ngOnInit(){
    // this.manage=this.manageData.manage;
    // if (this.manage) this.router.navigate(['/moguhyo1']);
    // if (!this.manage) this.router.navigate(['/siyousyaui']);
  }

  ngDoCheck(): void {
    // this.manage=this.manageData.manage;
  }

}
