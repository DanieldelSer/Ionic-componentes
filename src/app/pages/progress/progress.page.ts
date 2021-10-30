import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0.05;
  timer: number = 0;

  constructor() { }

  ngOnInit() {
    this.barTimer();
  }

  rangeChange( event ) {
    console.log(event.detail.value);
    this.porcentaje = event.detail.value / 100;
  }

  barTimer() {
    let interval = setInterval(() => {
      console.log(this.timer);
      this.timer += 0.01;
      if (this.timer >= 1) {
        clearInterval(interval);
      }
    }, 100);
  }
}
