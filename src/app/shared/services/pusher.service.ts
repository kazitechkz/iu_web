import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Pusher from 'pusher-js';

@Injectable({
  providedIn: 'root',
})
export class PusherService {
  private pusher: any;

  constructor() {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      // @ts-ignore
      encrypted: true,
    });
  }

  public getChannel(channelName: string) {
    return this.pusher.subscribe(channelName);
  }
}
