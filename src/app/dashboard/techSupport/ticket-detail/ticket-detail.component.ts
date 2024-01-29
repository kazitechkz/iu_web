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
import {faCheck, faCheckCircle, faLock, faTimesCircle, faUnlock} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {
  CreateTechSupportTicketRequest
} from "../../../shared/store/techSupport/createTechSupportTicket/createTechSupportTicket.request";
import {
  createTechSupportTicketAction
} from "../../../shared/store/techSupport/createTechSupportTicket/createTechSupportTicket.action";
import {
  createTechSupportTicketSelector
} from "../../../shared/store/techSupport/createTechSupportTicket/createTechSupportTicket.selector";
import {
  CreateTechSupportMessageRequest
} from "../../../shared/store/techSupport/createTechSupportMessage/createTechSupportMessage.request";
import {
  createTechSupportMessageAction
} from "../../../shared/store/techSupport/createTechSupportMessage/createTechSupportMessage.action";
import {
  createTechSupportMessageSelector
} from "../../../shared/store/techSupport/createTechSupportMessage/createTechSupportMessage.selector";
import {
  GetMyTechSupportTicketsRequest
} from "../../../shared/store/techSupport/getMyTechSupportTickets/getMyTechSupportTickets.request";
import {
  closeTechSupportTicketAction
} from "../../../shared/store/techSupport/closeTechSupportTicket/closeTechSupportTicket.action";
import {
  closeTechSupportTicketSelector
} from "../../../shared/store/techSupport/closeTechSupportTicket/closeTechSupportTicket.selector";
import {
  CloseTechSupportTicketRequest
} from "../../../shared/store/techSupport/closeTechSupportTicket/closeTechSupportTicket.request";

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
  public Editor: any = ClassicEditor;
  createMessageForm:FormGroup = this.fb.group({
    ticket_id: new FormControl(null, [
      Validators.required,
    ]),
    message: new FormControl("", [
      Validators.required,
      Validators.max(255),
    ]),
  });
  //@ts-ignore
  ticketMessageModel:GetTechSupportTicketDetailModel;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.requestData.ticket_id = params["id"];
      this.getTicketAndMessages();
    });
  }
  changePage(page:number){
    this.requestData.page = page;
    this.getTicketAndMessages();
  }

  closeAndMarkResolved(is_resolved:boolean){
    let request = {ticket_id: this.requestData.ticket_id, is_closed:true,is_resolved:is_resolved};
    this.closeTicket(request as CloseTechSupportTicketRequest);
  }

  closeTicket(request:CloseTechSupportTicketRequest){
    this._store.dispatch(closeTechSupportTicketAction({requestData:request}));
    this._store.select(closeTechSupportTicketSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.getTicketAndMessages();
      }
    });
  }


  getTicketAndMessages(){
    let request = Object.assign({},this.requestData);
    request = request as GetTechSupportTicketDetailRequest;
    this._store.dispatch(getTechSupportTicketDetailAction({requestData:request}));
    this._store.select(getTechSupportTicketDetailSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.ticketMessageModel = item.data;
        this.createMessageForm.controls["ticket_id"].setValue(item.data.ticket.id);
      }
    });
  }

  onSubmit(){
    if(this.createMessageForm.valid){
      let request = this.createMessageForm.getRawValue() as CreateTechSupportMessageRequest;
      this._store.dispatch(createTechSupportMessageAction({requestData:request}));
      this._store.select(createTechSupportMessageSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.getTicketAndMessages();
          this.createMessageForm.reset();
        }
      });
    }
  }

  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
  protected readonly faLock = faLock;
  protected readonly faUnlock = faUnlock;
  protected readonly faCheckCircle = faCheckCircle;
  protected readonly faTimesCircle = faTimesCircle;
    protected readonly ImageHelper = ImageHelper;
  protected readonly ClassicEditor = ClassicEditor;
  protected readonly faCheck = faCheck;
}
