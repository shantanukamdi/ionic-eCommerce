import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorage } from '../../providers/local-storage';
import { ProductDetails } from '../product-details/product-details';

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class Wishlist {

  wishListArray: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public _localStorage: LocalStorage            
  ) {
    this.wishListArray = this._localStorage.getProduct();
    console.log(this.wishListArray);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Wishlist');
  }

  productPage(product){
    this.navCtrl.push(ProductDetails, {
      product: product
    });
  }

  removeProduct(product){
    console.log('Product to be deleted ', product);
    this.wishListArray = this._localStorage.deleteProductFromWishlist(product);
  }


}
