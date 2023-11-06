import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Collapse } from "flowbite";
import type { CollapseOptions, CollapseInterface } from "flowbite";
import {Store} from "@ngrx/store";
import {Me} from "../../models/user.model";
import {getAccountState} from "../../store/user/account/account.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {SessionService} from "../../services/session.service";
import {LocalKeysConstants} from "../../../core/constants/local-keys.constants";

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit{
  private _store = inject(Store);
  private destroyRef:DestroyRef = inject(DestroyRef);
  private sessionService:SessionService = inject(SessionService);

  //Data
  //@ts-ignore
  me:Me;

  getUserInfo(){
    this.me = this.sessionService.getDataFromLocalStorage(LocalKeysConstants.user) as Me;
  }
  ngOnInit(): void {
    this.getUserInfo();
    initFlowbite();
  }

}
