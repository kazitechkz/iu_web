import { Component } from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iu_web';

  // loadCurrentUser() {
  //   const token = localStorage.getItem('token');
  //   this.accountService.loadCurrentUser(token).subscribe(() => {
  //     console.log('loaded user');
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
