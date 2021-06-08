import { LanguageService } from './shared/language.service';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    translate: TranslateService,
    private languageService: LanguageService) {

      if(this.languageService.getCurrentLanguage() === null) {
        //set standard language from the browser
        translate.setDefaultLang(this.languageService.findLanguage(navigator.language)) 
      } else {
        //set standard language from the app
        translate.setDefaultLang(this.languageService.getCurrentLanguage()); 
      }
}}
