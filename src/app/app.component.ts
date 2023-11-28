import {Component, inject, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'iu_web';
  private _translateService = inject(TranslateService)
  ngOnInit(): void {
    const selectedLanguage = localStorage.getItem('lang');
    if (selectedLanguage) {
      this._translateService.use(selectedLanguage); // Set the language from Local Storage
    }
  }

  // loadCurrentUser() {
  //   const token = localStorage.getItem('token');
  //   this.accountService.loadCurrentUser(token).subscribe(() => {
  //     console.log('loaded user');
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
