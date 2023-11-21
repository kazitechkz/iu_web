import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  GetAllAnnouncementsAction
} from "../../../shared/store/announcement/getAllAnnouncements/getAllAnnouncements.action";
import {
  getNotificationAllAction
} from "../../../shared/store/notification/getNotificationAll/getNotificationAll.action";
import {AllAttemptRequest} from "../../../shared/store/attempt/allAttempt/allAttempt.request";
import {
  GetNotificationAllRequest
} from "../../../shared/store/notification/getNotificationAll/getNotificationAll.request";
import {Pagination} from "../../../shared/store/pagination";
import {
  getNotificationAllSelector
} from "../../../shared/store/notification/getNotificationAll/getNotificationAll.selector";
import {NotificationModel} from "../../../shared/models/notification.model";
import * as moment from "moment";
import {myNotificationIdsAction} from "../../../shared/store/notification/myNotificationIds/myNotificationIds.action";
import {
  myNotificationIdsSelector
} from "../../../shared/store/notification/myNotificationIds/myNotificationIds.selector";
import {checkNotificationAction} from "../../../shared/store/notification/checkNotification/checkNotification.action";
import {
  checkNotificationSelector
} from "../../../shared/store/notification/checkNotification/checkNotification.selector";
import {
  getNotificationTypeAllAction
} from "../../../shared/store/notification/getNotificationTypeAll/getNotificationTypeAll.action";
import {
  getNotificationTypeAllSelector
} from "../../../shared/store/notification/getNotificationTypeAll/getNotificationTypeAll.selector";
import {NotificationType} from "../../../shared/models/notificationType.model";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit,OnDestroy{
//Injection Start
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private destroyRef:DestroyRef = inject(DestroyRef);
  //Injection End
  //Data
  public params = {page:1,status:null,search:null,type_id:null}
  //@ts-ignore
  public notificationPagination:Pagination<NotificationModel[]>
  public notificationIds:number[] = [];
  public notificationType:NotificationType[] = [];
  public activeNotification: NotificationModel|null = null;
  //Data
  ngOnInit(): void {
    this.getAllNotification();
    this.getMyNotificationIds();
    this.getMyNotificationTypes();
  }

  ngOnDestroy(): void {

  }

  selectActiveNotification( notification:NotificationModel){
    this.activeNotification = notification;
    if(this.notificationIds.indexOf(notification.id) == -1){
      this.checkNotification(notification.id);
    }
  }

  pageChanged($event:number){
    this.params.page = $event;
    this.getAllNotification();
  }


  checkNotification(id:number){
    this._store.dispatch(checkNotificationAction({requestData:id}));
    this._store.select(checkNotificationSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.getMyNotificationIds();
      }
    });
  }

  getAllNotification(){
    let pageRequest:GetNotificationAllRequest = {
      page:1,
      status:null,
      search:null,
      type_id:null,
    };
    pageRequest = Object.assign(pageRequest,this.params);
    pageRequest = pageRequest as GetNotificationAllRequest;
    this._store.dispatch(getNotificationAllAction({requestData:pageRequest}));
    this._store.select(getNotificationAllSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.notificationPagination = item.data;
      }
    });
  }

  setParamStatus($event:string){
    // @ts-ignore
    this.params.status = $event;
    this.getAllNotification();
  }
  setParamsType($event:number){
    if($event){
      // @ts-ignore
      this.params.type_id = $event;
    }
    else{
      this.params.type_id = null;
    }
    this.getAllNotification();
  }
  searchPage(){
    this.getAllNotification();
  }

  getMyNotificationIds(){
    this._store.dispatch(myNotificationIdsAction());
    this._store.select(myNotificationIdsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.notificationIds = item.data;
      }
    });
  }

  getMyNotificationTypes(){
    this._store.dispatch(getNotificationTypeAllAction());
    this._store.select(getNotificationTypeAllSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.notificationType = item.data;
      }
    });
  }


  protected readonly moment = moment;
}
