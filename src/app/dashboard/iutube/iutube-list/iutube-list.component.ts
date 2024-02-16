import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-iutube-list',
  templateUrl: './iutube-list.component.html',
  styleUrls: ['./iutube-list.component.scss']
})
export class IutubeListComponent implements OnInit{
  onYoutubePlayer() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngOnInit(): void {
    this.onYoutubePlayer();
  }
}
