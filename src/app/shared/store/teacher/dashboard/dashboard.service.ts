import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {StatByAttemptIdModel} from "../../stat/statByAttemptId/statByAttemptId.action.model";
import {TeacherDashboardStatisticModel} from "../../../models/teacherDashboardStatistic.model";

@Injectable({
    providedIn: 'root'
})

export class DashboardService {
    private _http = inject(HttpClient)
    statDashboard(): Observable<ResponseData<TeacherDashboardStatisticModel>> {
      return this._http.get<ResponseData<TeacherDashboardStatisticModel>>(environment.baseUrl + APIRoutesName.teacherStatDashboard)
    }
}
