import {Component, Input} from '@angular/core';
import {RoutesName} from "../../../core/constants/routes.constants";
import {ImageHelper} from "../../../core/helpers/image.helper";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent {
  @Input() title: string = "";
  @Input() backgroundImage:string|null|undefined = null;
  @Input() mainLink:string = RoutesName.lifeHack;
  @Input() publishedAt:string = "";
  @Input() categoryLink:string|null|undefined = null;
  @Input() categoryTitle:string|null|undefined = null;
  @Input() authorName:string|null|undefined = null;
  @Input() authorImage:string|null|undefined = null;

  protected readonly ImageHelper = ImageHelper;
}
