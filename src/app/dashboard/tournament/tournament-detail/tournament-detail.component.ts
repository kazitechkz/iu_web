import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {
  clearGetTournamentDetailAction,
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
import {
  faBook,
  faClock,
  faLanguage,
  faMoneyBill,
  faUsers,
  faCheckCircle,
  faSmileWink,
  faSadTear
} from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  initTE, Tab,
} from "tw-elements";
import {SubTournament} from "../../../shared/models/subTournament.model";
import {
  ParticipateTournamentRequest
} from "../../../shared/store/tournament/participateTournament/participateTournament.request";
import {
  OnPayTournamentAction
} from "../../../shared/store/tournament/participateTournament/participateTournament.action";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {
  participateTournamentSelector, payTournamentSelector
} from "../../../shared/store/tournament/participateTournament/participateTournament.selector";
import {
  getSubTournamentRivalsSelector
} from "../../../shared/store/tournament/getSubTournamentRivals/getSubTournamentRivals.selector";
import {
  getSubTournamentParticipantsSelector
} from "../../../shared/store/tournament/getSubTournamentParticipants/getSubTournamentParticipants.selector";
import {
  getSubTournamentResultsSelector
} from "../../../shared/store/tournament/getSubTournamentResults/getSubTournamentResults.selector";
import {
  getSubTournamentDetailAction
} from "../../../shared/store/tournament/getSubTournamentDetail/getSubTournamentDetail.action";
import {
  GetSubTournamentParticipantsRequest
} from "../../../shared/store/tournament/getSubTournamentParticipants/getSubTournamentParticipants.request";
import {
  clearGetSubTournamentParticipantsAction,
  getSubTournamentParticipantsAction
} from "../../../shared/store/tournament/getSubTournamentParticipants/getSubTournamentParticipants.action";
import {
  GetSubTournamentWinnersRequest
} from "../../../shared/store/tournament/getSubTournamentWinners/getSubTournamentWinners.request";
import {
  getSubTournamentWinnersAction
} from "../../../shared/store/tournament/getSubTournamentWinners/getSubTournamentWinners.action";
import {
  GetSubTournamentResultsRequest
} from "../../../shared/store/tournament/getSubTournamentResults/getSubTournamentResults.request";
import {
  getSubTournamentResultsAction
} from "../../../shared/store/tournament/getSubTournamentResults/getSubTournamentResults.action";
import {
  GetSubTournamentRivalsRequest
} from "../../../shared/store/tournament/getSubTournamentRivals/getSubTournamentRivals.request";
import {
  getSubTournamentRivalsAction
} from "../../../shared/store/tournament/getSubTournamentRivals/getSubTournamentRivals.action";
import {Pagination} from "../../../shared/store/pagination";
import {SubTournamentParticipant} from "../../../shared/models/subTournamentParticipant.model";
import {SubTournamentResult} from "../../../shared/models/subTournamentResult.model";
import {StrHelper} from "../../../core/helpers/str.helper";
import {NgxSmartModalService} from "ngx-smart-modal";
import {
  CreateTournamentAttemptRequest
} from "../../../shared/store/tournament/createTournamentAttempt/createTournamentAttempt.request";
import {
  createTournamentAttemptAction
} from "../../../shared/store/tournament/createTournamentAttempt/createTournamentAttempt.action";
import Swal from "sweetalert2";
import {OrdinaryUser} from "../../../shared/models/user.model";
import {TournamentAward} from "../../../shared/models/tournamentAward.model";
import {
  GetTournamentAwardsRequest
} from "../../../shared/store/tournament/getTournamentAwards/getTournamentAwards.request";
import {
  getTournamentAwardsAction
} from "../../../shared/store/tournament/getTournamentAwards/getTournamentAwards.action";
import {
  getTournamentAwardSelector
} from "../../../shared/store/tournament/getTournamentAwards/getTournamentAwards.selector";

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.scss']
})
export class TournamentDetailComponent implements OnInit {

  private _store = inject(Store);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute);
  public translate = inject(GlobalTranslateService);
  //@ts-ignore
  public tournamentDetails: Tournament;
  //@ts-ignore
  public firstSubTournament: SubTournament;
  //@ts-ignore
  public currentSubTournament: SubTournament;
  //@ts-ignore
  public steps: TournamentStep[];
  public tournamentId: number | null = null;
//@ts-ignore
  tournament: Tournament;
  //@ts-ignore
  sub_tournament: SubTournament;
  //@ts-ignore
  my_result: SubTournamentResult;
  //@ts-ignore
  sub_tournament_participants: Pagination<SubTournamentParticipant[]>;
  public paginationParticipants = { page: 1, id: 0 }
  //@ts-ignore
  sub_tournament_results: Pagination<SubTournamentResult[]>;
  winner_tournament: OrdinaryUser|null = null
  public paginationResults = {page: 1, id: 0}
  public paginationAwardsResults = {page: 1, id: 0}
  public tournamentAwards:Pagination<TournamentAward[]>|null = null;
  //@ts-ignore
  sub_tournament_rivals: SubTournamentRival[];
  public paginationRival = {id: 0}
  //@ts-ignore
  sub_tournament_winners: SubTournamentWinner[];
  public paginationWinner = {id: 0}
  locale_id: number = 1;
  subTournamentId: number | null = null;
  isJoin: boolean = false;
  isReg: boolean = false;
  checkAccess: boolean = false;
  dialog = inject(NgxSmartModalService)
  //@ts-ignore
  public participants: Pagination<SubTournamentParticipant[]>
  private _activateRoute = inject(ActivatedRoute)
  endDate: moment.Moment = moment();
  startDate: moment.Moment = moment();
  startRegDate: moment.Moment = moment();
  endRegDate: moment.Moment = moment();
  registerCountdown: string = ''
  registerStartCountdown: string = ''
  countdown: string = '';
  startCountdown: string = '';
  ngOnInit(): void {
    this.checkURL()
    initTE({Collapse, Tab});
    this.getTournamentInfo();
    this.getSubTournamentDetail()
    setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }
  checkURL() {
    this._activateRoute.queryParams.subscribe(params => {
      if (params['success'] == 1) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Подписка успешно оформлена!",
          showConfirmButton: false,
          timer: 4000
        });
      }
      if (params['error'] == 1) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Что-то пошло не так!",
          showConfirmButton: false,
          timer: 4000
        });
      }
    })
  }
  constructor() {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      this.tournamentId = params["id"];
    });
    this._store.select(getTournamentDetailSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.isJoin = item.data.is_join
        this.isReg = item.data.is_reg
        this.tournamentDetails = item.data.tournament;
        this.firstSubTournament = item.data.firstSubTournament
        this.subTournamentId = item.data.firstSubTournament.id
        this.currentSubTournament = item.data.currentSubTournament
        this.checkAccess = item.data.check_access
        this.winner_tournament = item.data.winner_tournament
        this.endDate = moment(item.data.currentSubTournament.end_at)
        this.endRegDate = moment(item.data.firstSubTournament.end_at)
        this.startDate = moment(item.data.currentSubTournament.start_at)
        const objCopy = {...this.paginationParticipants};
        if (this.subTournamentId) {
          objCopy.id = this.subTournamentId
        }
        this.paginationParticipants = objCopy
        this.steps = item.data.steps;
        this.getSubTournamentParticipants()
      }
    });
    this._store.select(getSubTournamentParticipantsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if (item.data) {
          this.participants = item.data;
        }
      }
    )
    this._store.select(getSubTournamentResultsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.sub_tournament_results = item.data.results;
        }
      }
    )
    this._store.select(getSubTournamentRivalsSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.sub_tournament_rivals = item.data;
        }
      }
    )
    this._store.select(getTournamentAwardSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(
      item => {
        if(item.data){
          this.tournamentAwards = item.data;
        }
      }
    )
    this._store.select(participateTournamentSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.data && this.tournamentId) {
          this._store.dispatch(clearGetTournamentDetailAction())
          this._store.dispatch(getTournamentDetailAction({requestData: this.tournamentId}));
        }
      }
    )
  }

  firstStep(sub_tournament: SubTournament) {
    if (sub_tournament) {
      this.sub_tournament = sub_tournament
      this.paginationResults.id = sub_tournament.id;
      this.getSubTournamentResults(this.paginationResults.id)
    }
  }
  secondStep(sub_tournament: SubTournament) {
    if (sub_tournament) {
      this.sub_tournament = sub_tournament
      this.paginationRival.id = sub_tournament.id;
      this.getSubTournamentRivals(this.paginationRival.id)
    } else {
      this.sub_tournament_rivals = []
    }
  }
  thirdStep(sub_tournament: SubTournament) {
    if (sub_tournament) {
      this.sub_tournament = sub_tournament
      this.paginationRival.id = sub_tournament.id;
      this.getSubTournamentRivals(this.paginationRival.id)
    } else {
      this.sub_tournament_rivals = []
    }
  }
  fourthStep(sub_tournament: SubTournament) {
    if (sub_tournament) {
      this.sub_tournament = sub_tournament
      this.paginationRival.id = sub_tournament.id;
      this.getSubTournamentRivals(this.paginationRival.id)
    } else {
      this.sub_tournament_rivals = []
    }
  }
  fifthStep(sub_tournament: SubTournament) {
    if (sub_tournament) {
      this.sub_tournament = sub_tournament
      this.paginationRival.id = sub_tournament.id;
      this.getSubTournamentRivals(this.paginationRival.id)
    } else {
      this.sub_tournament_rivals = []
    }
  }

  getAwards(){
    if(this.tournamentId){
      this.paginationResults.id = this.tournamentId;
      let request = Object.assign({},this.paginationResults) as GetTournamentAwardsRequest;
      this._store.dispatch(getTournamentAwardsAction({requestData:request}));
    }
  }

  updateCountdown() {
    // Получаем текущую дату и время
    const currentDate = moment();

    // Рассчитываем разницу между текущей и целевой датой
    const duration = moment.duration(this.endDate.diff(currentDate));
    const startTime = moment.duration(this.startDate.diff(currentDate))

    // Получаем оставшееся количество дней, часов, минут и секунд
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    const start_days = Math.floor(startTime.asDays());
    const start_hours = startTime.hours();
    const start_minutes = startTime.minutes();
    const start_seconds = startTime.seconds();

    // Форматируем вывод обратного отсчета
    if (seconds) {
      this.countdown = `${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
    } else {
      this.countdown = ''
    }
    // Форматируем вывод обратного отсчета
    if (start_seconds) {
      this.startCountdown = `${start_days} дн. ${start_hours} ч. ${start_minutes} мин. ${start_seconds} сек.`;
    } else {
      this.startCountdown = ''
    }
  }
  getSubTournamentDetail() {
    if (this.subTournamentId) {
      this._store.dispatch(getSubTournamentDetailAction({requestData: this.subTournamentId}));
    }
  }

  participantPageChanged(event: number) {
    if (event) {
      const objCopy = {...this.paginationParticipants};
      objCopy.page = event
      this.paginationParticipants = objCopy
      this.getSubTournamentParticipants();
    }
  }

  awardsPageChanged(event: number) {
    if (event) {
      this.paginationAwardsResults.page = event
      this.getAwards();
    }
  }

  resultPageChanged(event: number) {
    const objCopy = {...this.paginationResults};
    objCopy.page = event
    this.paginationResults = objCopy
    this.getSubTournamentResults(this.paginationResults.id);
  }

  getSubTournamentParticipants() {
    let pageRequest: GetSubTournamentParticipantsRequest = {page: 1, id: 0};
    Object.assign(pageRequest, this.paginationParticipants);
    pageRequest = this.paginationParticipants as GetSubTournamentParticipantsRequest;
    this._store.dispatch(clearGetSubTournamentParticipantsAction())
    this._store.dispatch(getSubTournamentParticipantsAction({requestData: pageRequest}));
  }

  getSubTournamentWinners() {
    let pageRequest: GetSubTournamentWinnersRequest = {id: 0};
    Object.assign(pageRequest, this.paginationWinner);
    pageRequest = pageRequest as GetSubTournamentWinnersRequest;
    this._store.dispatch(getSubTournamentWinnersAction({requestData: pageRequest}));
  }

  getSubTournamentResults(id: number) {
    let pageRequest: GetSubTournamentResultsRequest = {page: 1, id: id};
    Object.assign(pageRequest, this.paginationResults);
    pageRequest = pageRequest as GetSubTournamentResultsRequest;
    this._store.dispatch(getSubTournamentResultsAction({requestData: pageRequest}));
  }

  getSubTournamentRivals(id: number) {
    let pageRequest: GetSubTournamentRivalsRequest = {id: id};
    Object.assign(pageRequest, this.paginationRival);
    pageRequest = pageRequest as GetSubTournamentRivalsRequest;
    this._store.dispatch(getSubTournamentRivalsAction({requestData: pageRequest}));
  }

  getTournamentInfo() {
    if (this.tournamentId) {
      this._store.dispatch(getTournamentDetailAction({requestData: this.tournamentId}));
    }
  }

  participateTournament() {
    let request = {locale_id: 1, sub_tournament_id: this.firstSubTournament.id} as ParticipateTournamentRequest;
    if (request.sub_tournament_id) {
      this._store.dispatch(OnPayTournamentAction({requestData: request}));
      this._store.select(payTournamentSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        if (item.data) {
          window.location.href = item.data.pg_redirect_url
        }
      });
    }
  }

  // @ts-ignore
  getSubTournament(stepId: number): SubTournament {
    if (this.tournamentDetails) {
      // @ts-ignore
      return this.tournamentDetails.sub_tournaments?.find(item => item.step_id == stepId);
    }
  }
  createTournamentAttempt() {
    if (this.tournamentDetails.subject_id) {
      let request = {
        sub_tournament_id: this.currentSubTournament.id,
        locale_id: this.locale_id,
      } as CreateTournamentAttemptRequest;
      this._store.dispatch(createTournamentAttemptAction({requestData: request}));
    }
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
  protected readonly StrHelper = StrHelper;
  protected readonly parseInt = parseInt;
  protected readonly console = console;
  protected readonly JSON = JSON;
}
