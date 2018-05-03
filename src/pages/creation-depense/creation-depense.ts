import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EmailComposer } from '@ionic-native/email-composer';
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
    public storage: Storage, private emailComposer: EmailComposer,
    public platform: Platform) {

    this.depenseForm = {'nom' : ''}; 

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
        this.participants = val;
      }
      
    });

      this.depenseForm.dateDepense = new Date().toISOString();

      //recuperation des dépenses du local storage
      this.storage.get('depenses').then((val) => {
        console.log('Depenses:', val);
        if(val == null){
          //si vide, on cree une liste de participants
          this.depenses = []
        }else{
          //si existe on recupere la liste
          this.depenses = val;
        }
      });
  }


  onSubmit() {

    console.log('submitting form');

    if (this.platform.is('cordova')) {
      // You're on a device
      //this.sendMail();
    } else {
      // You're testing in browser
      console.log('Le mail sera envoyé sur un device reel.');
    }

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


  sendMail(){
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
