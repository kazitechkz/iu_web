import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {RoutesName} from "../../../core/constants/routes.constants";
import {Store} from "@ngrx/store";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {myBalanceAction} from "../../../shared/store/wallet/myBalance/myBalance.action";
import {myBalanceSelector} from "../../../shared/store/wallet/myBalance/myBalance.selector";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {createForumAction} from "../../../shared/store/forum/createForum/createForum.action";
import {createForumSelector} from "../../../shared/store/forum/createForum/createForum.selector";
import {FindUserByEmailRequest} from "../../../shared/store/user/findUserByEmail/findUserByEmail.request";
import {findUserByEmailAction} from "../../../shared/store/user/findUserByEmail/findUserByEmail.action";
import {findUserByEmailSelector} from "../../../shared/store/user/findUserByEmail/findUserByEmail.selector";
import {OrdinaryUser} from "../../../shared/models/user.model";
import {WalletTransferRequest} from "../../../shared/store/wallet/walletTransfer/walletTransfer.request";
import {walletTransferAction} from "../../../shared/store/wallet/walletTransfer/walletTransfer.action";
import {walletTransferSelector} from "../../../shared/store/wallet/walletTransfer/walletTransfer.selector";
import {faArrowRight, faArrowsRotate, faUser} from "@fortawesome/free-solid-svg-icons";
import {ImageHelper} from "../../../core/helpers/image.helper";

@Component({
  selector: 'app-wallet-transfer',
  templateUrl: './wallet-transfer.component.html',
  styleUrls: ['./wallet-transfer.component.scss']
})
export class WalletTransferComponent implements OnInit,OnDestroy {

    //Injection
    private _store = inject(Store);
    destroyRef = inject(DestroyRef);
    //Injection
    //Data
    //@ts-ignore
    wallet:WalletIndexModel;
    //@ts-ignore
    toUser:OrdinaryUser|null;
    //@ts-ignore
    toUserId:number|null;
    balance:number = 0;
    errors:Record<string, string[]> | null = null;
    openModal:boolean = false;
    //Data
    protected readonly RoutesName = RoutesName;
    findUserForm:FormGroup = this.fb.group({
      email:new FormControl("",[
        Validators.required,
        Validators.email,
        Validators.max(255),
      ]),
    });
    walletTransferGroup:FormGroup = this.fb.group({
      amount:new FormControl(0,[
        Validators.required,
        Validators.min(10),
        Validators.max(100000),
      ]),
      toUserId:new FormControl(0,[
        Validators.required,
      ]),
    })
    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
      this.getMyBalance();
    }

    findUserByEmail(){
      if(this.findUserForm.valid){
        let requestData = this.findUserForm.getRawValue() as FindUserByEmailRequest;
        this._store.dispatch(findUserByEmailAction({requestData: requestData}));
        this._store.select(findUserByEmailSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item) => {
          if(item.data){
            this.toUser = item.data;
            this.toUserId = item.data.id;
          }
          if (item.errors) {
            this.errors = item.errors;
            this.toUserId = 0;
            this.openModal = false;
            this.toUser = null;
          }
        })
      }
    }

    selectUser(id:number){
      if(this.toUserId){
        this.toUserId = null;
        this.findUserForm.controls["toUserId"].setValue(0);
      }
      else{
        this.toUserId = id;
        this.walletTransferGroup.controls["toUserId"].setValue(id);
      }
    }


    showModal(){
      this.openModal = true;
    }

    getMyBalance(){
      this._store.dispatch(myBalanceAction());
      this._store.select(myBalanceSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
        if(item.data){
          this.balance = item.data;
          this.walletTransferGroup.controls["amount"].setValidators([
            (control: AbstractControl) => Validators.max(item.data??0)(control)
          ]);

        }
      })
    }

  walletTransfer(){
    if(this.walletTransferGroup.valid){
      let requestData = this.walletTransferGroup.getRawValue() as WalletTransferRequest;
      this._store.dispatch(walletTransferAction({requestData: requestData}));
      this._store.select(walletTransferSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item) => {
        if(item.data){
          this.walletTransferGroup.reset();
          this.findUserForm.reset();
          this.toUserId = null;
          this.toUser = null;
          this.openModal = false;
          this.getMyBalance();
        }
        if (item.errors) {
          this.errors = item.errors;
        }
      })
    }
  }




    ngOnDestroy(): void {

    }


  protected readonly faUser = faUser;
  protected readonly ImageHelper = ImageHelper;
  protected readonly faArrowRight = faArrowRight;
  protected readonly faArrowsRotate = faArrowsRotate;
}
