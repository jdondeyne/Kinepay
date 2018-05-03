import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreationDepensePage } from './creation-depense';

@NgModule({
  declarations: [
    CreationDepensePage,
  ],
  imports: [
    IonicPageModule.forChild(CreationDepensePage),
  ],
})
export class CreationDepenseModule {}
