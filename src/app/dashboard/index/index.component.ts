import {Component, TemplateRef, ViewChild} from '@angular/core';
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
@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {

    protected readonly ColorConstants = ColorConstants;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();


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
}
