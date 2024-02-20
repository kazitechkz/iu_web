import {Component, ContentChild, Input, OnInit} from '@angular/core';
import {ShowErrorDirective} from "../../../core/directives/show-error.directive";
import {ErrorService} from "../../services/error.service";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'core-input',
  templateUrl: './error-form-field.component.html',
  styleUrls: ['./error-form-field.component.scss']
})
export class ErrorFormFieldComponent implements OnInit {
  @ContentChild(ShowErrorDirective, { static: true }) errorDirective!: ShowErrorDirective;

  constructor(private errorService: ErrorService) { }

  get errorMessage(): string | null {
    const errors = Object.entries(
      this.errorDirective?.ngControl?.control?.errors || {}
    );

    if (!this.errorDirective?.ngControl?.dirty && !this.errorDirective?.ngControl?.touched) return '';
    if (!errors.length) { return null;
    }

    const passedControlName = this.errorDirective?.controlName;
    const formControlName = passedControlName ?? 'This field';
    return this.errorService.getErrorValidationMessage(formControlName, errors);
  }

  ngOnInit() {
    if (!this.errorDirective) {
      throw new Error('Without showError directive this is a useless component!');
    }
  }

  protected readonly faEnvelope = faEnvelope;
}
