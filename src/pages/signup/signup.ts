import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';
import { Auth } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {

  signUpForm: FormGroup;
  private name: string;
  private email: string;
  private number: number;
  private password: string; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private _formBuilder: FormBuilder, 
              private _auth: Auth
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  onRegisterClick(){
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      number: this.number
    };

    this._auth.register(user).then( authData => {
      this.navCtrl.popToRoot();
    }, error => {
      console.log('error in registration', error);
    });

  /*  this._auth.register(user).subscribe(data => {
      if(data.success){
        this.navCtrl.push(HomePage);
        console.log(data);
      }
    });*/ 
    
  }
}
