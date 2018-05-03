import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

depenses: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  //permet d'executer le code meme apres le bouton back (creation depense)
  ionViewWillEnter(){
      //recuperation des dépenses du local storage
      this.storage.get('depenses').then((val) => {
        console.log('Depenses:', val);
        if(val == null){
          //si vide, on cree une liste de participants
          this.depenses = [
	        {
	          nom: 'Star Wars',
	          somme: '12.50',
	          date: '12/05/2017'
	        },
	        {
	          nom: 'Avengers: Infinity War',
	          somme: '45.60',
	          date: '27/04/2018'
	        },
	        {
	          nom: 'Dans la Brume',
	          somme: '78.00',
	          date: '12/05/2017'
	        },
	        {
	          nom: 'Black Panther',
	          somme: '35.90',
	          date: '12/01/2018'
	        }
	      ]
	      this.storage.set('depenses', this.depenses);
        }else{
          //si existe on recupere la liste
          this.depenses = val;
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

}
