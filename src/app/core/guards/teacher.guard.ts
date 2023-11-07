import {CanActivateChildFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import {SessionService} from "../../shared/services/session.service";
import {LocalKeysConstants} from "../constants/local-keys.constants";
import {RoutesName} from "../constants/routes.constants";
import {Me} from "../../shared/models/user.model";

export const teacherGuard: CanActivateChildFn = (childRoute, state): boolean | UrlTree => {
  const _session = inject(SessionService)
  const _route = inject(Router)
  let user: Me = _session.getDataFromLocalStorage(LocalKeysConstants.user)
  if (user == null) {
    return _route.parseUrl(RoutesName.loginRoute)
  }
  if (user.role == 'teacher') {
    return true
  } else {
    return _route.parseUrl(RoutesName.notFound)
  }
};
