import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { Main } from '../pages/main/main';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private storage: Storage
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.get('token').then((token) => {
        console.log(token);
        if(token === null){
          this.rootPage = HomePage;
        }else{
          this.rootPage = Main;
        }
      });
      // set status bar to white
      statusBar.backgroundColorByHexString("#00ABE7");
      
      splashScreen.hide();
    });
  }
}

