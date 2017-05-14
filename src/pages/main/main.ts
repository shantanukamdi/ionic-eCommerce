import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { Dashboard } from '../dashboard/dashboard';
import { Wishlist } from '../wishlist/wishlist';
import { Cart } from '../cart/cart';
import { Orders } from '../orders/orders';
import { Logout } from '../logout/logout';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})

export class Main {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = Dashboard;
  activePage: any;

  pages: Array<{title: string, component: any}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Home', component: Dashboard },
      { title: 'My Wishlist', component: Wishlist },
      { title: 'My Cart', component: Cart },
      { title: 'My Orders', component: Orders },
      { title: 'Logout', component: Logout }
    ];
}
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Main');
  }

}
