import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/*import { Validators, FormBuilder, FormGroup } from '@angular/forms';*/

/**
 * Generated class for the CreationDepense page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({ 
  selector: 'page-creation-depense',
  templateUrl: 'creation-depense.html'
})
export class CreationDepensePage {
 creationDepense = CreationDepensePage;

 depenseForm: any;
 participants: any;
 depenses : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public storage: Storage) {

    this.depenseForm = {}; 
    this.depenseForm.participants = []; 

  	this.storage.get('participants').then((val) => {
      console.log('Participants:', val);
      if(val != null){
        //si existe on recupere la liste
        this.participants = val;
      }
      
    });

    this.depenseForm.dateDepense = new Date().toISOString();

    //recuperation des dépenses du local storage
    this.storage.get('depenses').then((val) => {
      console.log('Depenses:', val);
      if(val != null){
        //si existe on recupere la liste
        this.depenses = val;
      }
    });
  }


  onSubmit() {
    console.log('submitting form');

    //Ajoute la ligne au local storage   
    this.depenses.push(this.depenseForm);
    this.storage.set('depenses', this.depenses);
    //Retour a la page précendente
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationDepense');
  }

  goBack(){
    this.navCtrl.pop();
  }


}
