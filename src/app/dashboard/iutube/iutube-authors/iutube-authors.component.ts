import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {ActivatedRoute, Router} from "@angular/router";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {RoutesName} from "../../../core/constants/routes.constants";
@Component({
  selector: 'app-iutube-authors',
  templateUrl: './iutube-authors.component.html',
  styleUrls: ['./iutube-authors.component.scss']
})
export class IutubeAuthorsComponent implements OnInit{
  //Injection
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService);
  private _route = inject(ActivatedRoute)
  private _router = inject(Router)
  //Injection
  //Data
  protected readonly ImageHelper = ImageHelper;
  protected RoutesName = RoutesName;
  protected faPlay = faPlay;
  //Data

  constructor() {
  }

  ngOnInit(): void {
    this._route.params.pipe(autoUnsubscribe(this.destroyRef)).subscribe(params => {
      console.log(params["id"]);
    });
    this.onYoutubePlayer();

  }

  onYoutubePlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
