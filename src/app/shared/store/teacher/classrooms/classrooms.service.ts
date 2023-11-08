import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {ClassroomsGroupModel} from "../../../models/classroomsGroup.model";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {ClassroomsRequest} from "./classrooms.request";

@Injectable({
    providedIn: 'root'
})

export class ClassroomsService {
    private _http = inject(HttpClient)

    getClassroomsGroup(): Observable<ResponseData<ClassroomsGroupModel[]>> {
        return this._http.get<ResponseData<ClassroomsGroupModel[]>>(environment.baseUrl + APIRoutesName.teacherClassrooms);
    }
    getClassroomsGroupByID(id: string): Observable<ResponseData<ClassroomsGroupModel>> {
        return this._http.get<ResponseData<ClassroomsGroupModel>>(environment.baseUrl + APIRoutesName.teacherClassrooms + '/' + id);
    }
    createClassroomsGroup(req: ClassroomsRequest): Observable<ResponseData<boolean>> {
      return this._http.post<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.teacherClassrooms, req)
    }
    updateClassroomsGroup(req: ClassroomsRequest, id: number): Observable<ResponseData<boolean>> {
      return this._http.put<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.teacherClassrooms + '/' + id, req)
    }
    deleteClassroomsGroup(id: number): Observable<ResponseData<boolean>> {
      return this._http.delete<ResponseData<boolean>>(environment.baseUrl + APIRoutesName.teacherClassrooms + '/' + id)
    }
}
