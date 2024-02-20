import {Component, inject} from '@angular/core';
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss']
})
export class TermsOfUseComponent {
  public translate = inject(GlobalTranslateService);

}
