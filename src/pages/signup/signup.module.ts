import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Signup } from './signup';
import { Auth } from '../../providers/auth';


@NgModule({
  declarations: [
    Signup,
  ],
  imports: [
    IonicPageModule.forChild(Signup)
  ],
  exports: [
    Signup
  ],
  providers: [ Auth ],

})
export class SignupModule {


}
