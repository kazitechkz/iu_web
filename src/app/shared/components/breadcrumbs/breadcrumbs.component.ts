import {Component, Input} from '@angular/core';
import {faHomeAlt} from "@fortawesome/free-solid-svg-icons";
import {BreadcrumbModel} from "../../models/breadcrumb.model";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {

  @Input() breadcrumbs:BreadcrumbModel[] = [];

}
