import { Contacts } from '@ionic-native/contacts';
import { BarcodegeneratorOptionsComponent } from './../components/barcodegenerator-options/barcodegenerator-options';
import { ComponentsModule } from './../components/components.module';
import { HomePageComponent } from './../components/home-page/home-page';
import { UsersPreviousDataPage } from './../pages/UserContent/users-previous-data/users-previous-data';
import { HomeMainPage } from './../pages/UserContent/home-main/home-main';
import { QRScanner } from '@ionic-native/qr-scanner';
import { FeedbackPage } from './../pages/UserContent/feedback/feedback';
import { AboutUsPage } from './../pages/UserContent/about-us/about-us';
import { GenerateCodePage } from './../pages/UserContent/generate-code/generate-code';
import { AccountSettingPage } from './../pages/UserContent/account-setting/account-setting';

import { ChatBotAiPage } from './../pages/UserContent/chat-bot-ai/chat-bot-ai';
import { UserMenuPage } from './../pages/UserContent/user-menu/user-menu';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RestorePasswordPage } from './../pages/Authentication/restore-password/restore-password';
import { RegisterPage } from './../pages/Authentication/register/register';
import { LoginPage } from './../pages/Authentication/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Component } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFirestoreModule } from "angularfire2/firestore"
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { MyApp } from './app.component';
import { enviroment } from "../enviroment";
import { ChatserviceProvider } from '../providers/chatservice/chatservice';




@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    RestorePasswordPage,
    HomeMainPage,
    UserMenuPage,
    ChatBotAiPage,
    AccountSettingPage,
    GenerateCodePage,
    AboutUsPage,
    FeedbackPage,
    UsersPreviousDataPage,
    HomePageComponent,
    BarcodegeneratorOptionsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(enviroment.config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    RestorePasswordPage,
    HomeMainPage,
    UserMenuPage,
    ChatBotAiPage,
    AccountSettingPage,
    GenerateCodePage,
    AboutUsPage,
    FeedbackPage,
    UsersPreviousDataPage,
    HomePageComponent,
    BarcodegeneratorOptionsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatserviceProvider,
    QRScanner,
    BarcodeScanner,
    Contacts
  ]
})
export class AppModule {}
