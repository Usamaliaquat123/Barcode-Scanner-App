import { FeedbackPage } from './../pages/UserContent/feedback/feedback';
import { UsersPreviousDataPage } from './../pages/UserContent/users-previous-data/users-previous-data';
import { BarcodegeneratorOptionsComponent } from './../components/barcodegenerator-options/barcodegenerator-options';
import { HomeMainPage } from './../pages/UserContent/home-main/home-main';
import { ChatBotAiPage } from './../pages/UserContent/chat-bot-ai/chat-bot-ai';
import { UserMenuPage } from './../pages/UserContent/user-menu/user-menu';

import { RestorePasswordPage } from './../pages/Authentication/restore-password/restore-password';
import { RegisterPage } from './../pages/Authentication/register/register';
import { LoginPage } from './../pages/Authentication/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from "ionic-native";

import firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = FeedbackPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


    firebase.initializeApp({
      apiKey: "AIzaSyDCadZIK5rj9SLp0alXt83dT8aDalvqrVg",
      authDomain: "iqr-scanner-app-ulcreativesoft.firebaseapp.com",
      databaseURL: "https://iqr-scanner-app-ulcreativesoft.firebaseio.com",
      projectId: "iqr-scanner-app-ulcreativesoft",
      storageBucket: "iqr-scanner-app-ulcreativesoft.appspot.com",
      messagingSenderId: "248660387556"
    })



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    Keyboard.disableScroll(true);
  }
}

