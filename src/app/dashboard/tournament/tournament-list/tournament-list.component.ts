import {Component, OnInit} from '@angular/core';
import {
  faBook,
  faCircleCheck,
  faClock,
  faForwardFast,
  faGift,
  faLanguage,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";
// Initialization for ES Users
import {
  Tab,
  initTE,
} from "tw-elements";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit{

  ngOnInit(): void {
    initTE({Tab});

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
}
