import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalTranslateService} from "../../shared/services/globalTranslate.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import {autoUnsubscribe} from "../../core/helpers/autoUnsubscribe";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  ngOnInit(): void {
      this.activeRoute.queryParams.pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
        console.log(item)
      })
  }
  private _store = inject(Store);
  destroyRef = inject(DestroyRef);
  public translate = inject(GlobalTranslateService)
  public activeRoute = inject(ActivatedRoute)
  errors:Record<string, string[]> | null = null;
  isSend: boolean = false
  login_form: FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.min(4),
      Validators.max(255),
    ]),
  });

  onSubmit() {
    if (this.login_form.valid) {
      this.isSend = true

    } else {
      this.isSend = false
    }
  }


  changeLang(lang: string) {
    this.translate.onLangChange(lang)
  }

  protected readonly faEnvelope = faEnvelope;
}
