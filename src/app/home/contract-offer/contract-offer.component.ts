import {Component, inject} from '@angular/core';
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";

@Component({
  selector: 'app-contract-offer',
  templateUrl: './contract-offer.component.html',
  styleUrls: ['./contract-offer.component.scss']
})
export class ContractOfferComponent {
  public translate = inject(GlobalTranslateService);
}
