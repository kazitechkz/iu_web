import {Component} from '@angular/core';
import {faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {FormControl, FormGroup, isFormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../shared/store/auth/login/loginRequest";
import {Store} from "@ngrx/store";
import {loginAction} from "../../shared/store/auth/login/login.action";
import {getloginState} from "../../shared/store/auth/login/login.selector";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private store: Store) {
    }

    faGoogle = faGoogle;
    faFacebookF = faFacebookF;

    login_form: FormGroup = new FormGroup({
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
        let requestData = this.login_form.getRawValue() as LoginRequest;
        this.store.dispatch(loginAction({requestData: requestData}));
        this.store.select(getloginState).subscribe(item => {
          console.log(item)
        })
    }

}
