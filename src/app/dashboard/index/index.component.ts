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
//DRIVER JS
import { driver } from "driver.js";

//DRIVER JS
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
  ngOnInit(): void {}




  public menuLists = [
    {
      title: 'STEP_MENU',
      path: StrHelper.getDashboardRouteName(RoutesName.stepRoute),
      imageUrl: "assets/images/icons/1.png"
    },
    {
      title: 'TRAINING_MENU',
      path: RoutesName.untMode,
      imageUrl: "assets/images/icons/2.png"
    },
    {
      title: 'TOURNAMENT_MENU',
      path: RoutesName.tournamentList,
      imageUrl: "assets/images/icons/3.png"
    },
    {
      title: 'UNT_BATTLE_MENU',
      path: RoutesName.battleList,
      imageUrl: "assets/images/icons/4.png"
    },
    {
      title: 'WALLET_MENU',
      path: RoutesName.walletIndex,
      imageUrl: "assets/images/icons/5.png"
    },
    {
      title: 'CAREER_MENU',
      path: RoutesName.careerQuizList,
      imageUrl: "assets/images/icons/6.png"
    },
    {
      title: 'FORUM_MENU',
      path: RoutesName.forumList,
      imageUrl: "assets/images/icons/8.png"
    },
    {
      title: 'SUPPORT_MENU',
      path: RoutesName.myTickets,
      imageUrl: "assets/images/icons/7.png"
    },
  ]

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faEye = faEye;
    protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
}
