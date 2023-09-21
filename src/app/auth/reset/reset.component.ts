import {Component, DestroyRef, inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {ToastrService} from "ngx-toastr";
import {ResetPasswordRequest, SendResetTokenRequest} from "../../shared/store/auth/reset/Reset.request";
import {resetPasswordAction, sendResetTokenAction} from "../../shared/store/auth/reset/Reset.action";
import {getRegisterState} from "../../shared/store/auth/register/Register.selector";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";
import {RegisterState} from "../../shared/store/auth/register/Register.state";
import {getResetPasswordState, getSendResetTokenState} from "../../shared/store/auth/reset/Reset.selector";
import {ResetPasswordState, SendResetTokenState} from "../../shared/store/auth/reset/Reset.state";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {

  errors:Record<string, string[]> | null = null;
  private store = inject(Store)
  private toastr = inject(ToastrService)
  destroyRef = inject(DestroyRef);
  reset_form : FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    code: new FormControl("", [
      Validators.required,
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.max(4),
      Validators.max(255),
    ]),
  });

  onSubmit() {
    if(this.reset_form.valid){
      var resetPassword = this.reset_form.getRawValue() as ResetPasswordRequest;
      this.store.dispatch(resetPasswordAction({requestData:resetPassword}));
      this.store.select(getResetPasswordState).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item:ResetPasswordState) =>{
        if(item.errors){
          this.errors = item.errors;
        }
      })
    }
    else{
      this.toastr.warning("Заполните все поля!");
    }
  }

  sendResetToken(){
    if(this.reset_form.controls["email"].valid){
      var sendResetToken = this.reset_form.getRawValue() as SendResetTokenRequest;
      this.store.dispatch(sendResetTokenAction({requestData:sendResetToken}));
      this.store.select(getSendResetTokenState).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item:SendResetTokenState) =>{
        if(item.errors){
          this.errors = item.errors;
        }
      })
    }
    else{
      this.toastr.warning("Заполните поле Email");
    }
  }
}
