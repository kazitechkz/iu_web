import { Component } from '@angular/core';
import * as moment from "moment/moment";
import {RoutesName} from "../../../core/constants/routes.constants";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-unt-plan',
  templateUrl: './unt-plan.component.html',
  styleUrls: ['./unt-plan.component.scss']
})
export class UntPlanComponent {

  protected readonly moment = moment;
  protected readonly RoutesName = RoutesName;
  protected readonly faCheckCircle = faCheckCircle;
}
