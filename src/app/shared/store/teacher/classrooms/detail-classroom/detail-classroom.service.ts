import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../../response_data";
import {DetailClassroomModel} from "../../../../models/classroomsGroup.model";
import {environment} from "../../../../../../environments/environment";
import {APIRoutesName} from "../../../../../core/constants/api-routes.constants";

@Injectable({
    providedIn: 'root'
})

export class DetailClassroomService {
    private _http = inject(HttpClient)

    getDetailClassroom(id: number): Observable<ResponseData<DetailClassroomModel[]>> {
        return this._http.get<ResponseData<DetailClassroomModel[]>>(environment.baseUrl + APIRoutesName.teacherDetailClassroom + '/' +  id);
    }
}
