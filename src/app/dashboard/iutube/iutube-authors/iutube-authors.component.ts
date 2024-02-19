import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {ActivatedRoute, Router} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faPhoneAlt, faPlay} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";
import {GetVideoAuthorDetailModel} from "../../../shared/store/iutube/getVideoAuthorDetail/getVideoAuthorDetail.model";
import {
  GetVideoAuthorDetailRequest
} from "../../../shared/store/iutube/getVideoAuthorDetail/getVideoAuthorDetail.request";
import {GetVideoDetailRequest} from "../../../shared/store/iutube/getVideoDetail/getVideoDetail.request";
import {getVideoDetailSelector} from "../../../shared/store/iutube/getVideoDetail/getVideoDetail.selector";
import {
  getVideoAuthorDetailSelector
} from "../../../shared/store/iutube/getVideoAuthorDetail/getVideoAuthorDetail.selector";
import {getVideoAuthorDetail} from "../../../shared/store/iutube/getVideoAuthorDetail/getVideoAuthorDetail.action";
import {faFacebookF, faGoogle, faInstagram, faLinkedin, faTiktok, faVk} from "@fortawesome/free-brands-svg-icons";
@Component({
  selector: 'app-iutube-authors',
  templateUrl: './iutube-authors.component.html',
  styleUrls: ['./iutube-authors.component.scss']
})
export class IutubeAuthorsComponent implements OnInit{
  //Injection
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private _route = inject(ActivatedRoute)
  private _router = inject(Router)
  //Injection
  //Data
  protected readonly ImageHelper = ImageHelper;
  protected RoutesName = RoutesName;
  protected faPlay = faPlay;
  public authorId:number|null = null;
  public authorModel:GetVideoAuthorDetailModel|null = null;
  public request:{page:number,id:number} = {page:1,id:0}
  //Data

  constructor() {
    this._store.select(getVideoAuthorDetailSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.authorModel = item.data;
      }
    })
  }

  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.request.id = params["id"]
      this.getVideoAuthorDetail();
    });
    this.onYoutubePlayer();
  }
  getVideoAuthorDetail(){
    if(this.request.id){
      let request = Object.assign({},this.request) as GetVideoAuthorDetailRequest;
      this._store.dispatch(getVideoAuthorDetail({requestData:request}));
    }
  }
  onYoutubePlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  pageChanged($event:number){
    this.request.page = $event;
    this.getVideoAuthorDetail();
  }

  protected readonly faVk = faVk;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faInstagram = faInstagram;
  protected readonly faFacebookF = faFacebookF;
  protected readonly faTiktok = faTiktok;
  protected readonly faGoogle = faGoogle;
  protected readonly faPhoneAlt = faPhoneAlt;
}
