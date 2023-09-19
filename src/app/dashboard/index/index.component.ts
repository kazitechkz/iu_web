import { Component } from '@angular/core';
import {AppConstants} from "../../core/constants";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  primaryColor: string = AppConstants.primaryColor;
}
