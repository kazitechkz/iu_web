import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {ColorConstants} from "../../core/constants/color.constants";
import {faChevronLeft, faChevronRight, faEye} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../core/constants/routes.constants";
import {StrHelper} from "../../core/helpers/str.helper";
import {CalendarView,} from 'angular-calendar';
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
      title: 'DASHBOARD_CONTENT_TO_UNT',
      path: StrHelper.getDashboardRouteName(RoutesName.stepRoute),
      imageUrl: "assets/images/icons/content.webp"
    },
    {
      title: 'DASHBOARD_TRAINING_TO_UNT',
      path: RoutesName.untMode,
      imageUrl: "assets/images/icons/unt.webp"
    },
    {
      title: 'DASHBOARD_TOURNAMENT_TO_UNT',
      path: RoutesName.tournamentList,
      imageUrl: "assets/images/icons/tournament.webp"
    },
    {
      title: 'DASHBOARD_GAME_TO_UNT',
      path: RoutesName.noPageIndex,
      imageUrl: "assets/images/icons/gamepad.webp"
    },
    {
      title: 'DASHBOARD_WALLET',
      path: RoutesName.walletIndex,
      imageUrl: "assets/images/icons/wallet.webp"
    },
    {
      title: 'DASHBOARD_SHOP',
      path: RoutesName.noPageIndex,
      imageUrl: "assets/images/icons/shopping.webp"
    },
    {
      title: 'DASHBOARD_COUCHERS',
      path: RoutesName.noPageIndex,
      imageUrl: "assets/images/icons/tutor.webp"
    },
    {
      title: 'DASHBOARD_FORUM',
      path: RoutesName.forumList,
      imageUrl: "assets/images/icons/forum.webp"
    },
  ]

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faEye = faEye;
    protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
}
