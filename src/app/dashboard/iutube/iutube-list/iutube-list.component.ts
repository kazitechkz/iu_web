import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Subject} from "../../../shared/models/subject.model";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-iutube-list',
  templateUrl: './iutube-list.component.html',
  styleUrls: ['./iutube-list.component.scss']
})
export class IutubeListComponent implements OnInit{

  //Injection
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  //Injection
  //Data
  subjects:Subject[]|null = null;
  protected readonly ImageHelper = ImageHelper;
  protected RoutesName = RoutesName;
  //Data

  constructor() {
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.subjects = item.data;
      }
    })
  }

  ngOnInit(): void {
    this.onYoutubePlayer();
    this.getSubjects();
  }

  onYoutubePlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  getSubjects() {
    this._store.dispatch(subjectGetAction());
  }


  customOptions: OwlOptions = {
    loop: true,
    margin: 15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplaySpeed:1500,
    autoplayHoverPause:true,
    navSpeed: 700,
    nav: false,
    navText: [],
    items:12,
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 7
      },
      940: {
        items: 9
      }
    },
  };
  public faPlay = faPlay


}
