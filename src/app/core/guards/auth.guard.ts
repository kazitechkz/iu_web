import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {SessionService} from "../../shared/services/session.service";
import {LocalKeysConstants} from "../constants/local-keys.constants";
import {RoutesName} from "../constants/routes.constants";

export const authGuard: CanActivateFn = (childRoute, state) => {
  const _session = inject(SessionService)
  const _route = inject(Router)
  if (_session.getDataFromLocalStorage(LocalKeysConstants.token) == null) {
    _route.navigateByUrl(RoutesName.loginRoute).then(null)
  }
  return _session.getDataFromLocalStorage(LocalKeysConstants.token) != null;
};
