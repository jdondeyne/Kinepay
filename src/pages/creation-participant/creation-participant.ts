import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { CreationParticipantPage } from '../../pages/creation-participant/creation-participant';
//import {/*FormGroup,*/ FormBuilder, FormControl, Validators} from "@angular/forms";
/**
 * Generated class for the CreationDepense page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-creation-participant',
  templateUrl: 'creation-participant.html'
})
export class CreationParticipantPage implements OnInit {
 creationParticipant = CreationParticipantPage;
/* myForm: FormGroup;*/

 participants: any;
 dateDepense: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

      this.dateDepense = new Date().toISOString();
  }

  ngOnInit(): any {
/*    this.myForm = this.formBuilder.group({
      'nom': ['', [Validators.required, Validators.minLength(3), this.nameValidator.bind(this)]]
    });*/
  }

  onSubmit() {
    console.log('submitting form');
  }

/*  isValid(field: string) {
    let formField = this.myForm.find(field);
    return formField.valid || formField.pristine;
  }

  nameValidator(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
      return {invalidName: true};
    }
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreationParticipant');
  }

}
