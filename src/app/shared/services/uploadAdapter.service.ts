import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {APIRoutesName} from "../../core/constants/api-routes.constants";
import {map, Observable} from "rxjs";
import {ResponseData} from "../store/response_data";

export class UploadAdapterService {
  constructor(private loader:any,private http: HttpClient,private folder:string) {}
  upload(loader:any,folder:string) {
    return this.loader.file.then((file: string | Blob) => {
      let formData = new FormData();
      formData.append("upload",file);
      formData.append("folder",this.folder);
      return this.http
        .post<ResponseData<string>>(
          environment.baseUrl + APIRoutesName.uploadImage,
          formData,
        ).subscribe()
    });
  }


  abort() {
    console.error('aborted');
  }
}
