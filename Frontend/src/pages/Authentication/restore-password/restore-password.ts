
import { Component ,  } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import firebase from "Firebase"

@Component({
  selector: 'page-restore-password',
  templateUrl: 'restore-password.html',
})
export class RestorePasswordPage {

  constructor(public toastCtrl : ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  Restore(){
    firebase.auth().onAuthStateChanged((data) => {
      
      firebase.auth().sendPasswordResetEmail(data.email).then((success) => {
        this.toastCtrl.create({
          message:'Your Password link has been send to your email',
          duration: 3000,
          position: 'top'
        }).present();
      }).catch(err => {
        this.toastCtrl.create({
          message: err.message,
          duration: 3000,
          position: 'top'
        }).present();
      })
    })
  
  }

}
