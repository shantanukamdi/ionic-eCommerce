import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {

  searchValue: any;
  products1: any;
  products2: any;

  finalProductList: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _data: Data
  ) {
    this.products1 = this._data.getFashion().products;
    this.products2 = this._data.getElectronics().products;
    this.finalProductList = this.products1.concat(this.products2);  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Search');
  }
  getItems(){
    console.log(this.searchValue);
  }
}
