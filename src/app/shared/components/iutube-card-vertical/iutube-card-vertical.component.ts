import {Component, inject, Input} from '@angular/core';
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faFire, faFireBurner, faPlay} from "@fortawesome/free-solid-svg-icons";
import {IutubeVideo} from "../../models/iutubeVideo.model";
import {GlobalTranslateService} from "../../services/globalTranslate.service";
import {RoutesName} from "../../../core/constants/routes.constants";
import * as moment from "moment";

@Component({
  selector: 'app-iutube-card-vertical',
  templateUrl: './iutube-card-vertical.component.html',
  styleUrls: ['./iutube-card-vertical.component.scss']
})
export class IutubeCardVerticalComponent {

    @Input("iutube-video") iutubeVideo:IutubeVideo|null = null
    protected readonly ImageHelper = ImageHelper;
    protected readonly faPlay = faPlay;
  public translate = inject(GlobalTranslateService);

  protected readonly RoutesName = RoutesName;
  protected readonly moment = moment;
  protected readonly Image = Image;
  protected readonly faFireBurner = faFireBurner;
  protected readonly faFire = faFire;
}
