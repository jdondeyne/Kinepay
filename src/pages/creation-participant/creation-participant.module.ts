import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationParticipantPage } from './creation-participant';

@NgModule({
  declarations: [
    CreationParticipantPage,
  ],
  imports: [
    IonicPageModule.forChild(CreationParticipantPage),
  ],
})
export class CreationParticipantModule {}
