import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {ClassroomsGroupModel} from "../../../models/classroomsGroup.model";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {ExamsRequest} from "./exams.request";

@Injectable({
    providedIn: 'root'
})

export class ExamsService {
    private _http = inject(HttpClient)
    deleteExamByID(id: number): Observable<ResponseData<boolean>> {
      return this._http.delete<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.teacherDeleteExamByID + '/' + id)
    }
    deleteUNTExamByID(id: number): Observable<ResponseData<boolean>> {
      return this._http.delete<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.teacherDeleteUNTExamByID + '/' + id)
    }
}
