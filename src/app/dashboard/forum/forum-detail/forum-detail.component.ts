import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {getAttemptAction} from "../../../shared/store/attempt/getAttempt/getAttempt.action";
import {getAttemptSelector} from "../../../shared/store/attempt/getAttempt/getAttempt.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getForumAction} from "../../../shared/store/forum/getForum/getForum.action";
import {getForumSelector} from "../../../shared/store/forum/getForum/getForum.selector";
import {GetForumModel} from "../../../shared/store/forum/getForum/getForum.model";
import {faMessage} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";
import * as moment from "moment/moment";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {getForumDiscussAction} from "../../../shared/store/forum/getForumDiscuss/getForumDiscuss.action";
import {GetForumDiscussModel} from "../../../shared/store/forum/getForumDiscuss/getForumDiscuss.model";
import {AllForumRequest} from "../../../shared/store/forum/allForum/allForum.request";
import {GetForumDiscussRequest} from "../../../shared/store/forum/getForumDiscuss/getForumDiscuss.request";
import {getForumDiscussSelector} from "../../../shared/store/forum/getForumDiscuss/getForumDiscuss.selector";
import {Collapse, initTE} from "tw-elements";

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.scss']
})
export class ForumDetailComponent implements OnInit,OnDestroy{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute)
  //Injection
  //Data
    //@ts-ignore
    forumDetail:GetForumModel;
  //@ts-ignore
    forumDiscuss:GetForumDiscussModel;
    params = {forum_id:0, type:"", page:1}
  //Data
  ngOnInit(): void {
    initTE({ Collapse });
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.params.forum_id = params["id"];
      this.getForumDetail(params["id"]);
      this.getForumDiscusses();
    })
  }

  getForumDetail(forum_id:number){
    this._store.dispatch(getForumAction({requestData:forum_id}));
    this._store.select(getForumSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.forumDetail = item.data;
      }
    })
  }

  getForumDiscusses(){
    let request = Object.assign({},this.params);
    request = request as GetForumDiscussRequest;
    this._store.dispatch(getForumDiscussAction({requestData:request}));
    this._store.select(getForumDiscussSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.forumDiscuss = item.data;
      }
    })
  }
  pageChanged($event:number){
    this.params.page = $event;
    this.getForumDiscusses();
  }
  ngOnDestroy(): void {
  }


  protected readonly faMessage = faMessage;
  protected readonly RoutesName = RoutesName;
  protected readonly moment = moment;
  protected readonly ImageHelper = ImageHelper;
}
