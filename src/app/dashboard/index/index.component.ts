import {Component} from '@angular/core';
import {ColorConstants} from "../../core/constants/color.constants";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    protected readonly ColorConstants = ColorConstants;
}
