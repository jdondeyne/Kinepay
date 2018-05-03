import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';
import { EmailComposer } from '@ionic-native/email-composer';
import { Sort } from '../pipes/sort';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListeDepensesPage } from '../pages/liste-depenses/liste-depenses';
import { CreationDepensePage } from '../pages/creation-depense/creation-depense';
import { ListeParticipantsPage } from '../pages/liste-participants/liste-participants';
import { CreationParticipantPage } from '../pages/creation-participant/creation-participant';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ListeDepensesPage,
    CreationDepensePage,
    ListeParticipantsPage,
    CreationParticipantPage,
    Sort
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ListeDepensesPage,
    CreationDepensePage,
    ListeParticipantsPage,
    CreationParticipantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
