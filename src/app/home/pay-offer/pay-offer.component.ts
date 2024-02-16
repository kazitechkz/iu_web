import {Component, inject} from '@angular/core';
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";

@Component({
  selector: 'app-pay-offer',
  templateUrl: './pay-offer.component.html',
  styleUrls: ['./pay-offer.component.scss']
})
export class PayOfferComponent {
  public translate = inject(GlobalTranslateService);
}
