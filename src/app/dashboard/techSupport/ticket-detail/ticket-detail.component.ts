import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ActivatedRoute} from "@angular/router";
import {
  GetTechSupportTicketDetailModel
} from "../../../shared/store/techSupport/getTechSupportTicketDetail/getTechSupportTicketDetail.model";
import {
  getTechSupportTicketDetailAction
} from "../../../shared/store/techSupport/getTechSupportTicketDetail/getTechSupportTicketDetail.action";
import {
  GetTechSupportTicketDetailRequest
} from "../../../shared/store/techSupport/getTechSupportTicketDetail/getTechSupportTicketDetail.request";
import {
  getTechSupportTicketDetailSelector
} from "../../../shared/store/techSupport/getTechSupportTicketDetail/getTechSupportTicketDetail.selector";
import {RoutesName} from "../../../core/constants/routes.constants";
import * as moment from 'moment';
import {faCheckCircle, faLock, faTimesCircle, faUnlock} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private _route = inject(ActivatedRoute);
  //Injection
  //Data
    requestData:GetTechSupportTicketDetailRequest = {
    ticket_id : 0,
    page : 1
  }
  //@ts-ignore
  ticketMessageModel:GetTechSupportTicketDetailModel;
  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.requestData.ticket_id = params["id"];
      this.getTicketAndMessages();
    });
  }

  getTicketAndMessages(){
    this._store.dispatch(getTechSupportTicketDetailAction({requestData:this.requestData}));
    this._store.select(getTechSupportTicketDetailSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.ticketMessageModel = item.data;
      }
    });
  }

  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
  protected readonly faLock = faLock;
  protected readonly faUnlock = faUnlock;
  protected readonly faCheckCircle = faCheckCircle;
  protected readonly faTimesCircle = faTimesCircle;
}
