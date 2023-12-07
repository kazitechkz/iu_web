import {BehaviorSubject, Observable} from "rxjs";

export class ChartDataService {
  private chartDataSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public chartData$: Observable<number[]> = this.chartDataSubject.asObservable();

  updateChartData(newData: number[]): void {
    this.chartDataSubject.next(newData);
  }
}
