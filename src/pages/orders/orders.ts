import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorage } from '../../providers/local-storage';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class Orders {

  orders: any;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _localStorage: LocalStorage
  ) {
    this.orders = this._localStorage.getBoughtProducts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Orders');
  }

}
