import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {inject, Injectable} from "@angular/core";
import {SessionService} from "../../shared/services/session.service";
import {LocalKeysConstants} from "../constants/local-keys.constants";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  private _sessionService = inject(SessionService)
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._sessionService.getDataFromLocalStorage(LocalKeysConstants.token);

    if (token) {
      req = req.clone({
        withCredentials: true,
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
}
