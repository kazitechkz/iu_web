import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TeacherStatsByUser} from "../../../../models/teacherDashboardStatistic.model";
import { environment } from "src/environments/environment";
import {APIRoutesName} from "../../../../../core/constants/api-routes.constants";
import {ResponseData} from "../../../response_data";
import {StatByUserRequest} from "./stat-by-user.request";

@Injectable({
    providedIn: 'root'
})

export class StatByUserService {
    private _http = inject(HttpClient)
    statByUser(req: StatByUserRequest): Observable<ResponseData<TeacherStatsByUser>> {
      return this._http.get<ResponseData<TeacherStatsByUser>>(environment.baseUrl + APIRoutesName.teacherStatByUser + '/' + req.user_id + '?page=' + req.page)
    }
}
