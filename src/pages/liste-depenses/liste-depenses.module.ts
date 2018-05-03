import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeDepensesPage } from './liste-depenses';

@NgModule({
  declarations: [
    ListeDepensesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeDepensesPage),
  ],
})
export class ListeDepensesModule {}
