import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-mokuhyo1',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,MatIconModule],
  templateUrl: './mokuhyo1.component.html',
  styleUrl: './mokuhyo1.component.scss'
})
export class Mokuhyo1Component {
  ngOnInit(){
  };

}
