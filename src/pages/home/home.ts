import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListeDepensesPage } from '../../pages/liste-depenses/liste-depenses';
import { ListeParticipantsPage } from '../../pages/liste-participants/liste-participants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
  }

  goToListeDepensesPage(){
  	this.navCtrl.push(ListeDepensesPage);
  }

  goToListeParticipantsPage(){
  	this.navCtrl.push(ListeParticipantsPage);
  }

}
