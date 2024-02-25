import { Injectable } from '@angular/core';
import * as moment from "moment/moment";

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private startTimeKey = 'timer_start_time';

  constructor() { }

  getStartTime(): number | null {
    const startTimeString = localStorage.getItem(this.startTimeKey);
    return startTimeString ? parseInt(startTimeString, 10) : null;
  }

  setStartTime(startTime: number): void {
    localStorage.setItem(this.startTimeKey, startTime.toString());
  }

  clearStartTime(): void {
    localStorage.removeItem(this.startTimeKey);
  }

}
