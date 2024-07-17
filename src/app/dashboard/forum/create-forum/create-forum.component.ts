import {Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {subjectGetAction} from "../../../shared/store/subject/subject.action";
import {getSubjectsState} from "../../../shared/store/subject/subject.selector";
import {autoUnsubscribe} from "../../../core/helpers/autoUnsubscribe";
import {Subject} from "../../../shared/models/subject.model";
import {UploadAdapterService} from "../../../shared/services/uploadAdapter.service";
import {HttpClient} from "@angular/common/http";
import {CreateForumRequest} from "../../../shared/store/forum/createForum/createForum.request";
import {createForumAction} from "../../../shared/store/forum/createForum/createForum.action";
import {createForumSelector} from "../../../shared/store/forum/createForum/createForum.selector";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {GlobalTranslateService} from "../../../shared/services/globalTranslate.service";
import {RoutesName} from "../../../core/constants/routes.constants";
@Component({
  selector: 'app-create-forum',
  templateUrl: './create-forum.component.html',
  styleUrls: ['./create-forum.component.scss']
})
export class CreateForumComponent implements OnInit,OnDestroy{
  errors:Record<string, string[]> | null = null;
  destroyRef = inject(DestroyRef);
  private _store = inject(Store);
  private http = inject(HttpClient);
  constructor(private fb: FormBuilder) { }
  //Data
  public Editor: any = ClassicEditor;
  //@ts-ignore
  subjects:Subject[];
  public translate = inject(GlobalTranslateService);

  //Data
  createForum:FormGroup = this.fb.group({
    text:new FormControl("",[
      Validators.required,
      Validators.maxLength(255),
    ]),
    attachment:new FormControl("",[
      Validators.required,
      Validators.maxLength(5000),
    ]),
    subject_id:new FormControl("",[
      Validators.required,
    ]),
  })

  onReadyCkeditor(editor: any): void {
    // @ts-ignore
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
      return new UploadAdapterService(loader,this.http,"forum")
    };
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.getSubjects();
  }

  getSubjects(){
    this._store.dispatch(subjectGetAction());
    this._store.select(getSubjectsState).pipe(autoUnsubscribe(this.destroyRef)).subscribe(item=>{
      if(item.data){
        this.subjects = item.data;
      }
    });
  }

  onSubmit(){
    if(this.createForum.valid){
      let requestData = this.createForum.getRawValue() as CreateForumRequest;
      this._store.dispatch(createForumAction({requestData: requestData}));
      this._store.select(createForumSelector).pipe(autoUnsubscribe(this.destroyRef)).subscribe((item) => {
        if (item.errors) {
          this.errors = item.errors;
        }
      })
    }
  }


  protected readonly faCheck = faCheck;
    protected readonly RoutesName = RoutesName;
}
