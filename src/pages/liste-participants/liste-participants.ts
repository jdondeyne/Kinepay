import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CreationParticipantPage } from '../../pages/creation-participant/creation-participant';
import { Storage } from '@ionic/storage';

//import { ListeParticipantsPage } from '../../pages/liste-participants/liste-participants';

/**
 * Generated class for the ListeDepenses page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-participants',
  templateUrl: 'liste-participants.html'
})
export class ListeParticipantsPage {
listeParticipants = ListeParticipantsPage;

participants: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController, public storage: Storage) {


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
      }else{
        //si existe on recupere la liste
        console.log('this.participants', this.participants);
        this.participants = val;
      }
      
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeDepenses');
  }


  goToCrationParticipantPage() {
	 this.navCtrl.push(CreationParticipantPage);
  }

  supprimerParticipant(participant){
    let i:any;
    for(i = 0; i < this.participants.length; i++) {
 
      if(this.participants[i] == participant){
        this.participants.splice(i, 1);
        this.storage.set('participants', this.participants);
      }
 
    }
  }


 editerParticipant(participant){
    let prompt = this.alertCtrl.create({
            title: 'Editer participant',
            inputs: [
              {
                  name: 'nom',
                  placeholder: 'Nom',
                  value: participant.nom
              },
              {
                  name: 'mail',
                  placeholder: 'Mail',
                  type: 'mail',
                  value: participant.mail
              },
              {
                  name: 'tel',
                  placeholder: 'Téléphone',
                  type: 'number',
                  value: participant.tel
              }
            ],
            buttons: [
                {
                    text: 'Annuler'
                },
                {
                    text: 'Sauvegarder',
                    handler: data => {
                        let index = this.participants.indexOf(participant);
 
                        if(index > -1){
                          this.participants[index] = data;
                        }

                        this.storage.set('participants', this.participants);
                    }
                }
            ]
        });
 
        prompt.present();

  }   


  addParticipant(){
 
        let prompt = this.alertCtrl.create({
            title: 'Ajouter participant',
            inputs: [
              {
                  name: 'nom',
                  placeholder: 'Nom'
              },
              {
                  name: 'mail',
                  placeholder: 'Mail',
                  type: 'mail'
              },
              {
                  name: 'tel',
                  placeholder: 'Téléphone',
                  type: 'number'
              }
            ],
            buttons: [
                {
                    text: 'Annuler'
                },
                {
                    text: 'Ajouter',
                    handler: data => {
                        this.participants.push(data);
                        //this.storage.set('participant', data);
                        this.storage.set('participants', this.participants);
                        console.log('ok storage');
                    }
                }
            ]
        });
 
        prompt.present();
    }

}
