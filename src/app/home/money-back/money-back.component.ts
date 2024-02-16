import {Component, inject} from '@angular/core';
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";

@Component({
  selector: 'app-money-back',
  templateUrl: './money-back.component.html',
  styleUrls: ['./money-back.component.scss']
})
export class MoneyBackComponent {
  public translate = inject(GlobalTranslateService);
}
