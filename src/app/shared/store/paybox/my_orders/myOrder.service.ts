import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseData} from "../../response_data";
import {environment} from "../../../../../environments/environment";
import {APIRoutesName} from "../../../../core/constants/api-routes.constants";
import {Plan} from "../../../models/plan.model";
import {MyOrderModel} from "./myOrder.model";
import {MyOrderRequest} from "./myOrder.request";
import {Pagination} from "../../pagination";

@Injectable({
  providedIn: 'root'
})

export class MyOrderService {
  private _http = inject(HttpClient)
  getMyOrders(req: MyOrderRequest): Observable<ResponseData<Pagination<MyOrderModel[]>>> {
    let params = new HttpParams();
    params = params.append("page",req.page.toString());
    return this._http.get<ResponseData<Pagination<MyOrderModel[]>>>(environment.baseUrl + APIRoutesName.myOrders, {params});
  }
}
