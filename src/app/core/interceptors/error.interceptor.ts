import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {NavigationExtras, Router} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../auth/auth.service";
import {RoutesName} from "../constants/routes.constants";
import {TwNotification} from "ng-tw";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    private _routerService = inject(Router)
    private _toastrService = inject(ToastrService)
    private _authService = inject(AuthService)
    private _notification = inject(TwNotification)

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let self = this;
        return next.handle(req).pipe(
            catchError(error => {
                if (error) {
                    // console.log(error.status)
                    if (error.status === 400) {
                        if (error.error.errors) {
                            Object.values(error.error.errors).forEach(function (elem: any) {
                              self._notification.show({ type: 'danger', title: 'Error', text: elem })
                                // self._toastrService.error(elem)
                            })
                            throw error.error.errors;
                        } else {
                          this._notification.show({ type: 'danger', title: 'Error', text: error.error.message })
                            // this._toastrService.error(error.error.message, error.error.statusCode);
                        }
                    }
                    if (error.status === 401) {
                      this._authService.logout()
                      this._notification.show({ type: 'danger', title: 'Error', text: error.error.message })
                        // this._toastrService.error(error.error.message, error.error.statusCode);
                    }
                  if (error.status === 422) {
                    this._notification.show({ type: 'danger', title: 'Error', text: error.error.message })
                    // this._toastrService.error(error.error.message, error.error.statusCode);
                  }
                    if (error.status === 403) {
                      if (error.error.errors) {
                        this._notification.show({ type: 'danger', title: 'Error', text: error.error.errors })
                        this._notification.show({ type: 'danger', title: 'Error', text: error.error.message })
                        // this._toastrService.error(error.error.errors, error.error.statusCode);
                        // this._toastrService.error(error.errors.message, error.error.statusCode);
                      } else {
                        this._notification.show({ type: 'danger', title: 'Error', text: error.error.message })
                        // this._toastrService.error(error.error.message, error.error.statusCode);
                      }
                        // this._toastrService.error(error.error.message, error.error.statusCode);
                    }
                    if (error.status === 404) {
                        this._routerService.navigateByUrl(RoutesName.notFound).then(null)
                    }
                    if (error.status === 500) {
                      if (error.error.errors) {
                        this._notification.show({ type: 'danger', title: 'Error', text: error.error.errors })
                        this._notification.show({ type: 'danger', title: 'Error', text: error.error.message })
                        // this._toastrService.error(error.error.errors, error.error.statusCode);
                        // this._toastrService.error(error.errors.message, error.error.statusCode);
                      } else {
                        this._notification.show({ type: 'danger', title: 'Error', text: error.error.message })
                        // this._toastrService.error(error.error.message, error.error.statusCode);
                      }
                        //const navigationExtras: NavigationExtras = {state: {error: error.error}}
                        // this.router.navigateByUrl('/server-error', navigationExtras);
                    }
                }
                return throwError(error);
            })
        )
    }
}
