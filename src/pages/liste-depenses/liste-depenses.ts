import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CreationDepensePage } from '../../pages/creation-depense/creation-depense';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ListeDepenses page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-liste-depenses',
  templateUrl: 'liste-depenses.html'
})
export class ListeDepensesPage {
listeDepenses = ListeDepensesPage;
participants: any;
depenses: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private alertCtrl: AlertController) {
  }

  //permet d'executer le code meme apres le bouton back (creation depense)
  ionViewWillEnter(){
      //recuperation des dépenses du local storage
      this.storage.get('depenses').then((val) => {
        if(val != null){
          //si existe on recupere la liste
          this.depenses = val;
          console.log('Depenses:', val);
        }
      });

      this.storage.get('participants').then((val) => {
        if(val != null){
          //si existe on recupere la liste
          this.participants = val;
          console.log('Participants:', val);
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeDepenses');
  }


  goToCrationDepensePage() {
	this.navCtrl.push(CreationDepensePage);
  }

  supprimerDepense(depense){
  	let i:any;
  	for(i = 0; i < this.depenses.length; i++) {
 
      if(this.depenses[i] == depense){
        this.depenses.splice(i, 1);
      }
 
    }
    this.storage.set('depenses', this.depenses);
  }


  cocherPayes(index: any){

    let alert = this.alertCtrl.create();
    alert.setTitle(this.depenses[index].nom);

    let i:any;
    for(i = 0; i < this.depenses[index].participants.length ; i++) {
      if(this.depenses[index].participants[i] == true){
        alert.addInput({
          type: 'checkbox',
          label: this.participants[i].nom,
          value: 'false'
      });
      }
    }

    alert.addButton('Annuler');
    alert.addButton({
      text: 'Valider',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present();

  }

}
