import {CanActivateChildFn, Router, UrlTree} from '@angular/router';
import {inject} from "@angular/core";
import {SessionService} from "../../shared/services/session.service";
import {Me} from "../../shared/models/user.model";
import {LocalKeysConstants} from "../constants/local-keys.constants";
import {RoutesName} from "../constants/routes.constants";

export const studentGuard: CanActivateChildFn = (childRoute, state): boolean | UrlTree => {
  const _session = inject(SessionService);
  const _route = inject(Router);
  let user: Me = _session.getDataFromLocalStorage(LocalKeysConstants.user);
  if (user == null) {
    return _route.parseUrl(RoutesName.loginRoute)
  }
  if (user.role == 'student') {
    let redirectUrl = _session.getDataFromLocalStorage("redirectTo");
    if(redirectUrl){
        _session.removeDataFromLocalStorage("redirectTo");
        return _route.parseUrl(redirectUrl)
    }
    else{
        return true
    }
  } else {
    return _route.parseUrl(RoutesName.notFound)
  }
};
