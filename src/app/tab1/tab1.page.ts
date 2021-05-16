import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';
import { MediaItem } from '../interfaces/media-item';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mediaItems: MediaItem[] = [
    {
      "id": "1",
      "title": "Captain America: The First Avenger",
      "release_date": "27.07.2011",
      "duration": 124,
      "overview": "Marvel's 'Captain America: The First Avenger' focuses on the early days of the Marvel Universe when Steve Rogers volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America.",
      "cover_url": "https://raw.githubusercontent.com/svenia/mcu-viewing-order-data/main/covers/captain-america-the-first-avenger.jpg",
      "trailer_url": "https://www.youtube.com/embed/JerVrbLldXw",
      "directed_by": "Joe Johnston",
      "phase": 1,
      "chronology": 1,
      "post_credit_scenes": 1,
      "episodes_to_watch": "0",
      "year_it_played": "1943-1945"
    },
    {
      "id": "1000",
      "title": "Marvel's Agent Carter",
      "release_date": "06.01.2015",
      "duration": null,
      "overview": "Agent Peggy Carter has lost the love of her life. To make things worse, when billionaire Howard Stark is accused of treason, he secretly hires her to clear his name. With the help of Stark's butler, she goes on a bizarre journey of cheating, murder and controversy.",
      "cover_url": "https://raw.githubusercontent.com/svenia/mcu-viewing-order-data/main/covers/Carter.png",
      "trailer_url": "https://www.youtube.com/embed/qPiMNPlbijw",
      "directed_by": "James Chory, Lawrence Trilling, Peter Leto, Scott Winant, Vincent Misiano, Chris Peppe, Ken Marino",
      "phase": 2,
      "chronology": 3,
      "post_credit_scenes": 0,
      "episodes_to_watch": "S01E01 - S01E08",
      "episodes": 
      [
        {
         "id": "1000_01",
         "title": "S01E01"
        },
        {
          "id": "1000_02",
          "title": "S01E02"
         },
         {
          "id": "1000_03",
          "title": "S01E03"
         },
         {
          "id": "1000_04",
          "title": "S01E04"
         },
         {
          "id": "1000_05",
          "title": "S01E05"
         },
         {
          "id": "1000_06",
          "title": "S01E06"
         },
         {
          "id": "1000_07",
          "title": "S01E07"
         },
         {
          "id": "1000_08",
          "title": "S01E08"
         }
      ],
      "year_it_played": "1946"
    },]

  constructor(
    private modalController: ModalController
  ) {}

async showDetails(i) {
  const modal = await this.modalController.create({
      component: DetailsPage, 
      componentProps: {
        mediaItem: this.mediaItems[i]
      }
    }); 
    return await modal.present();

  }
}

