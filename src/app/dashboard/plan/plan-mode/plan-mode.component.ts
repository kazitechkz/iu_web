import { Component } from '@angular/core';
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faBook, faCircleQuestion, faGraduationCap, faLanguage, faStar} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-plan-mode',
  templateUrl: './plan-mode.component.html',
  styleUrls: ['./plan-mode.component.scss']
})
export class PlanModeComponent {

    protected readonly ImageHelper = ImageHelper;
  protected readonly faBook = faBook;
  protected readonly faStar = faStar;
  protected readonly faLanguage = faLanguage;
  protected readonly faCircleQuestion = faCircleQuestion;
  protected readonly faGraduationCap = faGraduationCap;
  protected readonly RoutesName = RoutesName;
}
