import { Router, RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {
  constructor(private router: Router){}

  ng0nInit(){}

}
