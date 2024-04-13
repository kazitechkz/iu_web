import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Information} from "../../../shared/models/information.model";
import {getSingleNewsAction} from "../../../shared/store/news/getSingleNews/getSingleNews.action";
import {getSingleNewsSelector} from "../../../shared/store/news/getSingleNews/getSingleNews.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getInformationAction} from "../../../shared/store/information/getInformation/getInformation.action";
import {getInformationSelector} from "../../../shared/store/information/getInformation/getInformation.selector";
import {NgxSeoService} from "@avivharuzi/ngx-seo";
import {ImageHelper} from "../../../core/helpers/image.helper";
import moment from "moment/moment";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  //Injection
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute);
  public translate = inject(GlobalTranslateService);
  public ngxSeoService = inject(NgxSeoService);
  public information:Information|null = null;


  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      let alias = params["alias"];
      this.getSingleInformation(alias);
    })
  }


  getSingleInformation(alias:string){
    this._store.dispatch(getInformationAction({requestData:alias}));
    this._store.select(getInformationSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.information = item.data;
        this.ngxSeoService.setSeo({
          title: item.data.seo_title,
          meta: {
            description: item.data.seo_description,
            keywords: item.data.seo_keywords,
          },
        });
      }
    })
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly moment = moment;
}
