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
import {faBook, faClock, faLanguage, faMoneyBill, faUsers,faCheckCircle,faQuestionCircle,faSmileWink,faSadTear} from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Stepper,
  initTE,
} from "tw-elements";
import {SubTournament} from "../../../shared/models/subTournament.model";
import {
  ParticipateTournamentRequest
} from "../../../shared/store/tournament/participateTournament/participateTournament.request";
import {
  OnParticipateTournamentAction
} from "../../../shared/store/tournament/participateTournament/participateTournament.action";
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
  //@ts-ignore
  public firstSubTournament:SubTournament;
  public tournament_ids:number[] = [];
  public subtournament_ids:number[] = [];
  //@ts-ignore
  public steps:TournamentStep[];

  ngOnInit(): void {
    initTE({Collapse});
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
          //@ts-ignore
          this.firstSubTournament = item.data.tournament.sub_tournaments?.find(item=>{
            if(item.tournament_step){
              if(item.tournament_step.is_first){
                return item;
              }
            }
          });
          this.subtournament_ids = item.data.subtournament_ids;
          this.tournament_ids = item.data.tournament_ids;
          this.steps = item.data.steps;
        }
      });
    });
  }

  participateTournament(){
    let request = {locale_id:1, sub_tournament_id:this.firstSubTournament.id} as ParticipateTournamentRequest;
    if(request.sub_tournament_id){
      this._store.dispatch(OnParticipateTournamentAction({requestData:request}));
      this.getTournamentInfo();
    }


  }

  getSubTournament(stepId:number):SubTournament|null{
    if(this.tournamentDetails){
      //@ts-ignore
      return  this.tournamentDetails.sub_tournaments?.find(item=>item.step_id == stepId);
    }
    return  null;
  }

  protected readonly ImageHelper = ImageHelper;
  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
  protected readonly faMoneyBill = faMoneyBill;
  protected readonly faBook = faBook;
  protected readonly faClock = faClock;
  protected readonly faLanguage = faLanguage;
  protected readonly faUsers = faUsers;
  protected readonly faCheckCircle = faCheckCircle;
  protected readonly faSmileWink = faSmileWink;
  protected readonly faSadTear = faSadTear;
}
