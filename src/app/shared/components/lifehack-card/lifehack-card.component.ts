import {Component, Input} from '@angular/core';
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-lifehack-card',
  templateUrl: './lifehack-card.component.html',
  styleUrls: ['./lifehack-card.component.scss']
})
export class LifehackCardComponent {
  @Input() title: string = "";
  @Input() backgroundImage:string = "";
  @Input() mainLink:string = RoutesName.lifeHack;
  @Input() createdAt:string = "";
  @Input() icon:string = "fas fa-rocket"
  @Input() iconLink:string = RoutesName.lifeHack;
  @Input() iconTitle:string = "";
}
