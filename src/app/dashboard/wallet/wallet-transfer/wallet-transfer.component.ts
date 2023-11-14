import { Component } from '@angular/core';
import {RoutesName} from "../../../core/constants/routes.constants";

@Component({
  selector: 'app-wallet-transfer',
  templateUrl: './wallet-transfer.component.html',
  styleUrls: ['./wallet-transfer.component.scss']
})
export class WalletTransferComponent {

    protected readonly RoutesName = RoutesName;
}
