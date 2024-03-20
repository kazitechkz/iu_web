import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {Store} from "@ngrx/store";
import {Tournament} from "../../../shared/models/tournament.model";
import {Pagination} from "../../../shared/store/pagination";
import {getAllTournamentAction} from "../../../shared/store/tournament/getAllTournament/getAllTournament.action";
import {getAllTournamentSelector} from "../../../shared/store/tournament/getAllTournament/getAllTournament.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  getListOfTournamentsSelector
} from "../../../shared/store/tournament/getListOfTournaments/getListOfTournaments.selector";
import {
  getListOfTournamentsAction
} from "../../../shared/store/tournament/getListOfTournaments/getListOfTournaments.action";
import {
  GetListOfTournamentsRequest
} from "../../../shared/store/tournament/getListOfTournaments/getListOfTournaments.request";
import {faBook, faClock, faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {RoutesName} from "../../../core/constants/routes.constants";
import * as moment from "moment/moment";

@Component({
  selector: 'app-tournament-all',
  templateUrl: './tournament-all.component.html',
  styleUrls: ['./tournament-all.component.scss']
})
export class TournamentAllComponent implements OnInit{
  public translate = inject(GlobalTranslateService);
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  //@ts-ignore
  public tournamentsData:Pagination<Tournament[]>;
  requestTournamentPage:{page:number} = {page:1};

  constructor() {
    this._store.select(getListOfTournamentsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.tournamentsData = item.data;
      }
    });
  }
  ngOnInit(): void {
    this.getTournamentList();
  }

  getTournamentList(){
    let request = Object.assign({},this.requestTournamentPage) as GetListOfTournamentsRequest;
    this._store.dispatch(getListOfTournamentsAction({requestData:request}));

  }

  public changeTournamentPage($event:number){
    this.requestTournamentPage.page = $event;
    this.getTournamentList();
  }

  protected readonly faMoneyBill = faMoneyBill;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faClock = faClock;
  protected readonly faBook = faBook;
  protected readonly RoutesName = RoutesName;
  protected readonly moment = moment;
}
