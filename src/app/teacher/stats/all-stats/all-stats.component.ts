import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {Pagination} from "../../../shared/store/pagination";
import {AttemptModel} from "../../../shared/models/attempt";
import {UntStatModel} from "../../../shared/models/untStat.model";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {
  faBook,
  faFlagCheckered,
  faSignal,
  faSquarePollVertical,
  faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import {StrHelper} from 'src/app/core/helpers/str.helper';
import * as moment from 'moment';
import {RoutesName} from 'src/app/core/constants/routes.constants';
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {StatByUserAction} from "../../../shared/store/teacher/stats/stats-by-user/stat-by-user.action";
import {teacherStatByUserReducer} from "../../../shared/store/teacher/stats/stats-by-user/stat-by-user.reducer";
import {statByUserStateSelector} from "../../../shared/store/teacher/stats/stats-by-user/stat-by-user.selector";
import {TeacherStatsByUser} from "../../../shared/models/teacherDashboardStatistic.model";
import {AllAttemptRequest} from "../../../shared/store/attempt/allAttempt/allAttempt.request";
import {StatByUserRequest} from "../../../shared/store/teacher/stats/stats-by-user/stat-by-user.request";
import {allAttemptAction} from "../../../shared/store/attempt/allAttempt/allAttempt.action";

@Component({
  selector: 'app-all-stats',
  templateUrl: './all-stats.component.html',
  styleUrls: ['./all-stats.component.scss']
})
export class AllStatsComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  public _store = inject(Store);
  private _route = inject(ActivatedRoute)
  //@ts-ignore
  public stats: TeacherStatsByUser
  public pagination = {page: 1};
  public translate = inject(GlobalTranslateService);

  ngOnInit(): void {
    this.getStats()
  }

  getStats() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      let pageRequest: StatByUserRequest = {user_id: params['user_id'], page: 1};
      Object.assign(pageRequest, this.pagination);
      pageRequest = pageRequest as StatByUserRequest;
      this._store.dispatch(StatByUserAction({request: pageRequest}))
      this._store.select(statByUserStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.data) {
          this.stats = item.data
          // @ts-ignore
          this.barChartData.labels = Object.keys(item.data.stat_by_week);
          // @ts-ignore
          this.barChartData.datasets[0].data = Object.values(item.data.stat_by_week)
          this.barChartData.datasets[0].label = "Результат"
        }
      })
    })
  }

  pageChanged($event: number) {
    this.pagination.page = $event;
    this.getStats()
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
      {data: [], label: '', backgroundColor: "#4DC591"},
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
  protected readonly allAttemptAction = allAttemptAction;
}
