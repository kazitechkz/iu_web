import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {TechSupportTicket} from "../../../shared/models/techSupportTicket.model";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  getMyTechSupportTicketsAction
} from "../../../shared/store/techSupport/getMyTechSupportTickets/getMyTechSupportTickets.action";
import {
  GetMyTechSupportTicketsRequest
} from "../../../shared/store/techSupport/getMyTechSupportTickets/getMyTechSupportTickets.request";
import {
  getMyTechSupportTicketsSelector
} from "../../../shared/store/techSupport/getMyTechSupportTickets/getMyTechSupportTickets.selector";
import {TechSupportType} from "../../../shared/models/techSupportType.model";
import {
  getTechSupportTypesAction
} from "../../../shared/store/techSupport/getTechSupportTypes/getTechSupportTypes.action";
import {
  getTechSupportTypesSelector
} from "../../../shared/store/techSupport/getTechSupportTypes/getTechSupportTypes.selector";
import {TechSupportCategory} from "../../../shared/models/techSupportCategory.model";
import {
  getTechSupportCategoriesAction
} from "../../../shared/store/techSupport/getTechSupportCategories/getTechSupportCategories.action";
import {
  getTechSupportCategoriesSelector
} from "../../../shared/store/techSupport/getTechSupportCategories/getTechSupportCategories.selector";
import {Pagination} from "../../../shared/store/pagination";
import * as moment from 'moment';
import {
  Collapse,
  initTE,
} from "tw-elements";
import {RoutesName} from "../../../core/constants/routes.constants";
import {StrHelper} from "../../../core/helpers/str.helper";
@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  //Injection
  //Data
  //@ts-ignore
  tickets:Pagination<TechSupportTicket[]>;
  ticketTypes:TechSupportType[] = [];
  ticketCategories:TechSupportCategory[] = [];
  requestData:GetMyTechSupportTicketsRequest = {is_closed:null,is_resolved:null,is_answered:null,type_id:null,category_id:null,search:null,page:1}
  ngOnInit(): void {
    this.getTicketCategories();
    this.getTicketTypes();
    this.getMyTickets();
    initTE({ Collapse });
  }

  getTicketTypes(){
    this._store.dispatch(getTechSupportTypesAction());
    this._store.select(getTechSupportTypesSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.ticketTypes = item.data;
      }
    });
  }
  getTicketCategories(){
    this._store.dispatch(getTechSupportCategoriesAction());
    this._store.select(getTechSupportCategoriesSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.ticketCategories = item.data;
      }
    });
  }


  getMyTickets(){
    let request = Object.assign({},this.requestData);
    request = request as GetMyTechSupportTicketsRequest;
    this._store.dispatch(getMyTechSupportTicketsAction({requestData:request}));
    this._store.select(getMyTechSupportTicketsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.tickets = item.data;
      }
    });
  };
  setType(type_id:number|null){
    this.requestData.type_id = type_id;
    this.getMyTickets();
  }
  setCategory(category_id:number|null){
    this.requestData.category_id = category_id;
    this.getMyTickets();
  }
  changePage(page:number){
    this.requestData.page = page;
    this.getMyTickets();
  }
  setIsAnswered(is_answered:boolean|null){
    this.requestData.is_answered = is_answered;
    this.getMyTickets();
  }
  setIsResolved(is_resolved:boolean|null){
    this.requestData.is_resolved = is_resolved;
    this.getMyTickets();
  }
  setIsClosed(is_closed:boolean|null){
    this.requestData.is_closed = is_closed;
    this.getMyTickets();
  }


  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
}
