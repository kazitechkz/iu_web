import {Component, inject, Input} from '@angular/core';
import {ControlContainer, FormControl, FormControlName, FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  //@ts-ignore
  public form: FormGroup;
  //@ts-ignore
  public control : FormControl;


    @Input({required:true}) input_name:string = "";
    @Input({required:true}) type:string = "text";
    @Input({required:true}) placeholder:string = "text";
    @Input({required:true}) label:string = "text";
    @Input({required:true}) error_message:string = "text";
    @Input() backErrors:Record<string, string[]>|null = null;

  formControlNameDirective = inject(FormControlName);
  controlContainer = inject(ControlContainer);
  ngOnInit() {
    this.form = <FormGroup>this.controlContainer.control;
    this.control = <FormControl>this.form.get(this.input_name);
  }
  get controlName() {
    return this.formControlNameDirective.name;
  }

  resetValidation(){
    if(this.backErrors){
      if (this.backErrors[this.input_name]){
        this.backErrors = null;
      }
    }
  }

    protected isInvalidInput():boolean{
      if(this.backErrors){
        if (this.backErrors[this.input_name]){
          return true;
        }
      }
      return  (this.form.controls[this.input_name].invalid && this.form.controls[this.input_name].touched)
    }



}
