import {Component, inject, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {TranslateService} from "@ngx-translate/core";
import {GoogleTagManagerService} from "angular-google-tag-manager";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iu_web';
  private _translateService = inject(TranslateService);
  private _router = inject(Router);
  constructor(private gtmService: GoogleTagManagerService) {
    //Google Tag
    this._router.events.forEach(item => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          pageName: item.url
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
  }


  ngOnInit(): void {
    const selectedLanguage = localStorage.getItem('lang');
    if (selectedLanguage) {
      this._translateService.use(selectedLanguage); // Set the language from Local Storage
    }
  }

}
