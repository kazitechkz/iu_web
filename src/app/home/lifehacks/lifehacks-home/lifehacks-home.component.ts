import { Component } from '@angular/core';
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-lifehacks-home',
  templateUrl: './lifehacks-home.component.html',
  styleUrls: ['./lifehacks-home.component.scss']
})
export class LifehacksHomeComponent {

  protected readonly RoutesName = RoutesName;
}
