import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class Logout {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private storage: Storage
  ) {
    /*this.storage.get('token').then((token)=>{
      if(token !== undefined){
        //this.storage.remove('token');
        this.navCtrl.setRoot(HomePage);
      }
    });*/
    window.localStorage.removeItem('user');
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Logout');
  }

}
