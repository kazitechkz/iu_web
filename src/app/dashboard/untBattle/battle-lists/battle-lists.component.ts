import {Component, inject, OnInit} from '@angular/core';
import {PusherService} from "../../../shared/services/pusher.service";

@Component({
  selector: 'app-battle-lists',
  templateUrl: './battle-lists.component.html',
  styleUrls: ['./battle-lists.component.scss']
})
export class BattleListsComponent implements OnInit{
  pusherService = inject(PusherService);
  ngOnInit(): void {
    this.pusherService.getChannel("unt-battle-online").join("unt-battle-online")
  }

}
