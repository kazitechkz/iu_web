import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  inject, OnDestroy,
  OnInit, QueryList,
  ViewChild, ViewChildren
} from '@angular/core';
import {ImageHelper} from "../../core/helpers/image.helper";
import {ColorConstants} from "../../core/constants/color.constants";
import {RoutesName} from "../../core/constants/routes.constants";
import {StrHelper} from "../../core/helpers/str.helper";
import {BaseChartDirective} from "ng2-charts";
import {Chart, ChartConfiguration, ChartData, ChartType} from "chart.js";
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {TwNotification} from "ng-tw";
import {StatDashboardAction} from "../../shared/store/teacher/dashboard/dashboard.action";
import {statDashboardStateSelector} from "../../shared/store/teacher/dashboard/dashboard.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {
  TeacherDashboardStatisticModel,
  TeacherStatsBySubject, TeacherStatsByUNT
} from "../../shared/models/teacherDashboardStatistic.model";
import {TranslateService} from "@ngx-translate/core";
import {FormControl, FormGroup} from "@angular/forms";
import {StatBySubjectRequest} from "../../shared/store/teacher/stats/stats-by-subject/stat-by-subject.request";
import {StatBySubjectIdAction} from "../../shared/store/teacher/stats/stats-by-subject/stat-by-subject.action";
import {statBySubjectIdStateSelector} from "../../shared/store/teacher/stats/stats-by-subject/stat-by-subject.selector";
import {StatByUntRequest} from "../../shared/store/teacher/stats/stats-by-unt/stat-by-unt.request";
import {StatByUNTAction} from "../../shared/store/teacher/stats/stats-by-unt/stat-by-unt.action";
import {teacherStatByUNTStateSelector} from "../../shared/store/teacher/stats/stats-by-unt/stat-by-unt.selector";
import {subjectGetAction} from "../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../shared/store/subject/subject.selector";
import {Subject} from "../../shared/models/subject.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
      if (this.subjectSubscription) {
        this.subjectSubscription.unsubscribe()
      }
      if (this.untSubscription) {
        this.untSubscription.unsubscribe()
      }
  }
  ngOnInit(): void {
    this.getStatBySubjectInitial()
    this.getStatByUNTInitial()
    this.getStats()
    this._translatePipe.get('RESULT_IN_PERCENTAGE').subscribe((str: string) => {
      // @ts-ignore
      this.barChartData.datasets[0].label = str
      this.barUNTChartData.datasets[0].label = str
    })
    this.getSubjects()
  }
  @ViewChildren(BaseChartDirective) chart: QueryList<BaseChartDirective> | undefined;
  public translate = inject(GlobalTranslateService)
  private _translatePipe = inject(TranslateService)
  private _store = inject(Store)
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _notification = inject(TwNotification)
  public singleChartLabels: string[] = []
  public singleChartData: number[] = []
  public untChartLabels: string[] = []
  public untChartData: number[] = []
  public subjects: Subject[] = []
  public resultLabelText: string = ''
  //@ts-ignore
  public dashboardStat: TeacherDashboardStatisticModel
  public dashboardStatBySubject: TeacherStatsBySubject[] = []
  public dashboardStatByUNT: TeacherStatsByUNT[] = []
  public statBySubjectForm: FormGroup = new FormGroup({
    subject_id: new FormControl(0),
    from_date: new FormControl(null),
    to_date: new FormControl(null),
  })
  public statByUNTForm: FormGroup = new FormGroup({
    from_date: new FormControl(null),
    to_date: new FormControl(null),
  })
  // @ts-ignore
  private subjectSubscription: Subscription;
  // @ts-ignore
  private untSubscription: Subscription;
  submitBySubject() {
    if (this.subjectSubscription) {
      this.subjectSubscription.unsubscribe()
    }
    this.resetChartBySubject()
    this.getStatBySubjectInitial()
  }
  submitByUNT() {
    if (this.untSubscription) {
      this.untSubscription.unsubscribe()
    }
    this.resetChartByUNT()
    this.getStatByUNTInitial()
  }
  changeSubject(event: any) {
    this.statBySubjectForm.patchValue({
      subject_id: event.target.value
    })
  }
  getSubjects(){
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=> {
      if(item.data){
        this.subjects = item.data;
      }
    })
  }
  getStats() {
    this._store.dispatch(StatDashboardAction())
    this._store.select(statDashboardStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.dashboardStat = item.data
      }
    })
  }
  resetChartBySubject() {
    this.barChartData.labels = []
    this.barChartData.datasets[0].data = []
  }
  resetChartByUNT() {
    this.barUNTChartData.labels = []
    this.barUNTChartData.datasets[0].data = []
  }
  getStatBySubjectInitial() {
    let req = this.statBySubjectForm.getRawValue() as StatBySubjectRequest
    this._store.dispatch(StatBySubjectIdAction(req))
    this.subjectSubscription = this._store.select(statBySubjectIdStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.dashboardStatBySubject = item.data
        Object.keys(this.dashboardStatBySubject).forEach(arr => {
          this.barChartData.labels?.push(arr)
        })
        Object.values(this.dashboardStatBySubject).forEach(arr => {
          //@ts-ignore
          this.barChartData.datasets[0].data.push(arr.percentage)
        })
        this.updateSubjectChart()
      }
    })
  }
  getStatByUNTInitial() {
    let req = this.statByUNTForm.getRawValue() as StatByUntRequest
    this._store.dispatch(StatByUNTAction(req))
    this.untSubscription = this._store.select(teacherStatByUNTStateSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.dashboardStatByUNT = item.data
        Object.keys(this.dashboardStatByUNT).forEach(arr => {
          this.barUNTChartData.labels?.push(arr)
        })
        Object.values(this.dashboardStatByUNT).forEach(arr => {
          // @ts-ignore
          this.barUNTChartData.datasets[0].data.push(arr.percentage)
        })
        this.updateUNTChart()
      }
    })
  }
  updateSubjectChart() {
    // @ts-ignore
    if (this.chart && this.chart._results) {
      // @ts-ignore
      if (this.chart._results[0]) {
        //@ts-ignore
        this.chart._results[0].chart.update();
      }
    }
  }
  updateUNTChart() {
    if (this.chart) {
      // @ts-ignore
      if (this.chart._results[1]) {
        // @ts-ignore
        this.chart._results[1].chart.update();
      }
    }
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
