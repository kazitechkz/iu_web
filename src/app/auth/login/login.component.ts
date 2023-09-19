import { Component } from '@angular/core';
import { faGoogle,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {FormControl, FormGroup, isFormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;

  login_form : FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.max(4),
      Validators.max(255),
    ]),
  });

  onSubmit() {
    // @ts-ignore
    console.log(JSON.stringify(this.login_form.getRawValue()));
  }

}
