import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { CreationDepensePage } from '../../pages/creation-depense/creation-depense';
import { Storage } from '@ionic/storage';
import { SMS } from '@ionic-native/sms';
import { EmailComposer } from '@ionic-native/email-composer';
import { DatePipe } from '@angular/common';
import { AndroidPermissions } from '@ionic-native/android-permissions';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public storage: Storage, private alertCtrl: AlertController,
    private sms: SMS, private emailComposer: EmailComposer,
    public platform: Platform, public datePipe: DatePipe, private androidPermissions: AndroidPermissions) {
  }

  //permet d'executer le code meme apres le bouton back (creation depense)
  ionViewWillEnter(){
      //recuperation des dépenses du local storage
      this.storage.get('depenses').then((val) => {
        if(val != null){
          //si existe on recupere la liste
          this.depenses = val;
          this.compterParticipants();
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

  compterParticipants(){
    let i,j:any;

    for(i = 0; i < this.depenses.length ; i++) {
      this.depenses[i].nbParticipants = 0;
      for(j = 0; j < this.depenses[i].participants.length ; j++) {
        if(this.depenses[i].participants[j] == true){
          this.depenses[i].nbParticipants++;
        }
      }
    }

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
        //TODO Envoyer validation mail/SMS
      }
    });
    alert.present();

  }


  sendAlert(index: any, type: string){
    let people: string[];
    people = [];
    let alert: any;

    let i:any;
    for(i = 0; i < this.depenses[index].participants.length ; i++) {
      if(this.depenses[index].participants[i] == true){
        people[i] = " " + this.participants[i].nom;
      }
    }


      alert = this.alertCtrl.create({
        title: 'Envoyer ' + type +  '?',
        message: people.toString(),
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            handler: () => {}
          },
          {
            text: 'Oui',
            handler: () => {
              if (this.platform.is('cordova')) {
                // You're on a device
                if(type == "SMS"){
                  this.sendSMS(people, this.depenses[index]);
                }else{
                  this.sendMail(people,this.depenses[index]);
                }
              } else {
                // You're testing in browser
                console.log('Le mail/sms sera envoyé sur un device reel.');
              }
            }
          }
        ]
      });


    alert.present();
  }


  sendSMS(people: string[], depense: any){
    let options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               //intent: 'INTENT'  // Opens Default sms app
              intent: '' // Sends sms without opening default sms app
            }
    }
    //+1 car je suis dedans
    let partipation = depense.somme / depense.nbParticipants+1;
    let message = 'Kinepay BOT: Vous devez ' + partipation.toFixed(2)  + '€ pour le film ' + depense.nom + ' en date du ' + this.datePipe.transform(depense.dateDepense, 'dd/MM/yyyy');

    //Retrouver les numeros des participants en fonction du tableau de boolean
    let multiNumber = [];
    let i:any;
    for(i = 0; i < this.participants.length ; i++) {
      if(depense.participants[i] == true){
        multiNumber[i] = this.participants[i].tel;
      }
    }

    //permet de regler le pb de permissions
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE)
    );

    this.sms.send(multiNumber, message , options);
  }

  sendMail(people: string[], depense: any){
    this.emailComposer.isAvailable().then((available: boolean) =>{
     if(available) {
      
      let email = {
        app: 'gmail',
        to: 'till1100@gmail.com',
        attachments: [],
        subject: 'Bot Kinep@y',
        body: 'Bonjour, ceci est un mail automatique.',
        isHtml: true
      };

      this.emailComposer.addAlias('gmail', 'com.google.android.gm');
      // Send a text message using default options
      this.emailComposer.open(email);

       }
      });
  }

}
