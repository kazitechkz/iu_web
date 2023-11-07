import {CanActivateFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import {SessionService} from "../../shared/services/session.service";
import {LocalKeysConstants} from "../constants/local-keys.constants";
import {RoutesName} from "../constants/routes.constants";

export const guestGuard: CanActivateFn = (route, state): boolean | UrlTree => {
  let _route = inject(Router)
  let _session = inject(SessionService)
  if (_session.getDataFromLocalStorage(LocalKeysConstants.token) == null) {
    return true;
  } else {
    return _route.parseUrl('/')
  }
};
