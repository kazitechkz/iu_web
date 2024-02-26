import { Injectable } from '@angular/core';
import * as moment from "moment/moment";

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private seconds: number;
  private interval: any;
  private startTime: number = moment.now();

  constructor() {
    const timerData = localStorage.getItem('timerData');
    if (timerData) {
      const { seconds, startTime } = JSON.parse(timerData);
      this.seconds = seconds;
      this.startTime = startTime;
    } else {
      this.seconds = 30;
    }
  }

  startTimer() {
    this.startTime = Date.now();
    localStorage.setItem('timerData', JSON.stringify({
      seconds: this.seconds,
      startTime: this.startTime
    }));
    this.resumeTimer();
  }

  resumeTimer() {
    this.interval = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
      const remainingTime = this.seconds - elapsedTime;
      if (remainingTime > 0) {
        this.seconds = remainingTime;
      } else {
        clearInterval(this.interval);
        localStorage.removeItem('timerData');
        // Дополнительные действия по завершении таймера
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
    localStorage.removeItem('timerData');
  }

  resetTimer() {
    this.seconds = 0;
    clearInterval(this.interval);
    localStorage.removeItem('timerData');
  }

  getSeconds(): number {
    return this.seconds;
  }

}
