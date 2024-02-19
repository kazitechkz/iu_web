import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {faCoins, faGamepad, faList, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Locale} from "../../models/locale.model";
import {Subject} from "../../models/subject.model";
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../services/globalTranslate.service";
import {getSubjectsState} from "../../store/subject/subject.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getMainVideosSelector} from "../../store/iutube/getMainVideos/getMainVideos.selector";
import {subjectGetAction} from "../../store/subject/subject.action";
import {NgxSmartModalService} from "ngx-smart-modal";
import {Router} from "@angular/router";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-iutube-search',
  templateUrl: './iutube-search.component.html',
  styleUrls: ['./iutube-search.component.scss']
})
export class IutubeSearchComponent implements OnInit{

  public search:string|null = null;
  public subject_id:number|null = null;
  public locales:{id:number,title:string}[] = [{id:1,title:"Қазақ тілі"},{id:2,title:"Русский язык"}];
  public locale_id:number|null = null;
  subjects:Subject[]|null = null;
  //Injection
  private _store = inject(Store);
  private router = inject(Router);
  destroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  dialog = inject(NgxSmartModalService);
  //Injection

  constructor() {
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.subjects = item.data;
      }
    })
  }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects() {
    this._store.dispatch(subjectGetAction());
  }

  onSearch(){
    let query:{search:string|null,subject_id:number|null,locale_id:number|null} = {search:null,subject_id:null,locale_id:null};
    if(this.search){
      query.search = this.search;
    }
    if(this.subject_id){
      query.subject_id = this.subject_id;
    }
    if(this.locale_id){
      query.locale_id = this.locale_id;
    }
    this.router.navigate(
      ['/'+ RoutesName.iuTubeVideos],
      {
        queryParams: query,}
    );
  }
  openDialog() {
    this.dialog.getModal('create-search-video').open();
  }

  protected readonly faSearch = faSearch;
  protected readonly faList = faList;


  protected readonly faCoins = faCoins;
  protected readonly faGamepad = faGamepad;
}
