import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {
  faBook,
  faCheck,
  faCircleCheck,
  faClock,
  faForwardFast,
  faLanguage,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import {Store} from "@ngrx/store";
// @ts-ignore
import {Subject} from "../../models/subject.model";
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {CreateAttemptRequest} from "../../../shared/store/attempt/createAttempt/createAttempt.request";
import {createAttemptAction} from "../../../shared/store/attempt/createAttempt/createAttempt.action";
import {ImageHelper} from "../../../core/helpers/image.helper";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ModalUntTrainerComponent} from "../../../shared/components/modal-unt-trainer/modal-unt-trainer.component";
import {checkPlanUNTAction} from "../../../shared/store/plan/checkPlanUNT/checkPlanUNT.action";
import {checkPlanUNTSelector} from "../../../shared/store/plan/checkPlanUNT/checkPlanUNT.selector";

@Component({
  selector: 'app-single-subject',
  templateUrl: './single-subject.component.html',
  styleUrls: ['./single-subject.component.scss']
})
export class SingleSubjectComponent implements OnInit{
  //@ts-ignore
    @ViewChild('modalBuyUNT', { static: false }) modalBuyUNT: ModalUntTrainerComponent;
    private _store = inject(Store);
    destroyRef = inject(DestroyRef);
    protected readonly faClock = faClock;
    protected readonly faBook = faBook;
    protected readonly faLanguage = faLanguage;
    public translate = inject(GlobalTranslateService);
    subjects:Subject[] = [];
    hasSubscription:boolean = false;
    locale_id:number = 1;
    chosenSubject:number[] = [];

  ngOnInit(): void {
    this.checkSubscription();
    this.getSubjects();
  }

  getSubjects(){
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.subjects = item.data;
      }
    })
  }

  checkSubscription() {
    this._store.dispatch(checkPlanUNTAction());
    this._store.select(checkPlanUNTSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item => {
      if (item.data) {
        this.hasSubscription = item.data;
      }
    })
  }

  chooseSubject(id:number){
    const index = this.chosenSubject.indexOf(id); // Check if target exists in the array
    if (index === -1) {
      if(this.chosenSubject.length >=1){
        this.chosenSubject.splice(0, 1);
      }
      this.chosenSubject.push(id);
    } else {
      // If target exists, remove it from the array
      this.chosenSubject.splice(index, 1);
    }
  }

  checkIfUserHasPermission(){
    if(!this.hasSubscription){
      this.modalBuyUNT.openDialog();
    }
    else {
      this.createAttempt(true);
    }
  }

  createAttempt(result:boolean){
    if (this.chosenSubject.length == 1 && result){
      let request = {subjects:this.chosenSubject, locale_id:this.locale_id, attempt_type_id:2,} as CreateAttemptRequest;
      this._store.dispatch(createAttemptAction({requestData:request}));
    }
  }

  changeLanguage(value:any){
    this.locale_id = value ? 1 : 2;
  }

  customOptions: OwlOptions = {
    loop: true,
    margin:15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoHeight:true,
    nav:false,
    navText: ["<",">"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
  }

  protected readonly faForwardFast = faForwardFast;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faCheck = faCheck;
  protected readonly faXmark = faXmark;
}
