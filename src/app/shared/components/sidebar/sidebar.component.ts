import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {RoutesName} from "../../../core/constants/routes.constants";
import {faGraduationCap, faHome, faHandPointRight, faBolt, faGamepad, faMale, faChartLine, faUser, faF} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";
import {selectSidenavIsOpen} from "../../store/core/sidebar/sidebar.selector";
import {closeSidebarAction} from "../../store/core/sidebar/sidebar.action";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
      throw new Error('Method not implemented.');
  }
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
      title: 'Главная',
      path: '#',
      icon: faHome as IconProp
    },
    {
      title: 'Обучение',
      path: RoutesName.stepRoute,
      icon: faGraduationCap as IconProp
    },
    {
      title: 'Тренажер ЕНТ',
      path: RoutesName.untMode,
      icon: faHandPointRight as IconProp
    },
    {
      title: 'Battle ЕНТ',
      path: '#',
      icon: faBolt as IconProp
    },
    {
      title: 'Турнир',
      path: RoutesName.tournamentList,
      icon: faGamepad as IconProp
    },
    {
      title: 'Репетитор',
      path: RoutesName.tournamentList,
      icon: faMale as IconProp
    },
    {
      title: 'Статистика',
      path: RoutesName.untStats,
      icon: faChartLine as IconProp
    },
    {
      title: 'Профиль',
      path: RoutesName.untStats,
      icon: faUser as IconProp
    },
    {
      title: 'Форум',
      path: RoutesName.untStats,
      icon: faF as IconProp
    }
  ]
}
