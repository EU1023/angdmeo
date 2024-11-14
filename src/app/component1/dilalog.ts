import { ExampleService } from './../@services/example-service';
import { Component  } from '@angular/core';
import {ChangeDetectionStrategy, Input, output,ViewChild, inject, model, signal} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';
import { Person } from './api-iinterface';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-dilalog',
  templateUrl: './dilalog.html',
  standalone: true,
  imports: [FormsModule,MatCardModule,RouterOutlet,
            RouterLink, RouterLinkActive,MatButtonModule,
            MatButtonModule,MatFormFieldModule,
            MatDialogTitle,MatDialogContent,MatDialogActions
            ],
})
export class DilalogComponent {

  readonly dialogRef = inject(MatDialogRef<DilalogComponent>);
  //接收變數
  readonly data = inject<any>(MAT_DIALOG_DATA);

  goBack(): void{
    let returnData = ['ada', 'adadas'];
    this.dialogRef.close(returnData);
  }
}
