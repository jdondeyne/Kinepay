import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListeDepensesPage } from '../../pages/liste-depenses/liste-depenses';
import { ListeParticipantsPage } from '../../pages/liste-participants/liste-participants';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
participants: any;
depenses:any;

  constructor(public navCtrl: NavController, public storage: Storage) {

    this.creerBDD();
  }

  goToListeDepensesPage(){
  	this.navCtrl.push(ListeDepensesPage);
  }

  goToListeParticipantsPage(){
  	this.navCtrl.push(ListeParticipantsPage);
  }

  creerBDD(){

    this.storage.get('participants').then((val) => {
      console.log('Participants:', val);
      if(val == null){
        //si vide, on cree une liste de participants
        this.participants = [
          {
            nom: 'Pauline',
            mail: 'pauline@gmail.com',
            tel: '0607080910'
          },
          {
            nom: 'Jerem',
            mail: 'jerem@gmail.com',
            tel: '0607080910'
          },
          {
            nom: 'Samuel',
            mail: 'sam@gmail.com',
            tel: '0607080910'
          },
          {
            nom: 'Yannick',
            mail: 'yaya@gmail.com',
            tel: '0607080910'
          },
          {
            nom: 'Johann',
            mail: 'jo@gmail.com',
            tel: '0607080910'
          },
          {
            nom: 'Hélène',
            mail: 'helene@gmail.com',
            tel: '0607080910'
          },
          {
            nom: 'Adrien',
            mail: 'adrien@gmail.com',
            tel: '0607080910'
          }
        ]

        this.storage.set('participants', this.participants);
      }
      
    });


    //recuperation des dépenses du local storage
    this.storage.get('depenses').then((val) => {
        console.log('Depenses:', val);
        if(val == null){
          //si vide, on cree une liste de participants
          this.depenses = [
          {
            nom: 'Star Wars',
            somme: '12.50',
            dateDepense: '2015-05-03T12:51:19.110Z',
            participants: [true, true]
          },
          {
            nom: 'Avengers: Infinity War',
            somme: '45.60',
            dateDepense: '2016-05-03T12:51:19.110Z',
            participants: [true, true]
          },
          {
            nom: 'Dans la Brume',
            somme: '78.00',
            dateDepense: '2017-05-03T12:51:19.110Z',
            participants: [true, true]
          },
          {
            nom: 'Black Panther',
            somme: '35.90',
            dateDepense: '2018-05-03T12:51:19.110Z',
            participants: [true, true]
          }
        ]
        this.storage.set('depenses', this.depenses);
        }
      });


  }
}
