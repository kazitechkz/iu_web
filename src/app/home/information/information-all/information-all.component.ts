import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {getImportantNewsAction} from "../../../shared/store/news/getImportantNews/getImportantNews.action";
import {getImportantNewsSelector} from "../../../shared/store/news/getImportantNews/getImportantNews.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {allNewsAction} from "../../../shared/store/news/allNews/allNews.action";
import {allNewsSelector} from "../../../shared/store/news/allNews/allNews.selector";
import {hottestInformationAction} from "../../../shared/store/information/hottestInformation/hottestInformation.action";
import {
  hottestInformationSelector
} from "../../../shared/store/information/hottestInformation/hottestInformation.selector";
import {HottestInformationModel} from "../../../shared/store/information/hottestInformation/hottestInformation.model";
import {Pagination} from "../../../shared/store/pagination";
import {Information} from "../../../shared/models/information.model";
import {allInformationsAction} from "../../../shared/store/information/allInformations/allInformations.action";
import {AllInformationsRequest} from "../../../shared/store/information/allInformations/allInformations.request";
import {allInformationsSelector} from "../../../shared/store/information/allInformations/allInformations.selector";
import {ImageHelper} from "../../../core/helpers/image.helper";
import * as moment from "moment";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-information-all',
  templateUrl: './information-all.component.html',
  styleUrls: ['./information-all.component.scss']
})
export class InformationAllComponent implements OnInit,OnDestroy{

//Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute);
  public translate = inject(GlobalTranslateService);
  //Injection
  requestData = {page:1}
  //@ts-ignore
  hottestInformations:HottestInformationModel;
  //@ts-ignore
  informations:Pagination<Information[]>;
  informationLists:Information[] = [];
  ngOnInit(): void {
    this.getHottestInformations();
    this.getInformations();
    this._store.select(allInformationsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.informations = item.data;
      }
    });
  }

  getHottestInformations(){
    this._store.dispatch(hottestInformationAction());
    this._store.select(hottestInformationSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.hottestInformations = item.data;

      }
    });
  };
  getInformations(){
    let request = Object.assign({},this.requestData) as AllInformationsRequest;
    this._store.dispatch(allInformationsAction({requestData:request}));

  };

  changePage(page:number){
    this.requestData.page =page;
    this.getInformations();
  }

  ngOnDestroy(): void {
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly moment = moment;
  protected readonly JSON = JSON;
  protected readonly RoutesName = RoutesName;
}
