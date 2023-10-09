import {Component, ViewChild} from '@angular/core';
import {
  faBook,
  faFlagCheckered,
  faSignal,
  faSquarePollVertical,
  faUserGraduate
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-unt-stat',
  templateUrl: './unt-stat.component.html',
  styleUrls: ['./unt-stat.component.scss']
})
export class UntStatComponent {


  constructor() {

  }




  protected readonly faSignal = faSignal;
  protected readonly faBook = faBook;
  protected readonly faSquarePollVertical = faSquarePollVertical;
  protected readonly faFlagCheckered = faFlagCheckered;
  protected readonly faUserGraduate = faUserGraduate;
}
