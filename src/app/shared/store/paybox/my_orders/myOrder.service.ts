import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Plan} from "../../../models/plan.model";
import {MyOrderModel} from "./myOrder.model";
import {MyOrderRequest} from "./myOrder.request";

@Injectable({
  providedIn: 'root'
})

export class MyOrderService {
  private _http = inject(HttpClient)
  getMyOrders(): Observable<ResponseData<MyOrderModel[]>> {
    return this._http.get<ResponseData<MyOrderModel[]>>(environment.baseUrl + APIRoutesName.myOrders);
  }
}
