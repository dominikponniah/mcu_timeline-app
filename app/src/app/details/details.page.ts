import { EpisodeItem } from './../interfaces/episode-item';
import { TranslateService } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { Component, Input, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastController, ModalController } from '@ionic/angular';
import { MediaItem } from '../interfaces/media-item';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  @Input('value') mediaItem: MediaItem;

  videoURL: SafeResourceUrl = null;
  mediaType = '';
  mediaTypeIcon = 'tv-outline';

  watchedEpisodeItems: any[] = [];

  constructor(
    public sanitizer: DomSanitizer,
    private toastController: ToastController,
    private modalController: ModalController,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    if (
      // Check if there are any Episodes already Watched (if it is a series-item)
      localStorage.getItem(this.mediaItem.id + '_watchedEpisodeItems') !== null
    ) {
      // If positive; get the value
      this.watchedEpisodeItems = JSON.parse(
        localStorage.getItem(this.mediaItem.id + '_watchedEpisodeItems')
      );
    }

    // Sanititzing the URL to use it within the App
    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.mediaItem.trailer_url
    );

    // Checks if there are any Episodes in this MediaItem
    if (this.mediaItem.episodes?.length != 0) {
      // If yes, iterate over them
      this.mediaItem.episodes?.forEach((episode) => {
        // Checks if episode is within the List of the watched Items from Storage
        if (this.watchedEpisodeItems.includes(episode.id)) {
          // If is watched already, set true;
          episode.isWatched = true;
        } else {
          // Else, set false;
          episode.isWatched = false;
        }
      });
    }

    this.checkMediaItemType();
  }

  markEpisodes(id, index) {
    // If item is already watched, remove from list; else go to else-block.
    if (this.watchedEpisodeItems.includes(id)) {
      this.watchedEpisodeItems = this.watchedEpisodeItems.filter(
        (item) => item !== id
      );
    } else {
      // Pushing ID of watched Item to the pseudo-list.
      this.watchedEpisodeItems.push(id);
    }

    // Store data in Localstorage to persist them.
    localStorage.setItem(
      this.mediaItem.id + '_watchedEpisodeItems',
      JSON.stringify(this.watchedEpisodeItems)
    );

    // Checks if the Series are already watched completely. This helps to show the state in the main list.
    this.checkForCompletion();
  }

  checkForCompletion() {
    // Getting mediaitems from storage which are watched already
    var watchedMediaItems = JSON.parse(
      localStorage.getItem('watchedMediaItems')
    );
    // If all episodes are watched, store current mediaItem-ID to pseudo-object
    if (this.watchedEpisodeItems.length == this.mediaItem.episodes.length) {
      if (!watchedMediaItems.includes(this.mediaItem.id)) {
        watchedMediaItems.push(this.mediaItem.id);
      }

      // Store data in LocalStorage
      localStorage.setItem(
        'watchedMediaItems',
        JSON.stringify(watchedMediaItems)
      );
    } else {
      if (watchedMediaItems.includes(this.mediaItem.id)) {
        watchedMediaItems = watchedMediaItems.filter(
          (item) => item !== this.mediaItem.id
        );
        localStorage.setItem(
          'watchedMediaItems',
          JSON.stringify(watchedMediaItems)
        );
      }
    }
  }

  checkMediaItemType() {
    // Determine type of media. Will be used using length of episodes or name
    if (this.mediaItem.episodes_to_watch !== '0') {
      this.mediaType = this.translateService.instant('DETAILS.serie');
      this.mediaTypeIcon = 'tv-outline';
    } else {
      this.mediaType = this.translateService.instant('DETAILS.videocam');
      this.mediaTypeIcon = 'videocam-outline';
    }

    if (this.mediaItem.title.includes('One Shot')) {
      this.mediaType = 'One Shot';
    }
    if (this.mediaItem.title.includes('Slingshot')) {
      this.mediaType = this.translateService.instant('DETAILS.serie');
      this.mediaTypeIcon = 'tv-outline'; 
      this.mediaType = 'Sling Shot';
    }
  }

  async showPostCreditSceneCount() {
    // If there is one Scene after the Credits
    if (this.mediaItem.post_credit_scenes == 1) {
      const toast = await this.toastController.create({
        message:
          this.mediaItem.post_credit_scenes.toString() +
          this.translateService.instant(
            'DETAILS.post_credit_scenes_toast_single' // Show translated Suffix
          ),
        duration: 2000,
      });
      toast.present();
    } else {
      // If there is more than one Scene after the Credits
      const toast = await this.toastController.create({
        message:
          this.mediaItem.post_credit_scenes.toString() +
          this.translateService.instant(
            'DETAILS.post_credit_scenes_toast_many' // Show translated suffix
          ),
        duration: 2000,
      });
      toast.present();
    }
  }
  closePopup() {
    this.modalController.dismiss();
  }
}
