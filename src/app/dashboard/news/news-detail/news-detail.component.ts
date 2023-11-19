import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {News} from "../../../shared/models/news.model";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getSingleNewsAction} from "../../../shared/store/news/getSingleNews/getSingleNews.action";
import {getSingleNewsSelector} from "../../../shared/store/news/getSingleNews/getSingleNews.selector";
import {RoutesName} from "../../../core/constants/routes.constants";
import {ImageHelper} from "../../../core/helpers/image.helper";
import * as moment from "moment/moment";
import {faClock, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit,OnDestroy{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute);
  public translate = inject(GlobalTranslateService);
  //Injection
  //Data
  news:News|null = null;

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      let routeId = params["id"];
      this.getSingleNews(routeId);
    })
  }


  getSingleNews(news_id:number){
    this._store.dispatch(getSingleNewsAction({requestData:news_id}));
    this._store.select(getSingleNewsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.news = item.data;
      }
    })
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly RoutesName = RoutesName;
  moment = moment;
  faClock = faClock;
  faUser = faUser;
}
