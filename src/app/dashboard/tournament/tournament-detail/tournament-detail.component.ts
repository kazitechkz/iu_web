import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {
  getTournamentDetailAction
} from "../../../shared/store/tournament/getTournamentDetail/getTournamentDetail.action";
import {
  getTournamentDetailSelector
} from "../../../shared/store/tournament/getTournamentDetail/getTournamentDetail.selector";
import {Tournament} from "../../../shared/models/tournament.model";
import {TournamentStep} from "../../../shared/models/tournamentStep.model";
import {ImageHelper} from "../../../core/helpers/image.helper";
import * as moment from "moment/moment";
import {RoutesName} from "../../../core/constants/routes.constants";
import {faBook, faClock, faLanguage, faMoneyBill, faUsers} from "@fortawesome/free-solid-svg-icons";
import {
  Stepper,
  initTE,
} from "tw-elements";
initTE({Stepper});
@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit,OnDestroy{

  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute);
  //@ts-ignore
  public tournamentDetails:Tournament;
  public tournament_ids:number[] = [];
  public subtournament_ids:number[] = [];
  //@ts-ignore
  public steps:TournamentStep[];

  ngOnInit(): void {
    this.getTournamentInfo();

  }

  ngOnDestroy(): void {
  }

  getTournamentInfo(){
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this._store.dispatch(getTournamentDetailAction({requestData:params["id"]}));
      this._store.select(getTournamentDetailSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.tournamentDetails = item.data.tournament;
          this.subtournament_ids = item.data.subtournament_ids;
          this.tournament_ids = item.data.tournament_ids;
          this.steps = item.data.steps;
        }
      });
    });
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
  protected readonly faMoneyBill = faMoneyBill;
  protected readonly faBook = faBook;
  protected readonly faClock = faClock;
  protected readonly faLanguage = faLanguage;
  protected readonly faUsers = faUsers;
}
