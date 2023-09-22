import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/auth.service";
import {SessionService} from "../../services/session.service";
import {LocalKeysConstants} from "../../../core/constants/local-keys.constants";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;
  private _authService = inject(AuthService)
  private _sessionService = inject(SessionService)

  ngOnInit(): void {

  }
}
