import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {SessionService} from "../../services/session.service";
import {LocalKeysConstants} from "../../../core/constants/local-keys.constants";
import {select, Store} from "@ngrx/store";
import {accountAction} from "../../store/user/account/account.action";
import {getAccountState} from "../../store/user/account/account.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {Router} from "@angular/router";
import {RoutesName} from "../../../core/constants/routes.constants";
import {Me} from "../../models/user.model";
import {GlobalTranslateService} from "../../services/globalTranslate.service";
import {Observable} from "rxjs";
import {selectSidenavIsOpen} from "../../store/core/sidebar/sidebar.selector";
import {openSidebarAction} from "../../store/core/sidebar/sidebar.action";
import {StrHelper} from "../../../core/helpers/str.helper";
import {faBell, faMessage} from "@fortawesome/free-solid-svg-icons";
import {getUnreadMessageCountAction} from "../../store/notification/getUnreadMessageCount/getUnreadMessageCount.action";
import {
  getUnreadMessageCountSelector
} from "../../store/notification/getUnreadMessageCount/getUnreadMessageCount.selector";
import {ImageHelper} from "../../../core/helpers/image.helper";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  //@ts-ignore
  sideBar$: Observable<boolean>;
  isOpen: boolean = false
  localeDropdown: boolean = false
  private _authService = inject(AuthService)
  public translate = inject(GlobalTranslateService)
  private _store = inject(Store)
  destroyRef = inject(DestroyRef);
  public user?: Me | null;
  countMessage: number | null = null;
  ngOnInit(): void {
    this.sideBar$ = this._store.pipe(autoUnsubscribe(this.destroyRef), select(selectSidenavIsOpen))
    this.translate.getCurrentLang()
    this.getUnreadMessage();
    this.me()
  }

  openSideNav() {
    this._store.dispatch(openSidebarAction())
  }

  me() {
    this._store.dispatch(accountAction())
    this._store.select(getAccountState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      this.user = item.data
    })
  }

  getUnreadMessage(){
    this._store.dispatch(getUnreadMessageCountAction())
    this._store.select(getUnreadMessageCountSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      this.countMessage = item.data
    })
  }

  changeLang(lang: string) {
    this.translate.onLangChange(lang)
    this.localeDropdown = !this.localeDropdown
  }

  logout() {
    this._authService.logout()
  }

    protected readonly StrHelper = StrHelper;
  protected readonly RoutesName = RoutesName;
  protected readonly faMessage = faMessage;
  protected readonly faBell = faBell;
    protected readonly Image = Image;
  protected readonly ImageHelper = ImageHelper;
}
