import { Component } from '@angular/core';
import {
  faArrowRightArrowLeft,
  faBook,
  faBullseye,
  faCircleQuestion,
  faGraduationCap, faLanguage,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";
import {ImageHelper} from "../../../core/helpers/image.helper";

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
  protected readonly ImageHelper = ImageHelper;
  protected readonly faLanguage = faLanguage;
}
