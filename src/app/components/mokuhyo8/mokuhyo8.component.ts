import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-mokuhyo8',
  standalone: true,
  imports: [],
  templateUrl: './mokuhyo8.component.html',
  styleUrl: './mokuhyo8.component.scss'
})
export class Mokuhyo8Component {
  ngOnInit(){
    this.cueitenbin();

  }
  cueitenbin(){
    let ctx = document.getElementById('chart') as HTMLCanvasElement;

    let data = {
      labels: ['餐費','交通費','租金'],
      datasets: [
        {
          label:'支出比',
          data: [200,300,900],

          backgroundColor: [
            'rgb(255,94,60)',
            'rgb(54,168,99)',
            'rgb(255,205,111)',
          ],
          hoverOffset: 50,
        },
      ],
    };

    let chart = new Chart(ctx, {
      type: 'pie',
      data: data,
    });
  }

}
