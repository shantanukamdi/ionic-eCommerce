import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Search');
  }
  getItems(){
    console.log(this.searchValue);
  }
}
