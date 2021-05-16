import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  constructor(
    private translateService: TranslateService
  ) { }

  getLanguages(): any {
    return [
      { text: 'Deutsch', value: 'de' },
      { text: 'English', value: 'en'},
      { text: 'Français', value: 'fr' }
    ];
  }

  findLanguage(browserLanguage): string {
    var selectedLanguage = 'en';
    this.getLanguages().forEach((language) => {
      if(browserLanguage.includes(language.value)) {
        selectedLanguage = language.value;
        this.setNewLanguage(language.value);
      }
    });
    return selectedLanguage;
  }

  getCurrentLanguage(): string {
    return localStorage.getItem('userLanguage');
  }

  setNewLanguage(selectedLanguage) {
    localStorage.setItem('userLanguage', selectedLanguage);
  }

  changeLanguage(selectedLanguage) {
    this.translateService.setDefaultLang(selectedLanguage);
    this.setNewLanguage(selectedLanguage);
  }

}
