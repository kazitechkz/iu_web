import {Component, Input} from '@angular/core';
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-static-life-hack',
  templateUrl: './static-life-hack.component.html',
  styleUrls: ['./static-life-hack.component.scss']
})
export class StaticLifeHackComponent {
  @Input() title: string = "";
  @Input() image:string = "";
  @Input() createdAt:string = "";
  @Input() description:string = "";
}
