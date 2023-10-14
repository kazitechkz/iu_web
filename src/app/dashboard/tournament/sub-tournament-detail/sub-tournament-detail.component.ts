import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {
  getTournamentDetailAction
} from "../../../shared/store/tournament/getTournamentDetail/getTournamentDetail.action";
import {
  getTournamentDetailSelector
} from "../../../shared/store/tournament/getTournamentDetail/getTournamentDetail.selector";
import {
  Tab,
  initTE,
} from "tw-elements";
@Component({
  selector: 'app-sub-tournament-detail',
  templateUrl: './sub-tournament-detail.component.html',
  styleUrls: ['./sub-tournament-detail.component.scss']
})
export class SubTournamentDetailComponent implements OnInit{

  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private _route = inject(ActivatedRoute);

  ngOnInit(): void {
    initTE({Tab});
  }


  getSubTournamentDetail(){
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      console.log(params["id"])
    });
  }




}
