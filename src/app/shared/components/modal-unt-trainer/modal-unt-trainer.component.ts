import {Component, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import {SlickCarouselComponent} from "ngx-slick-carousel";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {NgxSmartModalService} from "ngx-smart-modal";
import {faArrowRight, faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Subject} from "../../models/subject.model";

@Component({
  selector: 'app-modal-unt-trainer',
  templateUrl: './modal-unt-trainer.component.html',
  styleUrls: ['./modal-unt-trainer.component.scss']
})
export class ModalUntTrainerComponent {
  @Output() dialogResult: EventEmitter<boolean> = new EventEmitter<boolean>();
  protected readonly ImageHelper = ImageHelper;
  protected readonly Object = Object;
  dialog = inject(NgxSmartModalService);

  openDialog() {
    this.dialog.getModal('buy-trainer-unt').open();
  }

  acceptAndPass(){
    this.dialogResult.emit(true);
  }


  protected readonly faCheck = faCheck;
  protected readonly faArrowRight = faArrowRight;
}
