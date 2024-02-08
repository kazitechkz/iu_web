import {Component, DestroyRef, HostListener, inject, OnInit} from '@angular/core';
import { initFlowbite } from 'flowbite';
import {Store} from "@ngrx/store";
import {Me} from "../../models/user.model";
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
  fixedNavBar:boolean = false;

  getUserInfo(){
    this.me = this.sessionService.getDataFromLocalStorage(LocalKeysConstants.user) as Me;
  }
  ngOnInit(): void {
    this.getUserInfo();
    initFlowbite();
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.fixedNavBar = true;
    } else {
      this.fixedNavBar = false;
    }
  }

}
