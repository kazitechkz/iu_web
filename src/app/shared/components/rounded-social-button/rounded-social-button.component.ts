import { Component,Input } from '@angular/core';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-rounded-social-button',
  templateUrl: './rounded-social-button.component.html',
  styleUrls: ['./rounded-social-button.component.scss']
})
export class RoundedSocialButtonComponent {
  @Input() bg_color: string|null = "bg-blue";
  @Input() bg_color_hover: string|null = "bg-blue";
  @Input() icon: IconProp|null = null;
}
