import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {NavigationExtras, Router} from "@angular/router";
import {inject, Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../auth/auth.service";
import {RoutesName} from "../constants/routes.constants";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    private _routerService = inject(Router)
    private _toastrService = inject(ToastrService)
    private _authService = inject(AuthService)

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let self = this;
        return next.handle(req).pipe(
            catchError(error => {
                if (error) {
                    // console.log(error.status)
                    if (error.status === 400) {
                        if (error.error.errors) {
                            Object.values(error.error.errors).forEach(function (elem: any) {
                                self._toastrService.error(elem)
                            })
                            throw error.error.errors;
                        } else {
                            this._toastrService.error(error.error.message, error.error.statusCode);
                        }
                    }
                    if (error.status === 401) {
                        this._authService.logout()
                        this._toastrService.error(error.error.message, error.error.statusCode);
                    }
                  if (error.status === 422) {
                    this._toastrService.error(error.error.message, error.error.statusCode);
                  }
                    if (error.status === 403) {
                        this._toastrService.error(error.error.message, error.error.statusCode);
                    }
                    if (error.status === 404) {
                        this._routerService.navigateByUrl(RoutesName.notFound).then(null)
                    }
                    if (error.status === 500) {
                        this._toastrService.error(error.error.message, error.error.statusCode);
                        //const navigationExtras: NavigationExtras = {state: {error: error.error}}
                        // this.router.navigateByUrl('/server-error', navigationExtras);
                    }
                }
                return throwError(error);
            })
        )
    }
}