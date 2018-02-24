import { HomeMainPage } from './../../UserContent/home-main/home-main';

import { Message } from './../../../providers/chatservice/chatservice';
// this import uses AngularFire2 Version ^5.0.0-rc.3 
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
// /////////////////////////////////////////////////////////
import { UserMenuPage } from './../../UserContent/user-menu/user-menu';

import { LoginPage } from './../login/login';
import { Component , ViewChild ,Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase'
import { AngularFirestore } from "angularfire2/firestore";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  @ViewChild('RegisterationPage') registerationPage : any;
  @ViewChild('LoadingPage') loadingPage : any;
  @ViewChild('footer') footerPage : any;
 // /////////////////////////////////////
  // Getting User Information
  UserFirstName : any; //Getting User First name
  UserSecondName :any; //Getting User Second Name
  UserEmail : any;  //Getiing User Email
  UserPassword :any; // Getting User Password
  UserGender: any; //Getting Users Gender
  // /////////////////////////////////////
  constructor(public db : AngularFirestore,public afDatabase:AngularFireDatabase,public afAuth : AngularFireAuth,public renderer : Renderer,public navCtrl: NavController, public navParams: NavParams) {
  }



  Gender(){
    
  }
 

  registerNow(){
    // Create user with email ansd password
    // this.afAuth.auth.createUserWithEmailAndPassword(this.UserEmail,this.UserPassword).then(success => {
    //   this.afDatabase.database.ref(`AllUsersInformation/` + this.UserFirstName + '' + this.UserSecondName).set({
    //     FirstName : this.UserFirstName,
    //     LastName : this.UserSecondName,
    //     // Gender : this.UserGender,
    //     Email : this.UserEmail,
    //     Password : this.UserPassword
    //   }).then(()=>{
    //           this.renderer.setElementStyle(this.registerationPage.nativeElement,"visibility", "hidden");
    //           this.renderer.setElementStyle(this.loadingPage.nativeElement,"visibility", "visible");
    //           setTimeout(() => {
    //             this.renderer.setElementStyle(this.loadingPage.nativeElement,"visibility", "hidden");
    //             this.navCtrl.setRoot(UserMenuPage);
    //           } , 8000);
    //       }).catch(err => {
    //           console.log(err.Message);
    //       })
    //   }).catch(err => console.log(err)); 
   


    this.afAuth.auth.createUserWithEmailAndPassword(this.UserEmail,this.UserPassword).then(success => {
     let that = this;
      firebase.firestore().collection("Users").doc(`${success.uid}`).set({
        Email : this.UserEmail,
        FirstName : this.UserFirstName,
        LastName : this.UserSecondName,
        UserPassword : this.UserPassword,
      })
      .then(function() {
        
        that.renderer.setElementStyle(that.registerationPage.nativeElement,"visibility", "hidden");
        that.renderer.setElementStyle(that.loadingPage.nativeElement,"visibility", "visible");
        
                  setTimeout(() => {
                    that.renderer.setElementStyle(that.loadingPage.nativeElement,"visibility", "hidden");
                    that.navCtrl.setRoot(UserMenuPage);
                  } , 8000);
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    });


// Add a new document in collection "cities"

 
 
//   firebase.firestore().collection(`Users/${success.uid}`).get().then((UsersDataSnapshot) => {
//     UsersDataSnapshot.forEach((doc) => {
//       console.log(doc.id);
//     });
// });
// })




    

      

  }



   // External Links
   login(){
    this.navCtrl.setRoot(LoginPage);
  }
}
