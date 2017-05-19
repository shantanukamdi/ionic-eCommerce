import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetails } from '../product-details/product-details';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class Products {

  productList: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("Navparams are ", this.navParams.get('productList'));
    this.productList = this.navParams.get('productList');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Products');
  }

  productDetails(product){
    this.navCtrl.push(ProductDetails, {
      product: product
    })
  }
}
