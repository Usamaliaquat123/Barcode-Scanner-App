import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import  firebase from 'firebase'
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  UsersfeedbackValue :any;
  constructor(public toastCtrl : ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }



  SendYourFeed(){


    if(this.UsersfeedbackValue == ""){
      console.log('Type Correct info');
      return false;
    }else{
      // firebase.auth().onAuthStateChanged((data) =>{
      //   firebase.firestore().collection('UsersFeedback').doc(`${data.uid}`).set({
      //     Feedback : this.UsersfeedbackValue
      //   }).then((success) => {
      //       this.toastCtrl.create({
      //           message : "Thanks to giving your feedback. We can response via your email...",
             
      //           duration: 3000,
      //           position: 'top'
      //       }).present();
      //   })
      // })
     
    }



  }




  
}
