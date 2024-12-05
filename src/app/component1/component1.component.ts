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
import { DilalogComponent } from './dilalog';
@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [FormsModule,MatCardModule,RouterOutlet,
            RouterLink, RouterLinkActive,MatButtonModule,
            MatButtonModule,MatFormFieldModule
            ],
//ngModel是formsModule的套件
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.scss'

})
export class Component1Component {
  ngmodel: string = "";
  account: string = "";

  readonly dialog = inject(MatDialog);

  showDialog(){
    const dialogRef = this.dialog.open(DilalogComponent, {
      //注入變數
      data:{ name: 'name', animal: 'title'}
    });

    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);
    });
  }



  public getAccount(){
    console.log(this.account);
  }
  title = 'angdmeo';
  //資料傳遞 input需要的變數值
  userName: string = 'Allen';
  //路由器
  constructor(private router: Router,
              private exampleService: ExampleService
  ){}
  //資料傳遞
  ngOnInit(): void {
    // console.log(this.exampleService.userName)
    // this.exampleService.userName=this.userName;

    // this.changeUserName.emit('55688');

  }
  //資料傳遞
  @Input() value!: string;
  changeUserName = output<string>();

  displayedColumns: string[] = ['id', 'name', 'age', 'sex'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  apidogdata!:  data;
  statuscode!: StatusCode;


  cUN(){
    this.changeUserName.emit("55688");
  }
  //即時搜尋 變數
  inputData!: string;
  changeInput(event: Event){
    // input的內容屬性為event
    // input的內容欄位在event.target.value
    // 但是你需要先將event.target
    //console.log((event.target as HTMLInputElement).value);
    // console.log(this.inputData)

    let tidyData:PeriodicElement[] = [];
    // ELEMENT_DATA.forEach(res => {
    //   if(res.name.indexOf((event.target as HTMLInputElement).value) != -1){
    //     tidyData.push(res);
    //   }
    // })

    for(let array of ELEMENT_DATA){
      // 判斷arrya中的age欄位是否有indexOf中帶入的判斷值(使用者輸入內容)
      // 如果不符合就永遠是 -1 符合就會將該資料的位置顯示
      if (array.name.indexOf(this.inputData)!=-1){
        console.log(array);
        // 當判斷不是-1時，代表有符合條件就將該筆資料塞進顯示內容中
        tidyData.push(array);
      }
    }
    //修改顯示內容
    this.dataSource.data=tidyData
  }


  //陣列迴圈 顯示
  c(){
    let arrayData = [10,20,3,5,8,9,23,6,657,123,67];
    for(var i=0; i<arrayData.length;i++){
      if(arrayData[i]==9){
        console.log(i);
      }
    }
    console.log('----------------------')
    for(let a of arrayData){

    }
  }


}
//api get
export interface StatusCode{
  message:string,
  statusCode:number,
  success:boolean,
  data:any,
}

export interface data{
    bred_for: string,
    breed_group: string,

    height: height,

    id: number,

    image: image,

    life_span: string,
    name: string,
    reference_image_id: string,
    temperament: string,

    weight: weight,
}

export interface height{
  imperial: string,
  metric: string,
}

export interface image{
  height: number,
  id: string,
  url: string,
  width: number,
}

export interface weight{
  imperial: string,
  metric: string,
}



//列表格式型態
export interface PeriodicElement {
  name: string;
  id: number;
  age: number;
  sex: string;
}
//假資料
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', age: 12, sex: 'M'},
  {id: 2, name: 'Helium', age: 18, sex: 'F'},
  {id: 3, name: 'Lithium', age: 21, sex: 'M'},
  {id: 4, name: 'Beryllium', age: 25, sex: 'F'},
  {id: 5, name: 'Boron', age: 26, sex: 'F'},
  {id: 6, name: 'Carbon', age: 27, sex: 'F'},
  {id: 7, name: 'Nitrogen', age: 30, sex: 'M'},
  {id: 8, name: 'Oxygen', age: 40, sex: 'M'},
  {id: 9, name: 'Fluorine', age: 19, sex: 'F'},
  {id: 10, name: 'Neon', age: 20, sex: 'F'},
  {id: 11, name: 'Sodium', age: 22, sex: 'M'},
  {id: 12, name: 'Magnesium', age: 24, sex: 'M'},
  {id: 13, name: 'Aluminum', age: 26, sex: 'F'},
  {id: 14, name: 'Silicon', age: 28, sex: 'F'},
  {id: 15, name: 'Phosphorus', age: 30, sex: 'M'},
  {id: 16, name: 'Sulfur', age: 32, sex: 'M'},
  {id: 17, name: 'Chlorine', age: 35, sex: 'M'},
  {id: 18, name: 'Argon', age: 39, sex: 'M'},
  {id: 19, name: 'Potassium', age: 39, sex: 'M'},
  {id: 20, name: 'Calcium', age: 40, sex: 'M'},
];
