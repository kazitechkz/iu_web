import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {NgxSmartModalService} from "ngx-smart-modal";
import {Subject} from "../../models/subject.model";
import {GlobalTranslateService} from "../../services/globalTranslate.service";

@Component({
  selector: 'app-modal-content-offer',
  templateUrl: './modal-content-offer.component.html',
  styleUrls: ['./modal-content-offer.component.scss']
})
export class ModalContentOfferComponent {
  @Output() dialogResult: EventEmitter<boolean> = new EventEmitter<boolean>();
  subject:Subject|null = null;
  dialog = inject(NgxSmartModalService);
  public translate = inject(GlobalTranslateService);

  openDialog(subject:Subject|null) {
    this.subject = subject;
    this.dialog.getModal('buy-content-unt').open();
  }
  protected readonly faCheck = faCheck;
}
