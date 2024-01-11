import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  Tab,
  initTE,
} from "tw-elements";
import {
  getSubTournamentDetailAction
} from "../../../shared/store/tournament/getSubTournamentDetail/getSubTournamentDetail.action";
import {
  getSubTournamentDetailSelector
} from "../../../shared/store/tournament/getSubTournamentDetail/getSubTournamentDetail.selector";
import {Tournament} from "../../../shared/models/tournament.model";
import {SubTournament} from "../../../shared/models/subTournament.model";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {StrHelper} from "../../../core/helpers/str.helper";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {faBook, faClock, faSadTear, faSmileWink} from "@fortawesome/free-solid-svg-icons";
import * as moment from "moment/moment";
import {
  GetSubTournamentParticipantsRequest
} from "../../../shared/store/tournament/getSubTournamentParticipants/getSubTournamentParticipants.request";
import {
  getSubTournamentParticipantsAction
} from "../../../shared/store/tournament/getSubTournamentParticipants/getSubTournamentParticipants.action";
import {
  getSubTournamentParticipantsSelector
} from "../../../shared/store/tournament/getSubTournamentParticipants/getSubTournamentParticipants.selector";
import {Pagination} from "../../../shared/store/pagination";
import {SubTournamentParticipant} from "../../../shared/models/subTournamentParticipant.model";
import {RoutesName} from "../../../core/constants/routes.constants";
import {
  GetSubTournamentResultsModel
} from "../../../shared/store/tournament/getSubTournamentResults/getSubTournamentResults.model";
import {
  GetSubTournamentResultsRequest
} from "../../../shared/store/tournament/getSubTournamentResults/getSubTournamentResults.request";
import {
  getSubTournamentResultsAction
} from "../../../shared/store/tournament/getSubTournamentResults/getSubTournamentResults.action";
import {
  getSubTournamentResultsSelector
} from "../../../shared/store/tournament/getSubTournamentResults/getSubTournamentResults.selector";
import {SubTournamentResult} from "../../../shared/models/subTournamentResult.model";
import {CreateAttemptRequest} from "../../../shared/store/attempt/createAttempt/createAttempt.request";
import {createAttemptAction} from "../../../shared/store/attempt/createAttempt/createAttempt.action";
import {
  CreateTournamentAttemptRequest
} from "../../../shared/store/tournament/createTournamentAttempt/createTournamentAttempt.request";
import {
  createTournamentAttemptAction
} from "../../../shared/store/tournament/createTournamentAttempt/createTournamentAttempt.action";
import {SubTournamentWinner} from "../../../shared/models/subTournamentWinner.model";
import {
  GetSubTournamentRivalsRequest
} from "../../../shared/store/tournament/getSubTournamentRivals/getSubTournamentRivals.request";

import {
  getSubTournamentRivalsSelector
} from "../../../shared/store/tournament/getSubTournamentRivals/getSubTournamentRivals.selector";
import {
  getSubTournamentWinnersAction
} from "../../../shared/store/tournament/getSubTournamentWinners/getSubTournamentWinners.action";
import {
  getSubTournamentWinnersSelector
} from "../../../shared/store/tournament/getSubTournamentWinners/getSubTournamentWinners.selector";
import {
  GetSubTournamentWinnersRequest
} from "../../../shared/store/tournament/getSubTournamentWinners/getSubTournamentWinners.request";
import {
  getSubTournamentRivalsAction
} from "../../../shared/store/tournament/getSubTournamentRivals/getSubTournamentRivals.action";
import {SubTournamentRival} from "../../../shared/models/subTournamentRival.model";
import {
  ParticipateTournamentRequest
} from "../../../shared/store/tournament/participateTournament/participateTournament.request";
import {
  OnParticipateTournamentAction
} from "../../../shared/store/tournament/participateTournament/participateTournament.action";
import {
  participateTournamentSelector
} from "../../../shared/store/tournament/participateTournament/participateTournament.selector";
import {
  getTournamentDetailAction
} from "../../../shared/store/tournament/getTournamentDetail/getTournamentDetail.action";
@Component({
  selector: 'app-sub-tournament-detail',
  templateUrl: './sub-tournament-detail.component.html',
  styleUrls: ['./sub-tournament-detail.component.scss']
})
export class SubTournamentDetailComponent implements OnInit{

  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute);
  public translate = inject(GlobalTranslateService);

  //Some Data
  //@ts-ignore
  tournament:Tournament;
  sub_tournament_ids:number[] = [];
  //@ts-ignore
  sub_tournament:SubTournament;
  //@ts-ignore
  my_result:SubTournamentResult;
  //@ts-ignore
  sub_tournament_participants:Pagination<SubTournamentParticipant[]>;
  public paginationParticipants = {page:1,id:0}
  //@ts-ignore
  sub_tournament_results:GetSubTournamentResultsModel;
  public paginationResults = {page:1,id:0}
  //@ts-ignore
  sub_tournament_rivals:SubTournamentRival[];
  public paginationRival = {id:0}
  //@ts-ignore
  sub_tournament_winners:SubTournamentWinner[];
  public paginationWinner = {id:0}

  locale_id:number = 1;
  subTournamentId:number|null = null;
  //Some Data End
  ngOnInit(): void {
    initTE({Tab});
    this.getSubTournamentDetail();
  }

  constructor() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.subTournamentId = params["id"]
    });
    if(this.subTournamentId !== null){
      this._store.select(getSubTournamentDetailSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item)=>{
        if(item.data){
          this.tournament = item.data.tournament;
          this.sub_tournament_ids = item.data.sub_tournament_ids;
          this.sub_tournament = item.data.sub_tournament;
          this.my_result = item.data.my_result;
          // @ts-ignore
          this.paginationParticipants.id = this.subTournamentId;
          // @ts-ignore
          this.paginationResults.id = this.subTournamentId;
          // @ts-ignore
          this.paginationWinner.id = this.subTournamentId;
          // @ts-ignore
          this.paginationRival.id = this.subTournamentId;
          this.getSubTournamentParticipants();
          this.getSubTournamentResults();
          this.getSubTournamentWinners();
          this.getSubTournamentRivals();
        }
      });
    }

    this._store.select(getSubTournamentRivalsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.sub_tournament_rivals = item.data;
        }
      }
    )
    this._store.select(getSubTournamentParticipantsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.sub_tournament_participants = item.data;
        }
      }
    )
    this._store.select(getSubTournamentWinnersSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.sub_tournament_winners = item.data;
        }
      }
    )
    this._store.select(getSubTournamentResultsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.sub_tournament_results = item.data;
        }
      }
    )
    this._store.select(participateTournamentSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=> {
      if (item.data && this.subTournamentId) {
          this._store.dispatch(getSubTournamentDetailAction({requestData:this.subTournamentId}));
        }
      }
    )
  }


  getSubTournamentDetail(){
    if(this.subTournamentId){
      this._store.dispatch(getSubTournamentDetailAction({requestData:this.subTournamentId}));
    }
  }

  participantPageChanged($event:number){
    this.paginationParticipants.page = $event;
    this.getSubTournamentParticipants();
  }

  resultPageChanged($event:number){
    this.paginationResults.page = $event;
    this.getSubTournamentParticipants();
  }
  getSubTournamentParticipants(){
    let pageRequest: GetSubTournamentParticipantsRequest = {page:1,id:0};
    Object.assign(pageRequest,this.paginationParticipants);
    pageRequest = pageRequest as GetSubTournamentParticipantsRequest;
    this._store.dispatch(getSubTournamentParticipantsAction({requestData:pageRequest}));

  }
  getSubTournamentWinners(){
    let pageRequest: GetSubTournamentWinnersRequest = {id:0};
    Object.assign(pageRequest,this.paginationWinner);
    pageRequest = pageRequest as GetSubTournamentWinnersRequest;
    this._store.dispatch(getSubTournamentWinnersAction({requestData:pageRequest}));
  }
  getSubTournamentResults(){
    let pageRequest: GetSubTournamentResultsRequest = {page:1,id:0};
    Object.assign(pageRequest,this.paginationResults);
    pageRequest = pageRequest as GetSubTournamentResultsRequest;
    this._store.dispatch(getSubTournamentResultsAction({requestData:pageRequest}));

  }
  getSubTournamentRivals(){
    let pageRequest: GetSubTournamentRivalsRequest = {id:0};
    Object.assign(pageRequest,this.paginationWinner);
    pageRequest = pageRequest as GetSubTournamentRivalsRequest;
    this._store.dispatch(getSubTournamentRivalsAction({requestData:pageRequest}));
  }

  changeLanguage(value:any){
    this.locale_id = value ? 1 : 2;
  }

  participateTournament(){
    let request = {locale_id:this.locale_id, sub_tournament_id:this.sub_tournament.id} as ParticipateTournamentRequest;
    if(request.sub_tournament_id){
      this._store.dispatch(OnParticipateTournamentAction({requestData:request}));
      this.getSubTournamentDetail();
    }
  }

  createTournamentAttempt(){
    if (this.tournament.subject_id){
      let request = {sub_tournament_id:this.sub_tournament.id, locale_id:this.locale_id,} as CreateTournamentAttemptRequest;
      this._store.dispatch(createTournamentAttemptAction({requestData:request}));
    }
  }


  protected readonly ImageHelper = ImageHelper;
  protected readonly StrHelper = StrHelper;
  protected readonly faBook = faBook;
  protected readonly faClock = faClock;
  protected readonly moment = moment;
  protected readonly faSmileWink = faSmileWink;
  protected readonly faSadTear = faSadTear;
  protected readonly RoutesName = RoutesName;
}
