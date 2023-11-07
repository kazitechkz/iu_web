import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {faCheck, faMessage, faPencil} from "@fortawesome/free-solid-svg-icons";
import {Store} from "@ngrx/store";
import {Subject} from "../../../shared/models/subject.model";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {Forum} from "../../../shared/models/forum.model";
import {Pagination} from "../../../shared/store/pagination";
import {allForumAction} from "../../../shared/store/forum/allForum/allForum.action";
import {AllForumRequest} from "../../../shared/store/forum/allForum/allForum.request";
import {allForumSelector} from "../../../shared/store/forum/allForum/allForum.selector";

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.scss']
})
export class ForumListComponent implements OnInit {
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  //Injection
  //Data
  subjects:Subject[] = [];
  //@ts-ignore
  forumData: Pagination<Forum[]>;
  params = {page:1,subject_id:0,type:""};
  //Data

  ngOnInit(): void {
    this.getSubjects();
    this.getAllForums();
  }

  getSubjects(){
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.subjects = item.data;
      }
    });
  }

  getAllForums(){
    let request = Object.assign({},this.params);
    request = request as AllForumRequest;
    this._store.dispatch(allForumAction({requestData:request}));
    this._store.select(allForumSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.forumData = item.data;
      }
    });
  }

  setActiveSubject(subjectId:number){
    this.params.page = 1;
    this.params.subject_id = subjectId;
    this.getAllForums();
  }
  setForumType(type:string){
    // @ts-ignore
    this.params.page = 1;
    this.params.type = type;
    this.getAllForums();
  }

  pageChanged($event:number){
    this.params.page = $event;
    this.getAllForums();
  }

  protected readonly faCheck = faCheck;
  protected readonly faPencil = faPencil;


  protected readonly ImageHelper = ImageHelper;
  protected readonly faMessage = faMessage;
}
