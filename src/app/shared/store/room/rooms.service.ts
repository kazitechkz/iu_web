import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClassroomModel} from "../../models/classroom.model";
import {ResponseData} from "../response_data";
import {environment} from "../../../../environments/environment";
import {APIRoutesName} from "../../../core/constants/api-routes.constants";

@Injectable({
    providedIn: 'root'
})

export class RoomsService {
    private _http = inject(HttpClient)

    getRooms(): Observable<ResponseData<ClassroomModel[]>> {
        return this._http.get<ResponseData<ClassroomModel[]>>(environment.baseUrl + APIRoutesName.studentClassrooms);
    }

    joinRooms(promo_code: string): Observable<ResponseData<boolean>> {
        return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.studentClassrooms, promo_code);
    }

    deleteRooms(id: number): Observable<ResponseData<boolean>> {
        return this._http.delete<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.studentClassrooms + '/' + id);
    }
}
