import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {News} from "../../../shared/models/news.model";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getImportantNewsAction} from "../../../shared/store/news/getImportantNews/getImportantNews.action";
import {getImportantNewsSelector} from "../../../shared/store/news/getImportantNews/getImportantNews.selector";
import {ImageHelper} from "../../../core/helpers/image.helper";
import * as moment from "moment/moment";
import {faArrowRight, faClock, faUser} from "@fortawesome/free-solid-svg-icons";
import {allNewsAction} from "../../../shared/store/news/allNews/allNews.action";
import {allNewsSelector} from "../../../shared/store/news/allNews/allNews.selector";
import {Pagination} from "../../../shared/store/pagination";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit,OnDestroy{
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute);
  public translate = inject(GlobalTranslateService);
  //Injection
  //Data
  news:News|null = null;
  allNews:Pagination<News[]>|null = null;
  requestData = {page:1}

  ngOnInit(): void {
    this.getImportantNews();
    this.getAllNews();
  }


  ngOnDestroy(): void {

  }

  getImportantNews(){
    this._store.dispatch(getImportantNewsAction());
    this._store.select(getImportantNewsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.news = item.data;
      }
    });
  };


  getAllNews(){
    let request = Object.assign({},this.requestData);
    this._store.dispatch(allNewsAction({requestData:request}));
    this._store.select(allNewsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.allNews = item.data;
      }
    });
  };

  pageChanged($event:number){
    this.requestData.page = $event;
    this.getAllNews();
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly RoutesName = RoutesName;
  moment = moment;
  faClock = faClock;
  faUser = faUser;

  protected readonly faArrowRight = faArrowRight;
}
