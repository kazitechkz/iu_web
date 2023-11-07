import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey : string = 'AIzaSyBxNNMyFww5Rh4JnY2tvD_gq6hVRrlSdBY';
  channel: string = 'UCH4j1naZXB5S-UTZUi62ttw'
  auth_token = "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";

  public http = inject(HttpClient)
  getVideosForChanel(): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' + this.channel + '&order=date&part=snippet&type=video&access_token=' + this.auth_token
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}
