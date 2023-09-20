import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {BusyService} from "../../shared/services/busy.service";
import {finalize, Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private busyService: BusyService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (request.method === 'POST') {
            return next.handle(request);
        }
        if (request.method === 'DELETE') {
            return next.handle(request);
        }
        this.busyService.busy();
        return next.handle(request).pipe(
            finalize(() => {
                this.busyService.idle();
            })
        );
    }
}
