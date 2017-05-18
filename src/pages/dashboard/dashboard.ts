import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Products } from '../products/products';
import { Data } from '../../providers/data';
import { Cart } from '../cart/cart';
import { LocalStorage } from '../../providers/local-storage';
import { Search } from '../search/search';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class Dashboard {
  
  productList: FirebaseListObservable<any>;
  cartLength = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _data: Data,
              private _localStorage: LocalStorage,
              private modal: ModalController,
              private db: AngularFireDatabase
  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Dashboard');
  }

  ionViewWillEnter(){
    this.cartLength = this._localStorage.getCartLength();
  }

	mobiles(){
    this.db.list('products').subscribe( data => {
      console.log(data);
    });
    this.navCtrl.push(Products,{
      productList: this.productList
    });
	}
  jackets(){
    this.productList = this._data.getFashion();
    this.navCtrl.push(Products,{
      productList: this.productList
    });
  }

  cart(){
    this.navCtrl.push(Cart);
  }

  search(){
    this.navCtrl.push(Search);
  }

  
}
