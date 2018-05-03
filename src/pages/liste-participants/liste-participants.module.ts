import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeParticipantsPage } from './liste-participants';

@NgModule({
  declarations: [
    ListeParticipantsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListeParticipantsPage),
  ],
})
export class ListeParticipantsModule {}
