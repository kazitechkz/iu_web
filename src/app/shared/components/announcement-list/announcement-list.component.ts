import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit, QueryList,
  ViewChild, ViewChildren
} from '@angular/core';
import {GlobalTranslateService} from "../../services/globalTranslate.service";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {GetAllAnnouncementsAction} from "../../store/announcement/getAllAnnouncements/getAllAnnouncements.action";
import {getAllAnnouncementsSelector} from "../../store/announcement/getAllAnnouncements/getAllAnnouncements.selector";
import {AnnouncementGroup} from "../../models/announcementGroup.model";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {NgxSmartModalService} from "ngx-smart-modal";
import {RoutesName} from "../../../core/constants/routes.constants";
import {ColorConstants} from "../../../core/constants/color.constants";
import {StrHelper} from "../../../core/helpers/str.helper";
import {SlickCarouselComponent} from "ngx-slick-carousel";
import {Announcement} from "../../models/announcement.model";
import {DomSanitizer} from "@angular/platform-browser";
import {YouTubePlayer} from "@angular/youtube-player";


@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit,AfterViewInit   {
//Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute);
  public translate = inject(GlobalTranslateService);
  dialog = inject(NgxSmartModalService)
  active_slider:number = 0;
  //Injection
  //Data
  announcements:AnnouncementGroup[] = [];
  //@ts-ignore
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;
  //@ts-ignore
  @ViewChildren(YouTubePlayer) players: QueryList<YouTubePlayer>;

  videoHeight: number | undefined;
  videoWidth: number | undefined;
  ngOnInit(): void {
    this.getAllAnnouncements();
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngAfterViewInit(): void {
    this.videoHeight = window.innerHeight;
    if(window.innerWidth >= 768){
      this.videoWidth = 700;
    }
    else{
      this.videoWidth = window.innerWidth;
    }
  }
  afterChange(e:any) {
    this.players.forEach((player:YouTubePlayer)=>{
      player.pauseVideo();
    });
  }

  getAllAnnouncements(){
    this._store.dispatch(GetAllAnnouncementsAction());
    this._store.select(getAllAnnouncementsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.announcements = item.data;
      }
    });
  }
  openDialog(id: string) {
    this.dialog.getModal('announcement-model-'+id).open();
    this.slickModal.slickGoTo(0);
  }

  changeSlider($event:any){
    this.active_slider = $event.currentSlide;
  }


  trackById(index: number, announcement: Announcement) { // 👈
    return announcement.id;
  }
  //@ts-ignore
  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "dots": true,
    "arrows":false,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      },
    ]
  };
  slideModalConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    draggable:true,
    arrows:true,
    infinite: true,
    fade: true,
    center:false,
    autoplay: false,
  }
  protected readonly ImageHelper = ImageHelper;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly RoutesName = RoutesName;
  protected readonly ColorConstants = ColorConstants;
  protected readonly StrHelper = StrHelper;
  protected readonly Object = Object;
  protected readonly parseInt = parseInt;
}
