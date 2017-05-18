import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController, 
  LoadingController, 
  Loading, 
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { Signup } from '../signup/signup';
import { Main } from '../main/main';
import { Auth } from '../../providers/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  private name: string;
  private password: string;

  constructor(public navCtrl: NavController,
              private _formBuilder: FormBuilder,
              private _auth: Auth,
              private storage: Storage,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController
    ) {
    
  }

  onSignUpClick(){
    this.navCtrl.push(Signup);
  }

  onLoginClick(){
    const user = {
      name: this.name,
      password: this.password
    };

     this._auth.loginUser(user)
        .then( authData => {
          window.localStorage.setItem('user', JSON.stringify(authData));
          this.navCtrl.push(Main);
        }, error => {
          
        });


    /*this._auth.authenticate(user).subscribe(data => {
      console.log(data);
      if(data.success){
        this.storage.set('token', data.token);
        this.storage.set('user', data.user);
        this.navCtrl.setRoot(Main);
      }
    });*/
    
   /* let data = this._auth.authenticate(user);

    if(data.success){
      this.storage.set('token', data.token);
      this.navCtrl.setRoot(Main);
    }*/
  }

}
