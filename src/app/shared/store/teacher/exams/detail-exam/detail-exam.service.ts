import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AttemptSetting} from "../../../../models/attemptSetting.model";
import {ResponseData} from "../../../response_data";
import {environment} from "../../../../../../environments/environment";
import {APIRoutesName} from "../../../../../core/constants/api-routes.constants";

@Injectable({
    providedIn: 'root'
})

export class DetailExamService {
    private _http = inject(HttpClient)
    getDetailExamByID(id: number): Observable<ResponseData<AttemptSetting>> {
      return this._http.get<ResponseData<AttemptSetting>>(environment.baseUrl + APIRoutesName.teacherGetDetailExamByID + '/' + id)
    }
}
