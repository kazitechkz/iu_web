import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Pagination} from "../../../shared/store/pagination";
import {IutubeVideo} from "../../../shared/models/iutubeVideo.model";
import {RoutesName} from "../../../core/constants/routes.constants";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {ActivatedRoute, Router} from "@angular/router";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getAllVideosSelector} from "../../../shared/store/iutube/getAllVideos/getAllVideos.selector";
import {getMainVideosAction} from "../../../shared/store/iutube/getMainVideos/getMainVideos.action";
import {getAllVideosAction} from "../../../shared/store/iutube/getAllVideos/getAllVideos.action";
import {GetAllVideosRequest} from "../../../shared/store/iutube/getAllVideos/getAllVideos.request";

@Component({
  selector: 'app-iutube-videos',
  templateUrl: './iutube-videos.component.html',
  styleUrls: ['./iutube-videos.component.scss']
})
export class IutubeVideosComponent implements OnInit{

  //Injection
  private _store = inject(Store);
  private router = inject(Router);
  private _route = inject(ActivatedRoute)
  destroyRef = inject(DestroyRef);
  //Injection
  //Data
  public iutubeVideos:Pagination<IutubeVideo[]>|null = null;
  protected readonly ImageHelper = ImageHelper;
  protected RoutesName = RoutesName;
  public videosData:Pagination<IutubeVideo[]>|null = null;
  public request:{search:string|null,page:number,subject_id:number|null,locale_id:number|null} = {search:null,page:1,subject_id:null,locale_id:null};
  //Data

  constructor() {
    this._store.select(getAllVideosSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.videosData = item.data;
      }
    })
  }

  getAllVideo() {
    let request = Object.assign({},this.request) as GetAllVideosRequest;
    this._store.dispatch(getAllVideosAction({requestData:request}));
  }

  ngOnInit(): void {
    this._route.queryParams.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      if(Object.keys(params).length > 0){
        if(params["search"]){
          this.request.search = params["search"];
        }
        if(params["subject_id"]){
          this.request.subject_id = params["subject_id"];
        }
        if(params["locale_id"]){
          this.request.locale_id = params["locale_id"];
        }
      }
      else{
        this.request = {search:null,page:1,subject_id:null,locale_id:null};
      }
      this.getAllVideo();

    });

  }

  pageChanged($event:number){
    this.request.page = $event;
    this.getAllVideo();
  }

}
