import {Component, inject, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {GoogleTagManagerService} from "angular-google-tag-manager";
import {NavigationEnd, Router} from "@angular/router";
import {Metrika} from "ng-yandex-metrika";
import {Location} from "@angular/common";
import {Store} from "@ngrx/store";
import {UtmAction} from "./shared/store/utm/utm.action";
import {UtmRequest} from "./shared/store/utm/utm.request";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iu_web';
  private _translateService = inject(TranslateService);
  private _router = inject(Router);
  private _metrika = inject(Metrika)
  private _location = inject(Location)
  private _store = inject(Store)
  constructor(private gtmService: GoogleTagManagerService) {
    let prevPath = this._location.path();
    //Google Tag and Yandex Metrika
    this._router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          pageName: item.url
        };
        this.gtmService.pushTag(gtmTag);
        const newPath = this._location.path();
        const cleanUrl = this.removeNumbersFromURL(newPath);
        let requestUtm: UtmRequest = {url: cleanUrl}
        this._store.dispatch(UtmAction({req: requestUtm}));
        this._metrika.hit(newPath, {
          referer: prevPath,
          callback: () => {
            console.log('hit end');
           }
        }).then(r => console.log(r));
        prevPath = newPath;
      }
    });
  }

  removeNumbersFromURL(url: string): string {
    // Используем регулярное выражение для замены чисел
    return 'https://iutest.kz'+url.replace(/\/\d+/g, '');
  }


  ngOnInit(): void {
    const selectedLanguage = localStorage.getItem('lang');
    if (selectedLanguage) {
      this._translateService.use(selectedLanguage); // Set the language from Local Storage
    }
  }

}
