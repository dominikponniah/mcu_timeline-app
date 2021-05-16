import { NgIf } from '@angular/common';
import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MediaItem } from '../interfaces/media-item';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @Input("value") mediaItem: MediaItem;
  
  isYouTube = false;
  videoURL: SafeResourceUrl = null;

  constructor(
    public sanitizer: DomSanitizer
  ) {
  }
  
  ngOnInit() {
    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.mediaItem.trailer_url);
    if(this.mediaItem.trailer_url.includes("youtube.com")) {
      this.isYouTube = true;
        } else {
          this.isYouTube = false;
        }

  }

}
