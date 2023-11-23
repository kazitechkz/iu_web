import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {StatByAttemptIdModel} from "../../stat/statByAttemptId/statByAttemptId.action.model";

@Injectable({
    providedIn: 'root'
})

export class StatByAttemptService {
    private _http = inject(HttpClient)
    statExamByID(attempt_id: number, user_id: number): Observable<ResponseData<StatByAttemptIdModel>> {
      return this._http.get<ResponseData<StatByAttemptIdModel>>(environment.baseUrl + APIRoutesName.teacherStatExamByID + '/' + attempt_id + '/' + user_id)
    }
}
