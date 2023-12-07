import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../../response_data";
import {TeacherStatsByUNT} from "../../../../models/teacherDashboardStatistic.model";
import {environment} from "../../../../../../environments/environment";
import {APIRoutesName} from "../../../../../core/constants/api-routes.constants";
import {StatByUntRequest} from "./stat-by-unt.request";

@Injectable({
    providedIn: 'root'
})

export class StatByUntService {
    private _http = inject(HttpClient)
    statByUNT(req: StatByUntRequest): Observable<ResponseData<TeacherStatsByUNT[]>> {
      return this._http.post<ResponseData<TeacherStatsByUNT[]>>(environment.baseUrl + APIRoutesName.teacherStatByUNT, req)
    }
}
