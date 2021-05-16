import { LanguageService } from './../shared/language.service';
import { TranslateService } from '@ngx-translate/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {

  currentLanguage;

  constructor(
    private languageService: LanguageService,
    private actionSheetController: ActionSheetController,
    private translateService: TranslateService
  ) {}

  ngAfterViewInit() {
    this.currentLanguage = this.languageService.getCurrentLanguage();
  }

  async changeLanguage() {

    var buttons = [] ;

    this.languageService.getLanguages().forEach(language => {
      buttons.push({
        text: language.text,
        handler: () => {
          this.languageService.changeLanguage(language.value);
          this.currentLanguage = language.value;
        }
      })
    });

    buttons.push( {
      text: this.translateService.instant('EXTRAS.PICKER.cancel'),
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    });

    const actionSheet = await this.actionSheetController.create({
      header: this.translateService.instant('EXTRAS.PICKER.title'),
      cssClass: 'my-custom-class',
      buttons: buttons
    });

    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  openURL(url) {
    window.open(url);
  }

  clearStorage() {
    localStorage.clear();
    window.location.reload();
  }


}
