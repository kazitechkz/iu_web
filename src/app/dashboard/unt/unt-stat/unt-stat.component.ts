import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {
  faBook,
  faFlagCheckered,
  faSignal,
  faSquarePollVertical,
  faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import {Store} from "@ngrx/store";
import {Attempt} from "../../../shared/models/attempt.model";
import {Pagination} from "../../../shared/store/pagination";
import {allAttemptAction} from "../../../shared/store/attempt/allAttempt/allAttempt.action";
import {AllAttemptRequest} from "../../../shared/store/attempt/allAttempt/allAttempt.request";
import {allAttemptSelector} from "../../../shared/store/attempt/allAttempt/allAttempt.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {AttemptModel} from "../../../shared/models/attempt";
import {StrHelper} from "../../../core/helpers/str.helper";
import * as moment from 'moment';
import {RoutesName} from "../../../core/constants/routes.constants";
import {UntStatModel} from "../../../shared/models/untStat.model";
import {getUntStatAction} from "../../../shared/store/attempt/getUntStat/getUntStat.action";
import {getUntStatSelector} from "../../../shared/store/attempt/getUntStat/getUntStat.selector";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {BaseChartDirective} from "ng2-charts";
@Component({
  selector: 'app-unt-stat',
  templateUrl: './unt-stat.component.html',
  styleUrls: ['./unt-stat.component.scss']
})
export class UntStatComponent implements OnInit{
  destroyRef = inject(DestroyRef);
  public _store = inject(Store);
  //@ts-ignore
  public attempts:Pagination<AttemptModel[]>;
  //@ts-ignore
  public untStat: UntStatModel;
  public pagination = {page:1}
  ngOnInit(): void {
    this.getUserAttempts();
    this.getUNTStat();
  }

  public getUserAttempts(){
    let pageRequest: AllAttemptRequest = {page:1};
    Object.assign(pageRequest,this.pagination);
    pageRequest = pageRequest as AllAttemptRequest;
    this._store.dispatch(allAttemptAction({requestData:pageRequest}));
    this._store.select(allAttemptSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.attempts = item.data;
        }
      }
    )
  }

  public getUNTStat(){
    this._store.dispatch(getUntStatAction());
    this._store.select(getUntStatSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.untStat = item.data;
          // @ts-ignore
          this.barChartData.labels = Object.keys(item.data.stat_by_week);
          // @ts-ignore
          this.barChartData.datasets[0].data = Object.values(item.data.stat_by_week)
          this.barChartData.datasets[0].label = "Результаты ЕНТ"

        }
      }
    )
  }

  pageChanged($event:number){
    this.pagination.page = $event;
    this.getUserAttempts();
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0.4,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [  ], label: '',backgroundColor:"#4DC591" },
    ],
  };


  protected readonly faSignal = faSignal;
  protected readonly faBook = faBook;
  protected readonly faSquarePollVertical = faSquarePollVertical;
  protected readonly faFlagCheckered = faFlagCheckered;
  protected readonly faUserGraduate = faUserGraduate;
  protected readonly StrHelper = StrHelper;
  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
}
