import { UserMenuPage } from './../../UserContent/user-menu/user-menu';

import { RestorePasswordPage } from './../restore-password/restore-password';
import { RegisterPage } from './../register/register';
// Firebase Database
import { AngularFireDatabase } from 'angularfire2/database';
// Firebase Authentication
import { AngularFireAuth } from "angularfire2/auth";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { Keyboard } from 'ionic-native';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:any;
  password :any;
  InputValue : any;
  constructor(public afAuth: AngularFireAuth,public navCtrl: NavController, public db : AngularFireDatabase) {
    Keyboard.disableScroll(true);
  
  }




  ScanIt(){
   this.afAuth.auth.signInWithEmailAndPassword(this.email,this.password).then(success=> {
      this.navCtrl.setRoot(UserMenuPage);
      
    }).catch(err => console.log(err));
  }


  // external links
  ForgotPassword(){
    this.navCtrl.push(RestorePasswordPage);
  }
  RegisterPage(){
    this.navCtrl.setRoot(RegisterPage);
  }
 
}
