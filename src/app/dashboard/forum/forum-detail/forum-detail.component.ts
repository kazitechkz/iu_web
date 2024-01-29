import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {getAttemptAction} from "../../../shared/store/attempt/getAttempt/getAttempt.action";
import {getAttemptSelector} from "../../../shared/store/attempt/getAttempt/getAttempt.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getForumAction} from "../../../shared/store/forum/getForum/getForum.action";
import {getForumSelector} from "../../../shared/store/forum/getForum/getForum.selector";
import {GetForumModel} from "../../../shared/store/forum/getForum/getForum.model";
import {
  faCheck,
  faMessage,
  faMinus,
  faPlus,
  faPlusCircle,
  faThumbsDown,
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";
import * as moment from "moment/moment";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {getForumDiscussAction} from "../../../shared/store/forum/getForumDiscuss/getForumDiscuss.action";
import {GetForumDiscussModel} from "../../../shared/store/forum/getForumDiscuss/getForumDiscuss.model";
import {GetForumDiscussRequest} from "../../../shared/store/forum/getForumDiscuss/getForumDiscuss.request";
import {getForumDiscussSelector} from "../../../shared/store/forum/getForumDiscuss/getForumDiscuss.selector";
import {Collapse, initTE} from "tw-elements";
import {RatingForumRequest} from "../../../shared/store/forum/ratingForum/ratingForum.request";
import {clearRatingForumAction, ratingForumAction} from "../../../shared/store/forum/ratingForum/ratingForum.action";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {createDiscussAction} from "../../../shared/store/forum/createDiscuss/createDiscuss.action";
import {CreateDiscussRequest} from "../../../shared/store/forum/createDiscuss/createDiscuss.request";
import {createDiscussSelector} from "../../../shared/store/forum/createDiscuss/createDiscuss.selector";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {distinct, distinctUntilChanged} from "rxjs";

@Component({
  selector: 'app-forum-detail',
  templateUrl: './forum-detail.component.html',
  styleUrls: ['./forum-detail.component.scss']
})
export class ForumDetailComponent implements OnInit,OnDestroy{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private _route = inject(ActivatedRoute)
  //Injection
  //Data
    //@ts-ignore
    forumDetail:GetForumModel;
  //@ts-ignore
    forumDiscuss:GetForumDiscussModel;
    params = {forum_id:0, type:"", page:1}
    public Editor: any = ClassicEditor;
    createDiscuss:FormGroup = new FormGroup({
      text:new FormControl("",[
        Validators.required,
        Validators.max(255),
      ]),
    })
  //Data
  ngOnInit(): void {
    initTE({ Collapse });
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.params.forum_id = params["id"];
      this.getForumDetail(params["id"]);
      this.getForumDiscusses();
    })
  }

  constructor() {
      //Forum Detail
    this._store.select(getForumSelector).pipe(
      autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        console.log(item.data.forum.discuss_rating_sum_rating);
        this.forumDetail = item.data;
      }
    })
    //Forum Description
    this._store.select(getForumDiscussSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.forumDiscuss = item.data;
      }
    })
    //Get forum discuss
    this._store.select(createDiscussSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item) => {
      if (item.data) {
        this.getForumDiscusses();
      }
    });


  }

  getForumDetail(forum_id:number){
    this._store.dispatch(getForumAction({requestData:forum_id}));
  }

  getForumDiscusses(){
    let request = Object.assign({},this.params);
    request = request as GetForumDiscussRequest;
    this._store.dispatch(getForumDiscussAction({requestData:request}));
  }
  pageChanged($event:number){
    this.params.page = $event;
    this.getForumDiscusses();
  }
  ngOnDestroy(): void {
  }

  ratingForum(rating:number,forum_id:number|null = null,discuss_id:number|null = null){
      if(forum_id || discuss_id){
        let request = {};
        if(forum_id){
          request = {rating:rating,forum_id:forum_id,discuss_id:null} as RatingForumRequest;
        }
        if(discuss_id){
          request = {rating:rating,discuss_id:discuss_id,forum_id:null} as RatingForumRequest;
        }// @ts-ignore
        this._store.dispatch(ratingForumAction({requestData:request}));
        if(forum_id){
          this.getForumDetail(forum_id);
        }
        if(discuss_id){
          this.getForumDiscusses();
        }
      }
  }


  onSubmit(){
    if(this.createDiscuss.valid){
      let requestData = {forum_id:this.forumDetail.forum.id,...this.createDiscuss.getRawValue()} as CreateDiscussRequest;
      this._store.dispatch(createDiscussAction({requestData: requestData}));
      this.createDiscuss.reset();
    }
  }
  protected readonly faMessage = faMessage;
  protected readonly RoutesName = RoutesName;
  protected readonly moment = moment;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faThumbsDown = faThumbsDown;
  protected readonly faThumbsUp = faThumbsUp;
  protected readonly ClassicEditor = ClassicEditor;
  protected readonly faCheck = faCheck;
}
