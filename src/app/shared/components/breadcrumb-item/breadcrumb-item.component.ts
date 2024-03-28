import {Component, Input} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.scss']
})
export class BreadcrumbItemComponent {
    @Input() title:string|null = null;
    @Input() icon:IconDefinition|null = null;
    @Input() route:string|null = null;
    @Input() last:boolean = false;

}
