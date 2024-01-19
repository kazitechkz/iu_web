import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {
  getTechSupportTypesAction
} from "../../../shared/store/techSupport/getTechSupportTypes/getTechSupportTypes.action";
import {
  getTechSupportTypesSelector
} from "../../../shared/store/techSupport/getTechSupportTypes/getTechSupportTypes.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  getTechSupportCategoriesAction
} from "../../../shared/store/techSupport/getTechSupportCategories/getTechSupportCategories.action";
import {
  getTechSupportCategoriesSelector
} from "../../../shared/store/techSupport/getTechSupportCategories/getTechSupportCategories.selector";
import {TechSupportType} from "../../../shared/models/techSupportType.model";
import {TechSupportCategory} from "../../../shared/models/techSupportCategory.model";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {
  createTechSupportTicketAction
} from "../../../shared/store/techSupport/createTechSupportTicket/createTechSupportTicket.action";
import {
  CreateTechSupportTicketRequest
} from "../../../shared/store/techSupport/createTechSupportTicket/createTechSupportTicket.request";
import {
  createTechSupportTicketSelector
} from "../../../shared/store/techSupport/createTechSupportTicket/createTechSupportTicket.selector";

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent implements OnInit{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  //Injection
  //Data
  ticketTypes:TechSupportType[] = [];
  ticketCategories:TechSupportCategory[] = [];
  public Editor: any = ClassicEditor;
  //Data
  //FormData
  errors:Record<string, string[]> | null = null;

  createTicket:FormGroup = this.fb.group({
    type_id: new FormControl(null, [
      Validators.required,
    ]),
    category_id: new FormControl(null, [
      Validators.required,
    ]),
    title: new FormControl("", [
      Validators.required,
      Validators.max(255),
    ]),
    message: new FormControl("", [
      Validators.required,
      Validators.max(255),
    ]),
  });
  //FormData
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.getTicketCategories();
    this.getTicketTypes();
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

  onSubmit(){
    if(this.createTicket.valid){
      let request = this.createTicket.getRawValue() as CreateTechSupportTicketRequest;
      this._store.dispatch(createTechSupportTicketAction({requestData:request}));
      this._store.select(createTechSupportTicketSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.createTicket.reset();
        }
      });
    }
  }

  protected readonly ClassicEditor = ClassicEditor;
  protected readonly faCheck = faCheck;
}
