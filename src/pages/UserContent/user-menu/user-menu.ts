import { HomeMainPage } from './../../UserContent/home-main/home-main';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { LoginPage } from './../../Authentication/login/login';
import { AboutUsPage } from './../../UserContent/about-us/about-us';
import { FeedbackPage } from './../../UserContent/feedback/feedback';
import { GenerateCodePage } from './../../UserContent/generate-code/generate-code';
import { AccountSettingPage } from './../../UserContent/account-setting/account-setting';
import { ChatBotAiPage } from './../chat-bot-ai/chat-bot-ai';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-user-menu',
  templateUrl: 'user-menu.html',
})
export class UserMenuPage {
  rootPage = HomeMainPage;
  constructor(public firebaseDatabase : AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  }


  // Mananging Firebase Connections





























  // Managing External Links
  ChatBotPage(){
    this.navCtrl.push(ChatBotAiPage);
  }

  AccountSettings(){
    this.navCtrl.push(AccountSettingPage);
  }
  GenerateCode(){
    this.navCtrl.push(GenerateCodePage)
  }
  ScanCode(){
    this.navCtrl.push(HomeMainPage)
  }
  AboutUs(){
    this.navCtrl.push(AboutUsPage)
  }
  FeedBack(){
      this.navCtrl.push(FeedbackPage);
  }
  Logout(){
    this.navCtrl.push(LoginPage);
  }
}
