import {Component, inject} from '@angular/core';
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {
  public translate = inject(GlobalTranslateService);
}
