import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorage } from '../../providers/local-storage';

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetails {

  product: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public localStorage: LocalStorage            
  ) {
    this.product = this.navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetails');
  }

  addToWishlist(product){
    console.log(product);
    console.log('Adding it to wishlist');
    this.localStorage.storeProductToWishList(product);
  }

  addToCart(product){
    this.localStorage.addProductToCart(product);
  }
}
