import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  form: FormGroup;

  private name: string;
  private password: string;

  constructor(public navCtrl: NavController,
              private _formBuilder: FormBuilder,
              private _auth: Auth,
              private storage: Storage
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

    /*this._auth.authenticate(user).subscribe(data => {
      console.log(data);
      if(data.success){
        this.storage.set('token', data.token);
        this.storage.set('user', data.user);
        this.navCtrl.setRoot(Main);
      }
    });*/
    
    let data = this._auth.authenticate(user);

    if(data.success){
      this.storage.set('token', data.token);
      this.navCtrl.setRoot(Main);
    }
  }

}
