import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {ClassroomsGroupModel} from "../../../models/classroomsGroup.model";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";

@Injectable({
    providedIn: 'root'
})

export class ClassroomsService {
    private _http = inject(HttpClient)

    getClassroomsGroup(): Observable<ResponseData<ClassroomsGroupModel[]>> {
        return this._http.get<ResponseData<ClassroomsGroupModel[]>>(environment.baseUrl + APIRoutesName.teacherClassrooms);
    }

}
