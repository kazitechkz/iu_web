import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectSidenavIsOpen} from "../../store/core/sidebar/sidebar.selector";
import {Router} from "@angular/router";
import {closeSidebarAction} from "../../store/core/sidebar/sidebar.action";
import {
  faHome, faSitemap
} from "@fortawesome/free-solid-svg-icons";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {StrHelper} from "../../../core/helpers/str.helper";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-teacher-sidebar',
  templateUrl: './teacher-sidebar.component.html',
  styleUrls: ['./teacher-sidebar.component.scss']
})
export class TeacherSidebarComponent implements OnInit {
  //@ts-ignore
  isOpen$: Observable<boolean>;
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
      path: RoutesName.teacher,
      icon: faHome as IconProp
    },
    {
      title: 'MY_CLASSROOMS',
      path: StrHelper.getTeacherRouteName(RoutesName.teacherClassrooms),
      icon: faSitemap as IconProp
    },
  ]
}
