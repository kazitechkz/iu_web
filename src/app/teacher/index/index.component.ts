import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {ImageHelper} from "../../core/helpers/image.helper";
import {ColorConstants} from "../../core/constants/color.constants";
import {RoutesName} from "../../core/constants/routes.constants";
import {StrHelper} from "../../core/helpers/str.helper";
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData, ChartType} from "chart.js";
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {TwNotification} from "ng-tw";
import {StatDashboardAction} from "../../shared/store/teacher/dashboard/dashboard.action";
import {statDashboardStateSelector} from "../../shared/store/teacher/dashboard/dashboard.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {TeacherDashboardStatisticModel} from "../../shared/models/teacherDashboardStatistic.model";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public translate = inject(GlobalTranslateService)
  private _translatePipe = inject(TranslateService)
  private _store = inject(Store)
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _notification = inject(TwNotification)
  public singleChartLabels: string[] = []
  public singleChartData: number[] = []
  public untChartLabels: string[] = []
  public untChartData: number[] = []
  public resultLabelText: string = ''
  //@ts-ignore
  public dashboardStat: TeacherDashboardStatisticModel
  ngOnInit(): void {
    this.getStats()
    this._translatePipe.get('RESULT_IN_PERCENTAGE').subscribe((str: string) => {
      // @ts-ignore
      this.barChartData.datasets[0].label = str
      this.barUNTChartData.datasets[0].label = str
    })
  }

  getStats() {
    this._store.dispatch(StatDashboardAction())
    this._store.select(statDashboardStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.dashboardStat = item.data
        Object.keys(this.dashboardStat.top_single_users).forEach(arr => {
          this.singleChartLabels.push(arr)
        })
        Object.values(this.dashboardStat.top_single_users).forEach(arr => {
          // @ts-ignore
          this.singleChartData.push(arr.percentage)
        })
        Object.keys(this.dashboardStat.top_unt_users).forEach(arr => {
          this.untChartLabels.push(arr)
        })
        Object.values(this.dashboardStat.top_unt_users).forEach(arr => {
          // @ts-ignore
          this.untChartData.push(arr.percentage)
        })
      }
    })
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
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
    labels: this.singleChartLabels,
    datasets: [
      { data: this.singleChartData, backgroundColor: "#4DC591" },
    ],
  };

  public barUNTChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barUNTChartType: ChartType = 'bar';

  public barUNTChartData: ChartData<'bar'> = {
    labels: this.untChartLabels,
    datasets: [
      { data: this.untChartData, backgroundColor: "#4DC591" },
    ],
  };
  protected readonly ImageHelper = ImageHelper;
  protected readonly ColorConstants = ColorConstants;
  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
  protected readonly parseInt = parseInt;
  protected readonly String = String;
}
