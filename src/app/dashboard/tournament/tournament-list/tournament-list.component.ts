import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {
  faBook,
  faCircleCheck,
  faClock,
  faForwardFast,
  faGift,
  faLanguage, faMoneyBill,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
// Initialization for ES Users
import {
  Tab,
  initTE,
} from "tw-elements";
import {RoutesName} from "../../../core/constants/routes.constants";
import {Store} from "@ngrx/store";
import {GetAllTournamentModel} from "../../../shared/store/tournament/getAllTournament/getAllTournament.model";
import {getAllTournamentAction} from "../../../shared/store/tournament/getAllTournament/getAllTournament.action";
import {getAttemptSelector} from "../../../shared/store/attempt/getAttempt/getAttempt.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {getAllTournamentSelector} from "../../../shared/store/tournament/getAllTournament/getAllTournament.selector";
import * as moment from "moment";

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit{

  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  //@ts-ignore
  public tournaments:GetAllTournamentModel;
  ngOnInit(): void {
    initTE({Tab});
    this.getAllTournaments();
  }

  getAllTournaments(){
    this._store.dispatch(getAllTournamentAction());
    this._store.select(getAllTournamentSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.tournaments = item.data;
        }
    });
  }


    protected readonly faClock = faClock;
    protected readonly faBook = faBook;
    protected readonly faForwardFast = faForwardFast;
    protected readonly faLanguage = faLanguage;
    protected readonly ImageHelper = ImageHelper;
    protected readonly faCircleCheck = faCircleCheck;
  protected readonly faGift = faGift;
  protected readonly faUsers = faUsers;


  protected readonly RoutesName = RoutesName;
  protected readonly moment = moment;
  protected readonly faMoneyBill = faMoneyBill;
}
