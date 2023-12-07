import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../../response_data";
import {TeacherStatsBySubject} from "../../../../models/teacherDashboardStatistic.model";
import {environment} from "../../../../../../environments/environment";
import {APIRoutesName} from "../../../../../core/constants/api-routes.constants";
import {StatBySubjectRequest} from "./stat-by-subject.request";

@Injectable({
    providedIn: 'root'
})

export class StatBySubjectService {
    private _http = inject(HttpClient)
    statBySubjectID(req: StatBySubjectRequest): Observable<ResponseData<TeacherStatsBySubject[]>> {
      return this._http.post<ResponseData<TeacherStatsBySubject[]>>(environment.baseUrl + APIRoutesName.teacherStatBySubjectID, req)
    }
}
