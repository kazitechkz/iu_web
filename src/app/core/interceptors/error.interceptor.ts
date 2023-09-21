import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {NavigationExtras, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router, private toastr: ToastrService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let self = this;
        return next.handle(req).pipe(
            catchError(error => {
                if (error) {
                    // console.log(error)
                    if (error.status === 400) {
                        if (error.error.errors) {
                            Object.values(error.error.errors).forEach(function (elem: any) {
                                self.toastr.error(elem)
                            })
                            throw error.error.errors;
                        } else {
                            this.toastr.error(error.error.message, error.error.statusCode);
                        }
                    }
                    if (error.status === 401) {
                        this.toastr.error(error.error.message, error.error.statusCode);
                    }
                  if (error.status === 422) {
                    this.toastr.error(error.error.message, error.error.statusCode);
                  }
                    if (error.status === 403) {
                        this.toastr.error(error.error.message, error.error.statusCode);
                    }
                    if (error.status === 404) {
                        this.router.navigateByUrl('/not-found');
                    }
                    if (error.status === 500) {
                        this.toastr.error(error.error.message, error.error.statusCode);
                        //const navigationExtras: NavigationExtras = {state: {error: error.error}}
                        // this.router.navigateByUrl('/server-error', navigationExtras);
                    }
                }
                return throwError(error);
            })
        )
    }
}
