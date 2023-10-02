import { Component } from '@angular/core';
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  routesName = RoutesName
}
