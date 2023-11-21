import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {AnnouncementGroup} from "../../../models/announcementGroup.model";

@Injectable({
  providedIn: 'root'
})

export class GetAllAnnouncementsService {
  private _http = inject(HttpClient)

  getAllAnnouncements(): Observable<ResponseData<AnnouncementGroup[]>> {
    return this._http.get<ResponseData<AnnouncementGroup[]>>(environment.baseUrl + APIRoutesName.getAllAnnouncements);
  }

}
