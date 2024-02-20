import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DestroyRef, DoCheck,
  ElementRef,
  inject, OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {ActivatedRoute, Router} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";
import {getMainVideosSelector} from "../../../shared/store/iutube/getMainVideos/getMainVideos.selector";
import {getVideoDetail} from "../../../shared/store/iutube/getVideoDetail/getVideoDetail.action";
import {getVideoDetailSelector} from "../../../shared/store/iutube/getVideoDetail/getVideoDetail.selector";
import {GetVideoDetailModel} from "../../../shared/store/iutube/getVideoDetail/getVideoDetail.model";
import {GetVideoDetailRequest} from "../../../shared/store/iutube/getVideoDetail/getVideoDetail.request";
@Component({
  selector: 'app-iutube-detail',
  templateUrl: './iutube-detail.component.html',
  styleUrls: ['./iutube-detail.component.scss']
})
export class IutubeDetailComponent implements OnInit{
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
  //Data
  //@ts-ignore
  @ViewChild('mobileElement') mobileElement: ElementRef
  //@ts-ignore
  @ViewChild('smElement') smElement: ElementRef
  //@ts-ignore
  @ViewChild('mdElement') mdElement: ElementRef
  //@ts-ignore
  @ViewChild('lgElement') lgElement: ElementRef
  //@ts-ignore
  @ViewChild('xlElement') xlElement: ElementRef
  //@ts-ignore
  @ViewChild('xxlElement') xxlElement: ElementRef

  public alias:string|null = null;
  videoModel:GetVideoDetailModel|null = null;
  requestData:GetVideoDetailRequest = {alias:""};
  constructor() {
    this._store.select(getVideoDetailSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.videoModel = item.data;
      }
    })
  }

  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.alias = params["alias"];
      this.getVideoDetail();
    });
    this.onYoutubePlayer();

  }

  getVideoDetail(){
    if(this.alias){
      let request = {alias:this.alias} as GetVideoDetailRequest;
      this._store.dispatch(getVideoDetail({requestData:request}))
    }
  }
  getWidth(width: number,ratio:number) {
    return width * ratio;
  }
  onYoutubePlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
