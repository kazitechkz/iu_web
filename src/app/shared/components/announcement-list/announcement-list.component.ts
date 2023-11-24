import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
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


@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.scss']
})
export class AnnouncementListComponent implements OnInit {
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

  ngOnInit(): void {
    this.getAllAnnouncements();
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
    this.slickModal.unslick();
    this.slickModal.initSlick();
    this.dialog.getModal('announcement-model-'+id).open();
  }

  changeSlider($event:any){
    this.active_slider = $event.currentSlide;
  }
  //@ts-ignore
  slideConfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "dots": true,
    "arrows":true,
    "infinite": false,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          dots: false
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
    arrows:true,
    infinite: true,
    fade: true,
    center:true,
    rtl: false,
    variableWidth: true,
    float:"left"
  }
  protected readonly ImageHelper = ImageHelper;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly RoutesName = RoutesName;
  protected readonly ColorConstants = ColorConstants;
  protected readonly StrHelper = StrHelper;
  protected readonly Object = Object;
}
