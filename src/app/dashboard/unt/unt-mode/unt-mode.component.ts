import { Component } from '@angular/core';
import {
  faArrowRightArrowLeft,
  faBook,
  faBullseye,
  faCircleQuestion,
  faGraduationCap,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-unt-mode',
  templateUrl: './unt-mode.component.html',
  styleUrls: ['./unt-mode.component.scss']
})
export class UntModeComponent {

  protected readonly faBullseye = faBullseye;
  protected readonly faBook = faBook;
  protected readonly faStar = faStar;
  protected readonly faCircleQuestion = faCircleQuestion;
  protected readonly RoutesName = RoutesName;
  protected readonly faArrowRightArrowLeft = faArrowRightArrowLeft;
  protected readonly faGraduationCap = faGraduationCap;
}
