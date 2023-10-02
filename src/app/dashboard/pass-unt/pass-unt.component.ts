import { Component } from '@angular/core';
import {ColorConstants} from "../../core/constants/color.constants";
import {faClock,faBook,faLanguage} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-pass-unt',
  templateUrl: './pass-unt.component.html',
  styleUrls: ['./pass-unt.component.scss']
})
export class PassUntComponent {
  faClock = faClock;
  faBook = faBook;
  faLanguage = faLanguage;
  protected readonly ColorConstants = ColorConstants;
}
