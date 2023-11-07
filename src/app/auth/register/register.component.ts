import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import { faGoogle,faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {FormControl, FormGroup, isFormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {registerAction} from "../../shared/store/auth/register/Register.action";
import {RegisterRequest} from "../../shared/store/auth/register/RegisterRequest";
import {getRegisterState} from "../../shared/store/auth/register/Register.selector";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {RegisterState} from "../../shared/store/auth/register/Register.state";
import {Subscription} from "rxjs";
import {RoutesName} from "../../core/constants/routes.constants";
import {NgxSpinnerService} from "ngx-spinner";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {StrHelper} from "../../core/helpers/str.helper";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,OnDestroy{
  faGoogle = faGoogle;
  faFacebookF = faFacebookF;
  errors:Record<string, string[]> | null = null;
  destroyRef = inject(DestroyRef);
  private store = inject(Store<RegisterComponent>)
  ngOnDestroy(): void {

    }

  ngOnInit(): void {

    }
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
      let requestData = this.register_form.getRawValue() as RegisterRequest;
      this.store.dispatch(registerAction({requestData:requestData}));
     this.store.select(getRegisterState).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item:RegisterState) =>{
          if(item.errors){
            this.errors = item.errors;
          }
      })
  }

    protected readonly RoutesName = RoutesName;
  protected readonly StrHelper = StrHelper;
}
