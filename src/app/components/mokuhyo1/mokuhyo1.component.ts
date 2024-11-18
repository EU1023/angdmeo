import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Managedata } from '../../@services/managedata';
@Component({
  selector: 'app-mokuhyo1',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            RouterLinkActive,
            MatIconModule,
            MatSidenavModule,
            MatButtonModule,
            MatToolbarModule,
            ],
  templateUrl: './mokuhyo1.component.html',
  styleUrl: './mokuhyo1.component.scss'
})
export class Mokuhyo1Component {
  constructor(private router: Router,
              private mangeData: Managedata,
  ){}
  home(){
    if(this.mangeData.manage==null){
      this.router.navigate(['/siyousyaui/siyousya1']);
    }else if(this.mangeData.manage==0){
      this.router.navigate(['/moguhyo1/siyousya1']);
    }

  }
  touroku(){
    if(this.mangeData.manage==null){
      this.router.navigate(['/siyousyaui/touroku']);
    }else if(this.mangeData.manage==0){
      this.router.navigate(['/moguhyo1/touroku']);
    }
  }

  ngOnInit(){
    console.log(this.mangeData);
  };

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log(this.mangeData);
  }
}
