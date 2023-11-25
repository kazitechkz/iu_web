import {Component, DestroyRef, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ColorConstants} from "../../core/constants/color.constants";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {RoutesName} from "../../core/constants/routes.constants";
import {StrHelper} from "../../core/helpers/str.helper";
import {
  faEye,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import * as moment from "moment/moment";
import {Pagination} from "../../shared/store/pagination";
import {AttemptModel} from "../../shared/models/attempt";
import {UntStatModel} from "../../shared/models/untStat.model";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {AllAttemptRequest} from "../../shared/store/attempt/allAttempt/allAttempt.request";
import {allAttemptAction} from "../../shared/store/attempt/allAttempt/allAttempt.action";
import {allAttemptSelector} from "../../shared/store/attempt/allAttempt/allAttempt.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{
  destroyRef = inject(DestroyRef);
  public _store = inject(Store);
  public translate = inject(GlobalTranslateService);
  protected readonly ColorConstants = ColorConstants;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  //@ts-ignore
  public attempts:Pagination<AttemptModel[]>;
  //@ts-ignore
  public untStat: UntStatModel;
  public pagination = {page:1};

  viewDate: Date = new Date();
  ngOnInit(): void {
    this.getUserAttempts();
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
  pageChanged($event:number){
    this.pagination.page = $event;
    this.getUserAttempts();
  }

  public menuLists = [
    {
      title: 'Подготовка к ЕНТ',
      path: StrHelper.getDashboardRouteName(RoutesName.stepRoute),
      imageUrl: "assets/images/icons/content.png"
    },
    {
      title: 'Тренажер ЕНТ',
      path: RoutesName.untMode,
      imageUrl: "assets/images/icons/unt.png"
    },
    {
      title: 'Турниры по ЕНТ',
      path: RoutesName.tournamentList,
      imageUrl: "assets/images/icons/tournament.png"
    },
    {
      title: 'Игры по ЕНТ',
      path: RoutesName.tournamentList,
      imageUrl: "assets/images/icons/gamepad.png"
    },
    {
      title: 'IU Кошелек',
      path: RoutesName.walletIndex,
      imageUrl: "assets/images/icons/wallet.png"
    },
    {
      title: 'IU Shop',
      path: RoutesName.walletIndex,
      imageUrl: "assets/images/icons/shopping.png"
    },
    {
      title: 'Репититоры',
      path: RoutesName.untMode,
      imageUrl: "assets/images/icons/tutor.png"
    },
    {
      title: 'Форум',
      path: RoutesName.forumList,
      imageUrl: "assets/images/icons/forum.png"
    },
  ]

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faEye = faEye;
    protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
}
