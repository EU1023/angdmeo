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
    if(this.mangeData.manage==false){
      this.router.navigate(['/siyousyaui/siyousya1']);
    }else if(this.mangeData.manage==true){
      this.router.navigate(['/moguhyo1/siyousya1']);
    }

  }

  logout(){
    this.mangeData.manage=false;
    this.router.navigate(['/siyousyaui/siyousya1']);
  }

  ngOnInit(){

  };

}
