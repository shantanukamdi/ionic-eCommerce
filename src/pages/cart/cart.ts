import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorage } from '../../providers/local-storage';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class Cart {

  cartProductArray: any[];
  total = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _localStorage: LocalStorage            
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cart');
  }

  ionViewWillEnter(){
    this.cartProductArray = this._localStorage.getProductFromCart();
    if(this.cartProductArray !== null){
      let i = 0;
      for(i = 0; i < this.cartProductArray.length; i++){
        this.total += this.cartProductArray[i].price; 
      }
    }
  }
  

  removeFromCart(product){
    this.cartProductArray = this._localStorage.removeProductFromCart(product);
    this.total -= product.price;
  }

  buyProducts(){
    this._localStorage.buyProducts(this.cartProductArray);
    localStorage.removeItem('cart');
    this.cartProductArray = [];
    this.total = 0;
  }
}
