import { Component } from '@angular/core';
import { faGoogle,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {FormControl, FormGroup, isFormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;

  register_form : FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    name: new FormControl("", [
      Validators.required,
      Validators.max(255),
    ]),
    username: new FormControl("", [
      Validators.required,
      Validators.max(255),
    ]),

    phone: new FormControl("", [
      Validators.required,
      //Validators.pattern(/^\+?77(\d{9})+$/gi),
      Validators.max(255),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.max(4),
      Validators.max(255),
    ]),
  });

  onSubmit() {
    // @ts-ignore
    console.log(JSON.stringify(this.register_form.getRawValue()));
  }
}
