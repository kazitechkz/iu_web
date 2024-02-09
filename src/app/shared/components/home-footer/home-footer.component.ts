import { Component } from '@angular/core';
import {
  faCreditCard,
  faFileSignature,
  faHandshake,
  faLocation,
  faLocationDot,
  faMoneyCheck,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import {faGoogle, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss']
})
export class HomeFooterComponent {

  protected readonly faFileSignature = faFileSignature;
  protected readonly faHandshake = faHandshake;
  protected readonly faMoneyCheck = faMoneyCheck;
  protected readonly faLocation = faLocation;
  protected readonly faLocationDot = faLocationDot;
  protected readonly faPhoneAlt = faPhoneAlt;
  protected readonly faWhatsapp = faWhatsapp;
  protected readonly faGoogle = faGoogle;
  protected readonly Date = Date;
  protected readonly faCreditCard = faCreditCard;
}
