
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import firebase from 'firebase'
@Component({
  selector: 'page-users-previous-data',
  templateUrl: 'users-previous-data.html',
})
export class UsersPreviousDataPage {
  HeaderCard : any;
  HeaderContent:any;
  constructor(public afAuth : AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.HeaderCard = 'jkdsahdjashdjahjdshasduedjkhd';
    this.HeaderContent = 'ajdhjasdhuweirdm3iednecfkmsakdmdfjasnj';

    // this.afAuth.auth.onAuthStateChanged((data) => {
    //     firebase.firestore().collection('Scans').doc(`${data.uid}`).collection('scans').get().then((snapshot) => {
    //       snapshot.forEach((doc) => {
    //        console.log(doc.data());
    //       })
    //     })
    // })

  }

  

}
