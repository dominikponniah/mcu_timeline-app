import { LanguageService } from './../shared/language.service';
import { TranslateService } from '@ngx-translate/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements AfterViewInit {
  currentLanguage;

  constructor(
    private languageService: LanguageService,
    private actionSheetController: ActionSheetController,
    private translateService: TranslateService
  ) {}

  ngAfterViewInit() {
    //get current language
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  async changeLanguage() {
    var buttons = [];

    this.languageService.getLanguages().forEach((language) => {
      buttons.push({
        text: language.text,
        handler: () => {
          //change current language value, e.g from fr > de
          this.languageService.changeLanguage(language.value);
          this.currentLanguage = language.value;
          location.reload();
        },
      });
    });

    //close language change window
    buttons.push({
      text: this.translateService.instant('EXTRAS.PICKER.cancel'),
      icon: 'close',
      role: 'cancel',
      handler: () => {
        // Do nothing
      },
    });

    //The title of the language change window
    const actionSheet = await this.actionSheetController.create({
      header: this.translateService.instant('EXTRAS.PICKER.title'),
      cssClass: 'my-custom-class',
      buttons: buttons,
    });

    await actionSheet.present();
  }

  // Method to open Links in Browser or Apps
  openURL(url) {
    window.open(url);
  }

  // Delete full storage
  clearStorage() {
    localStorage.clear();
    window.location.reload();
  }
}
