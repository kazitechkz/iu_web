import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {SessionService} from "../../services/session.service";
import {LocalKeysConstants} from "../../../core/constants/local-keys.constants";
import {Store} from "@ngrx/store";
import {accountAction} from "../../store/user/account/account.action";
import {getAccountState} from "../../store/user/account/account.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {Router} from "@angular/router";
import {RoutesName} from "../../../core/constants/routes.constants";
import {Me} from "../../models/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;
  private _authService = inject(AuthService)
  private _sessionService = inject(SessionService)
  private _store = inject(Store)
  private _route = inject(Router)
  destroyRef = inject(DestroyRef);
  public user?: Me | null;
  ngOnInit(): void {
    this.me()
  }

  me() {
    this._store.dispatch(accountAction())
    this._store.select(getAccountState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      this.user = item.data
    })
  }

  logout() {
    this._authService.logout()
  }
}
