import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {TeacherOwnStudent} from "../../../models/user.model";

@Injectable({
    providedIn: 'root'
})

export class MyStudentsService {
    private _http = inject(HttpClient)
    getMyStudents(): Observable<ResponseData<TeacherOwnStudent[]>> {
      return this._http.get<ResponseData<TeacherOwnStudent[]>>(environment.baseUrl + APIRoutesName.teacherMyStudents)
    }
}
