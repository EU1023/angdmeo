import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Managedata } from '../../@services/managedata';

@Component({
  selector: 'app-siyousya-ui',
  standalone: true,
  imports: [RouterOutlet,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,],
  templateUrl: './siyousya-ui.component.html',
  styleUrl: './siyousya-ui.component.scss'
})
export class SiyousyaUiComponent {
  constructor(private router: Router,
    private mangeData: Managedata,
  ) { }
  home() {
    if(this.mangeData.manage==false){
      this.router.navigate(['/siyousyaui/siyousya1']);
    }else if(this.mangeData.manage==true){
      this.router.navigate(['/moguhyo1/siyousya1']);
    }
  }
  touroku(){
    if(this.mangeData.manage==false){
      this.router.navigate(['/siyousyaui/touroku']);
    }else if(this.mangeData.manage==true){
      this.router.navigate(['/moguhyo1/touroku']);
    }
  }
  ngOnInit(){
  };
}
