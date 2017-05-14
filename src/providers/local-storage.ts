import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';

@Injectable()
export class LocalStorage {

  constructor(public http: Http) {
    console.log('Hello LocalStorage Provider');
  } 

  storeProductToWishList(product){
    let oldItems = JSON.parse(localStorage.getItem('wishlist'));

    if(oldItems === null){
      oldItems = [];
    }
    oldItems.push(product);

    localStorage.setItem('wishlist', JSON.stringify(oldItems));
    
  }

  getProduct(){
    return JSON.parse(localStorage.getItem('wishlist'));
  }

  deleteProductFromWishlist(product){
    let oldItems = JSON.parse(localStorage.getItem('wishlist'));
    let i = 0;

    
    for(i = 0; i < oldItems.length; i++){
      if(oldItems[i].product_name === product.product_name){
        oldItems.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('wishlist', JSON.stringify(oldItems));
    
    console.log('After deleting localstorage is ', JSON.parse(localStorage.getItem('wishlist')));
    
    return JSON.parse(localStorage.getItem('wishlist'));
  }

  addProductToCart(product){
    let oldItems = JSON.parse(localStorage.getItem('cart'));

    if(oldItems === null){
      oldItems = [];
    }
    oldItems.push(product);

    localStorage.setItem('cart', JSON.stringify(oldItems));

  }

  getProductFromCart(){
    return JSON.parse(localStorage.getItem('cart'));
  }

  removeProductFromCart(product){
    let oldItems = JSON.parse(localStorage.getItem('cart'));
    let i = 0;

    
    for(i = 0; i < oldItems.length; i++){
      if(oldItems[i].product_name === product.product_name){
        oldItems.splice(i, 1);
        break;
      }
    }

  localStorage.setItem('cart', JSON.stringify(oldItems));
    
    console.log('After deleting localstorage is ', JSON.parse(localStorage.getItem('cart')));
    
    return JSON.parse(localStorage.getItem('cart'));
  }

  getCartLength(){
    if(JSON.parse(localStorage.getItem('cart')) === null){
      return 0;
    }else{
      return JSON.parse(localStorage.getItem('cart')).length;
    }
  }

  buyProducts(product: any){
    let oldItems = JSON.parse(localStorage.getItem('order'));

    if(oldItems === null){
      oldItems = [];
    }
    for(var i in product){
      oldItems.push(product[i]);
    }
    localStorage.setItem('order', JSON.stringify(oldItems));
  }

  getBoughtProducts(){
    return JSON.parse(localStorage.getItem('order'));
  }
}





