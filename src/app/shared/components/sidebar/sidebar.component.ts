import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {RoutesName} from "../../../core/constants/routes.constants";
import {
  faGraduationCap,
  faHome,
  faHandPointRight,
  faBolt,
  faGamepad,
  faMale,
  faChartLine,
  faUser,
  faToolbox,
  faF,
  faBriefcase,
  faCircleQuestion,
  faSitemap,
  faWallet,
  faRobot,
  faChess,
  faCartShopping,
  faHandshake,
  faMessage,
  faNewspaper,
  faUserCircle,
  faPlay,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {selectSidenavIsOpen} from "../../store/core/sidebar/sidebar.selector";
import {closeSidebarAction} from "../../store/core/sidebar/sidebar.action";
import {StrHelper} from "../../../core/helpers/str.helper";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //@ts-ignore
  isOpen$: Observable<boolean>;
  //@ts-ignore
  isOpenSubscription: Subscription;
  ngOnInit(): void {
      this.isOpen$ = this._store.pipe(select(selectSidenavIsOpen))
  }
  @Input() mobile: boolean = false
  protected readonly RoutesName = RoutesName;
  private _route = inject(Router)
  private _store = inject(Store)

  closeSideNav() {
    this._store.dispatch(closeSidebarAction())
  }

  navigateTo(path: string) {
    this.closeSideNav()
    this._route.navigateByUrl(path).then(r => null)
  }

  public menuLists = [
    {
      title: 'HOME',
      path: RoutesName.dashboard,
      icon: faHome as IconProp
    },
    {
      title: 'PROFILE',
      path: StrHelper.getDashboardRouteName(RoutesName.myProfile),
      icon: faUserCircle as IconProp
    },
    {
      title: 'STEPS',
      path: StrHelper.getDashboardRouteName(RoutesName.stepRoute),
      icon: faGraduationCap as IconProp
    },
    {
      title: 'ENT',
      path: RoutesName.untMode,
      icon: faHandPointRight as IconProp
    },
    {
      title: 'BATTLE_ENT',
      path: RoutesName.battleList,
      icon: faBolt as IconProp
    },
    {
      title: 'TOURNAMENT',
      path: RoutesName.tournamentList,
      icon: faGamepad as IconProp
    },
    {
      title: 'CAREERS',
      path: RoutesName.careerQuizList,
      icon: faBriefcase as IconProp
    },
    {
      title: 'IUTube',
      path: RoutesName.iuTube,
      icon: faPlay as IconProp
    },

    {
      title: 'SUBSCRIPTION',
      path: RoutesName.planMode,
      icon: faHandshake as IconProp
    },
    {
      title: 'RATING_USERS',
      path: RoutesName.walletRating,
      icon: faStar as IconProp
    },
    {
      title: 'WALLET',
      path: RoutesName.cashIndex,
      icon: faWallet as IconProp
    },
    // {
    //   title: 'WALLET',
    //   path: RoutesName.walletIndex,
    //   icon: faWallet as IconProp
    // },
    {
      title: 'STATISTICS',
      path: RoutesName.untStats,
      icon: faChartLine as IconProp
    },
    {
      title: 'MY_QUESTIONS',
      path: RoutesName.myQuestions,
      icon: faCircleQuestion as IconProp
    },
    {
      title: 'MY_CLASSROOMS',
      path: StrHelper.getDashboardRouteName(RoutesName.studentClassrooms),
      icon: faSitemap as IconProp
    },
    {
      title: 'MY_ATTEMPT_SETTINGS',
      path: RoutesName.myAttemptSettings,
      icon: faBriefcase as IconProp
    },
    {
      title: 'NEWS',
      path: RoutesName.allNews,
      icon: faNewspaper as IconProp
    },
    {
      title: 'NOTIFICATION',
      path: RoutesName.notification,
      icon: faMessage as IconProp
    },
    {
      title: 'FORUM',
      path: RoutesName.forumList,
      icon: faF as IconProp
    },
    {
      title: 'TECH_SUPPORT',
      path: RoutesName.myTickets,
      icon: faToolbox as IconProp
    },
    // {
    //   title: 'AI_ADVISE',
    //   path: RoutesName.noPageIndex,
    //   icon: faRobot as IconProp
    // },
    {
      title: 'GAMES',
      path: RoutesName.games,
      icon: faChess as IconProp
    },

  ]
}
