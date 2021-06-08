import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // Getting Data with Language-Code from GitHub
  getMediaItem(languageCode) {
    return this.httpClient.get("https://raw.githubusercontent.com/svenia/mcu-viewing-order-data/main/listing/viewing-order_"+ languageCode +".json"); 
  }
}
