import { LanguageService } from './../shared/language.service';
import { MediaItem } from './../interfaces/media-item';
import { EpisodeItem } from './../interfaces/episode-item';
import { DataService } from './../shared/data.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { isTabSwitch } from '@ionic/angular/directives/navigation/stack-utils';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  mediaItems: MediaItem[];
  watchedMediaItems: any[] = [];
  filterItem;

  constructor(
    private modalController: ModalController,
    private dataService: DataService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.startDataProcessing();
  }

  startDataProcessing() {
    // Checks if there are any MediaItems watched Already
    if (localStorage.getItem('watchedMediaItems') !== null) {
      // Store them if true in a local Variable
      this.watchedMediaItems = JSON.parse(
        localStorage.getItem('watchedMediaItems')
      );
    }

    // Get data from GitHub in the Current Language and setting this in the local Variable.
    this.dataService
      .getMediaItem(this.languageService.getCurrentLanguage())
      .subscribe((data: MediaItem[]) => {
        this.mediaItems = data;

        // Processing the Data to display it correctly.
        this.processMediaItems();
      });
  }

  // Marking item as watched or unwatched and storing changes in localStroage
  markItem(id, index) {
    this.mediaItems[index].isWatched = !this.mediaItems[index].isWatched;

    if (this.watchedMediaItems.includes(id)) {
      this.watchedMediaItems = this.watchedMediaItems.filter(
        (item) => item !== id
      );
    } else {
      this.watchedMediaItems.push(id);

      localStorage.setItem(
        'watchedMediaItems',
        JSON.stringify(this.watchedMediaItems)
      );
    }
  }

  processMediaItems() {
    this.mediaItems.forEach((mediaItem) => {
      // If mediaitem is already watched, set as watched visually
      if (this.watchedMediaItems.includes(mediaItem.id)) {
        mediaItem.isWatched = true;
      } else {
        mediaItem.isWatched = false;
      }

      if (
        localStorage.getItem(mediaItem.id + '_watchedEpisodeItems') !== null
      ) {
        var watchedEpisodesFromStorage = JSON.parse(
          localStorage.getItem(mediaItem.id + '_watchedEpisodeItems')
        );

        if (
          watchedEpisodesFromStorage.length ==
          //if the mediatitem with the id without the first 5 signs (just id stays) is identical
          mediaItem.id.substr(5, mediaItem.id.length) 
        ) {
          //mark item
          this.markItem(mediaItem.id, 0); 
        }
      }
    });
  }

  // Open DetailsPage as 'modal'. Determining MediaItem-ID by current index.
  async showDetails(id) {
    const modal = await this.modalController.create({
      component: DetailsPage,
      componentProps: {
        mediaItem: this.mediaItems.find((mediaItem) => mediaItem.id === id), 
      },
    });

    // Processing changes on 'modal'-close.
    modal.onDidDismiss().then((data) => {
      this.startDataProcessing(); 
    });

    return await modal.present();
  }
}
