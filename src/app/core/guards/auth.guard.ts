import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "../../shared/services/user.service";
import {map} from "rxjs";
import {AuthService} from "../../auth/auth.service";
import {SessionService} from "../../shared/services/session.service";
import {LocalKeysConstants} from "../constants/local-keys.constants";

export const authGuard: CanActivateChildFn = (childRoute, state) => {
  const _authService = inject(AuthService)
  const _session = inject(SessionService)
  const _route = inject(Router)
  return _session.getDataFromLocalStorage(LocalKeysConstants.token) != null;
};
