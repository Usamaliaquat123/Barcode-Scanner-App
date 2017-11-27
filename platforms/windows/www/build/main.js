webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodegeneratorOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarcodegeneratorOptionsComponent = (function () {
    function BarcodegeneratorOptionsComponent(Platform, Contacts, BarcodeScanner) {
        this.Platform = Platform;
        this.Contacts = Contacts;
        this.BarcodeScanner = BarcodeScanner;
        console.log('Hello BarcodegeneratorOptionsComponent Component');
        this.text = 'Hello World';
        // this.Platform.ready().then(() => {
        //   this.Contacts.pickContact().then((ContactInfo)=>{
        //     console.log(ContactInfo.phoneNumbers);
        //    });
        // })
        // this.BarcodeScanner.encode(this.BarcodeScanner.Encode.,'Hi my name is usama').then((barcodeData) => {
        //   console.log(barcodeData);
        // })
    }
    BarcodegeneratorOptionsComponent.prototype.clickOnContact = function () {
        var _this = this;
        this.Platform.ready().then(function () {
            _this.Contacts.pickContact().then(function (ContactInfo) {
                var rest = ContactInfo.phoneNumbers.map(function (values) {
                    return values.value;
                });
                // this.phonenumbers =  ContactInfo.phoneNumbers;
                // this.getPhoneNumbers(this.phonenumbers);
                _this.BarcodeScanner.encode(_this.BarcodeScanner.Encode.PHONE_TYPE, rest).then(function (barcodeEncodeSuccess) {
                    console.log(barcodeEncodeSuccess);
                });
            });
        });
    };
    BarcodegeneratorOptionsComponent.prototype.getPhoneNumbers = function (phonenumbers) {
        for (var i = 0; i > 2; i++) {
            return console.log(i + ' ' + this.phonenumbers.values);
        }
    };
    BarcodegeneratorOptionsComponent.prototype.clickOnEmail = function () {
        this.BarcodeScanner.encode(this.BarcodeScanner.Encode.EMAIL_TYPE, 'inconnent12345@outlook.com').then(function (barcodeEncodeSuccess) {
            console.log(barcodeEncodeSuccess);
        });
    };
    BarcodegeneratorOptionsComponent.prototype.clickOnText = function () {
        this.BarcodeScanner.encode(this.BarcodeScanner.Encode.TEXT_TYPE, 'Hello uSAMA').then(function (barcodeEndcodeSuccess) {
            console.log(barcodeEndcodeSuccess);
        });
    };
    BarcodegeneratorOptionsComponent.prototype.clickOnSms = function () {
        this.BarcodeScanner.encode(this.BarcodeScanner.Encode.SMS_TYPE, 'jsahdjsahdjah').then(function (barcodeEncodeSuccess) {
            console.log(barcodeEncodeSuccess);
        });
    };
    return BarcodegeneratorOptionsComponent;
}());
BarcodegeneratorOptionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'barcodegenerator-options',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\components\barcodegenerator-options\barcodegenerator-options.html"*/'<ion-header  class="header-color-change-barcodegenerator-otions" swipeEnabled="True">\n  <ion-navbar >\n    <ion-buttons left>\n      <button color="dark" ion-button menuToggle>\n        <ion-icon color="light" name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n    <ion-title class="font-color-change-barcodegenerator-otions">Method</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content  class="no-scroll" style="background-image: url(./assets/imgs/background-home.jpeg);\nbackground-size: cover;\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-attachment: fixed;">\n  <div style="background-color:#2f2e2e;width:100%; height:100%; opacity:.8;">\n      <br>\n      <br>\n    <div style="color:aliceblue; text-align:center;letter-spacing:2px; font-size:12px;">\n        <p>What type of qrcode you want to generate...</p>\n    </div>\n    <br>\n  \n\n    <ion-grid >\n      <ion-row>\n        <ion-col style="width:100%; opacity:.5;" >\n          <div (click)="clickOnContact()" class="hover-effect-selector-home-main-page" style="text-align:center;padding:40% 20%; border:1px solid aliceblue;">\n              <img src="./assets/imgs/OtherImages/generate/contact.png" width="60" height="60" alt="">\n              <p style="color:aliceblue; letter-spacing:1px;">Contact</p>\n            </div>\n        </ion-col>\n        <ion-col style="opacity:.5;">\n          <div (click)="clickOnEmail()" class="hover-effect-selector-home-main-page" style="text-align:center;padding:40% 20%; border:1px solid aliceblue;">\n            <img src="./assets/imgs/OtherImages/generate/msg.png" width="60" height="60" alt="">\n            <p style="color:aliceblue; letter-spacing:1px;">Email</p>\n        </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n      <ion-col style="opacity:.5;">\n          <div (click)="clickOnText()" class="hover-effect-selector-home-main-page" style="text-align:center;padding:40% 20%; border:1px solid aliceblue;">\n              <img src="./assets/imgs/OtherImages/generate/text.png" width="60" height="60" alt="">\n              <p style="color:aliceblue; letter-spacing:1px;">Simple Text</p>\n            </div>\n      </ion-col>\n        <ion-col style="opacity:.5;">\n            <div (click)="clickOnSms()" class="hover-effect-selector-home-main-page" style="text-align:center;padding:40% 20%; border:1px solid aliceblue;">\n                <img src="./assets/imgs/OtherImages/generate/sms.png" width="60" height="60" alt="">\n                <p style="color:aliceblue; letter-spacing:1px;">Sms</p>\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    \n    \n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\components\barcodegenerator-options\barcodegenerator-options.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], BarcodegeneratorOptionsComponent);

//# sourceMappingURL=barcodegenerator-options.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserContent_home_main_home_main__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Authentication_login_login__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserContent_about_us_about_us__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__UserContent_feedback_feedback__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__UserContent_generate_code_generate_code__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__UserContent_account_setting_account_setting__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_bot_ai_chat_bot_ai__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UserMenuPage = (function () {
    function UserMenuPage(firebaseDatabase, navCtrl, navParams) {
        this.firebaseDatabase = firebaseDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__UserContent_home_main_home_main__["a" /* HomeMainPage */];
    }
    // Mananging Firebase Connections
    // Managing External Links
    UserMenuPage.prototype.ChatBotPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chat_bot_ai_chat_bot_ai__["a" /* ChatBotAiPage */]);
    };
    UserMenuPage.prototype.AccountSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__UserContent_account_setting_account_setting__["a" /* AccountSettingPage */]);
    };
    UserMenuPage.prototype.GenerateCode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__UserContent_generate_code_generate_code__["a" /* GenerateCodePage */]);
    };
    UserMenuPage.prototype.ScanCode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__UserContent_home_main_home_main__["a" /* HomeMainPage */]);
    };
    UserMenuPage.prototype.AboutUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__UserContent_about_us_about_us__["a" /* AboutUsPage */]);
    };
    UserMenuPage.prototype.FeedBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__UserContent_feedback_feedback__["a" /* FeedbackPage */]);
    };
    UserMenuPage.prototype.Logout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__Authentication_login_login__["a" /* LoginPage */]);
    };
    return UserMenuPage;
}());
UserMenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["n" /* Component */])({
        selector: 'page-user-menu',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\user-menu\user-menu.html"*/'<!-- Default:  style="max-width: 250px!important;" -->\n<ion-menu [content]="content">\n    <ion-header class="header-color-change-menu-page">\n      <ion-toolbar color="dark">\n        <ion-title style="text-align:center;"><p style="font-family: lato-regular;font-size:12px;letter-spacing:2px">Menu</p></ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content  class="no-scroll" style="background-color:#22242B;">\n\n      <div style="text-align:center; padding-top:10%;">\n          <img src="./assets/imgs/OtherImages/UserImage/1.png" width="75"   height="75">\n      </div>\n      <div  style="text-align:center; padding-top:1%;">\n          <button ion-button clear style="font-family: lato-regular;text-transform:none;letter-spacing:2px; background-color:#22242B; color:aliceblue">Usama Liaquat</button>       \n      </div>\n      <div  style="text-align:center; padding-top:15%;">\n          <button ion-button clear style="opacity:.6;font-family: lato-regular; font-size:12px;text-transform:none;letter-spacing:2px; background-color:#22242B; color:aliceblue" (click)="AccountSettings()">Account Settings</button>       \n      </div>\n      <div style="text-align:center;  padding-top:3%;">\n          <button ion-button clear style="opacity:.6;font-family: lato-regular;font-size:12px;text-transform:none;letter-spacing:2px; background-color:#22242B; color:aliceblue" (click)="GenerateCode()">Generate Code</button>             \n      </div>\n      <div style="text-align:center; padding-top:3%;">\n          <button ion-button clear style="opacity:.6;font-family: lato-regular;font-size:12px;text-transform:none;letter-spacing:2px; background-color:#22242B; color:aliceblue" (click)="ScanCode()">Scan Code</button>                     \n      </div>\n      <div style="text-align:center; padding-top:3%;">\n            <button ion-button clear style="opacity:.6;font-family: lato-regular;font-size:12px;text-transform:none;letter-spacing:2px; background-color:#22242B; color:aliceblue" (click)="ChatBotPage()">Chat with us</button>                     \n      </div>  \n      <div style="text-align:center; padding-top:3%;">\n          <button ion-button clear style="opacity:.6;font-family: lato-regular;font-size:12px;text-transform:none;letter-spacing:2px; background-color:#22242B; color:aliceblue" (click)="AboutUs()">About Us</button>                     \n      </div>\n      <div style="text-align:center; padding-top:3%;">\n          <button ion-button clear style="opacity:.6;font-family: lato-regular;font-size:12px;text-transform:none;letter-spacing:2px; background-color:#22242B; color:aliceblue" (click)="FeedBack()">FeedBack</button>                     \n      </div>\n      <div style="text-align:center; padding-top:3%;">\n          <button ion-button clear style="opacity:.6;font-family: lato-regular;font-size:12px;text-transform:none;letter-spacing:2px; background-color:#22242B; color:aliceblue" (click)="Logout()">Log out</button>                     \n      </div>\n \n    \n\n    </ion-content>\n  \n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n  \n  '/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\user-menu\user-menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* NavParams */]])
], UserMenuPage);

//# sourceMappingURL=user-menu.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserContent_user_menu_user_menu__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restore_password_restore_password__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_native__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Firebase Database

// Firebase Authentication




var LoginPage = (function () {
    function LoginPage(afAuth, navCtrl, db) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.db = db;
        __WEBPACK_IMPORTED_MODULE_7_ionic_native__["a" /* Keyboard */].disableScroll(true);
    }
    LoginPage.prototype.ScanIt = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(function (success) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__UserContent_user_menu_user_menu__["a" /* UserMenuPage */]);
        }).catch(function (err) { return console.log(err); });
    };
    // external links
    LoginPage.prototype.ForgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__restore_password_restore_password__["a" /* RestorePasswordPage */]);
    };
    LoginPage.prototype.RegisterPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\Authentication\login\login.html"*/'\n<ion-content style="background-color:#292B32;">\n    \n    <div style=" color: white;\n   position: absolute;\n   top: 0;\n   padding: 10vw;\n   text-align: center;\n   width: 100%;\n   margin: 0 auto;\n   z-index: 2;">\n     <!--App logo  -->\n       \n             <div style="text-align:center; margin-top: 25%;">\n                 <img src="./assets/imgs/app/1.png" width="140"height="140">\n            </div> \n        \n     <!-- login text box -->\n    <div style="margin-top:20%">\n        <p style="color:#727F89;font-size:12px; text-align:right;" (click)="ForgotPassword()">Forgot Password ?</p>\n         <div style="border: 3px solid #2C2E35; letter-spacing:2px;margin:auto; border-radius:12px; width:100%; background-color:#2C2E35;">\n           <div style="padding:2px;">\n               <ion-input [(ngModel)]="email" style="color:#727F89; letter-spacing:2px;font-family: lato-regular;" placeholder="name@example.com" type="email"></ion-input>\n           </div>\n           <hr>\n             <div style="padding:2px;">\n                 <ion-input [(ngModel)]="password" style="color:#727F89;letter-spacing:2px;font-family: lato-regular;" placeholder="*****" type="password"></ion-input>\n             </div>\n         </div>\n         <div style="text-align:center; margin-top:10%;">\n             <button ion-button style="width:50%; padding: 6%;font-family: lato-regular; letter-spacing:2px; background-color:#ED5564; border-radius:10px;" (click)="ScanIt()" type="submit">Scan Now</button>     \n         </div>\n     </div>\n\n     <div  style="text-align:center;">\n        <p style="color:#727F89; letter-spacing:2px;">If you don\'t have an account <button ion-button (click)="RegisterPage()" style=" margin-top:-1%; text-transform:none;" clear>Sign up</button></p>\n      </div>\n     \n   </div> \n   \n\n\n   <!-- Credits -->\n   </ion-content>\n   <ion-footer class="footer-background-color" style="background-color:#292B32;">\n       <ion-toolbar style="background-color:#292B32;">\n           <div  style="text-align:center;">\n               <p style="color:#727F89; letter-spacing:2px;">©2017 Ulcreative Softwares</p>\n             </div>\n       </ion-toolbar>\n     </ion-footer>'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\Authentication\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 231;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPreviousDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersPreviousDataPage = (function () {
    function UsersPreviousDataPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return UsersPreviousDataPage;
}());
UsersPreviousDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-users-previous-data',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\users-previous-data\users-previous-data.html"*/'\n<ion-header class="header-color-change-UsersPreviousData-page">\n\n  <ion-navbar>\n    <ion-title style="text-align:center;"><p style="font-size:12px;color:aliceblue;letter-spacing:2px;"></p>Your Previous Scans</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#2C2E35;">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\users-previous-data\users-previous-data.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], UsersPreviousDataPage);

//# sourceMappingURL=users-previous-data.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeMainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserContent_users_previous_data_users_previous_data__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeMainPage = (function () {
    function HomeMainPage(renderer, BarcodeScanner, navCtrl, navParams) {
        this.renderer = renderer;
        this.BarcodeScanner = BarcodeScanner;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeMainPage.prototype.ScanBarcode = function () {
        this.options = {
            showTorchButton: true,
            prompt: 'Place you code in QRcode/Barcode scanner... Ulcreative Softwares'
        };
        this.BarcodeScanner.scan(this.options).then(function (barcodeData) {
            console.log(barcodeData.text);
        });
    };
    HomeMainPage.prototype.usersPreviousData = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__UserContent_users_previous_data_users_previous_data__["a" /* UsersPreviousDataPage */]);
        console.log('klasjdkaj');
    };
    return HomeMainPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])("homeComponent"),
    __metadata("design:type", Object)
], HomeMainPage.prototype, "home", void 0);
HomeMainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-home-main',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\home-main\home-main.html"*/'<ion-header  class="header-color-change-home-page" swipeEnabled="True">\n  <ion-navbar >\n    <ion-buttons left>\n      <button color="dark" ion-button menuToggle>\n        <ion-icon color="light" name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right (click)="usersPreviousData()">\n      <button ion-button>\n          <img  style="margin-top:3%;" src="./assets/imgs/OtherImages/OlderData/1.png" width="24" height="24">\n      </button>\n   \n    </ion-buttons>\n    <ion-title class="font-color-change-home-page">Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="no-scroll" style="background-image: url(./assets/imgs/background-home.jpeg);\nbackground-size: cover;\nbackground-position: center;\nbackground-repeat: no-repeat;\nbackground-attachment: fixed;">\n  <div style="background-color:#2f2e2e;width:100%; height:100%; opacity:.8;">\n    <home-component style="visibility:visible;"></home-component>\n    \n    \n  </div>\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\home-main\home-main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavParams */]])
], HomeMainPage);

//# sourceMappingURL=home-main.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return FeedbackPage;
}());
FeedbackPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feedback',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\feedback\feedback.html"*/'<ion-header  class="header-color-change-feedback" swipeEnabled="True">\n    <ion-navbar >\n      <ion-buttons left>\n        <button color="dark" ion-button menuToggle>\n          <ion-icon color="light" name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title class="font-color-change-feedback">FeedBack</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content style="background-color:#2C2E35;">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\feedback\feedback.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], FeedbackPage);

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsPage = (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    return AboutUsPage;
}());
AboutUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about-us',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\about-us\about-us.html"*/'<ion-header  class="header-color-change-about-us" swipeEnabled="True">\n    <ion-navbar >\n      <ion-buttons left>\n        <button color="dark" ion-button menuToggle>\n          <ion-icon color="light" name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title class="font-color-change-about-us">FeedBack</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content style="background-color:#2C2E35;">\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\about-us\about-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], AboutUsPage);

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GenerateCodePage = (function () {
    function GenerateCodePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GenerateCodePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GenerateCodePage');
    };
    return GenerateCodePage;
}());
GenerateCodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-generate-code',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\generate-code\generate-code.html"*/'<!--\n  Generated template for the GenerateCodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>GenerateCode</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\generate-code\generate-code.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], GenerateCodePage);

//# sourceMappingURL=generate-code.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountSettingPage = (function () {
    function AccountSettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return AccountSettingPage;
}());
AccountSettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account-setting',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\account-setting\account-setting.html"*/'<ion-header  class="header-color-change-accountSettings-page" swipeEnabled="True">\n    <ion-navbar >\n      <ion-buttons left>\n        <button color="dark" ion-button menuToggle>\n          <ion-icon color="light" name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title class="font-color-change-accountSettings-page">Account Settings</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content style="background-color:#2C2E35;">\n    \n  </ion-content>'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\account-setting\account-setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], AccountSettingPage);

//# sourceMappingURL=account-setting.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBotAiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_chatservice_chatservice__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_scan__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_scan__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatBotAiPage = (function () {
    function ChatBotAiPage(chat, ngZone, platform, navCtrl, navParams) {
        this.chat = chat;
        this.ngZone = ngZone;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatBotAiPage.prototype.ngOnInit = function () {
        this.messages = this.chat.conversation.asObservable()
            .scan(function (acc, val) { return acc.concat(val); });
    };
    ChatBotAiPage.prototype.sendMessage = function (UserQuestion) {
        this.chat.converse(UserQuestion);
        this.UserQuestion = '';
    };
    return ChatBotAiPage;
}());
ChatBotAiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-chat-bot-ai',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\chat-bot-ai\chat-bot-ai.html"*/'<ion-header  class="header-color-change-chat-page" swipeEnabled="True">\n  <ion-navbar >\n    <ion-buttons left>\n      <button color="dark" ion-button menuToggle>\n        <ion-icon color="light" name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title class="font-color-change-chat-page">Chat Bot</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content style="background-color:#2C2E35;">\n  \n  <!-- <input ion-input type="text" [(ngModel)]="question">\n  \n    <button ion-button (click)="ask(question)">\n      Ask\n    </button> -->\n<!--   \n    <div class="Rectangle1">\n       sadsadasd\n    </div>\n    -->\n\n\n\n\n<!-- <div *ngFor="let message of messages | async">\n    <div  *ngIf="message.sentBy == \'user\'">\n        <ion-list style="background-color:#2C2E35;"> -->\n            <!-- text-wrap is used to break line into multiple lines -->\n          <!-- <ion-item text-wrap style="background-color:#2C2E35;">\n                <ion-avatar item-end>\n                  <img style="background-color:#15151E;" src="./assets/imgs/OtherImages/UserImage/1.png">\n                </ion-avatar>\n                <div  class="user" >\n                    {{ message.content }}\n                </div>\n              </ion-item>\n            </ion-list>\n    </div> -->\n    <!-- <div *ngIf="message.sentBy == \'bot\'">\n        <ion-list style="background-color:#2C2E35;"> -->\n            <!-- text-wrap is used to break line into multiple lines -->\n              <!-- <ion-item text-wrap style="background-color:#2C2E35;">\n                <ion-avatar item-start>\n                  <img style="background-color:#15151E;" src="./assets/imgs/OtherImages/UserImage/1.png">\n                </ion-avatar>\n                <div  class="bot" >\n                    {{ message.content }}\n                </div>\n              </ion-item>\n            </ion-list>\n    </div>\n    \n</div>  -->\n\n\n\n<div *ngFor="let message of messages | async">\n  <div class="message" [ngClass]="{\'from\': message.sentBy == \'bot\',\n                                     \'to\' : message.sentBy == \'user\'}"> \n            {{ message.content}}\n     </div>\n</div>\n\n\n\n\n</ion-content>\n\n<div class="footer-chatBot"></div>\n  <ion-footer  class="footer-background-color-chatBot" style="background-color:#292B32;">\n      <ion-toolbar style="background-color:#292B32;">\n        <ion-row class="message_row" style="background-color:#292B32;">\n          <ion-col col-9 style="background-color:#292B32;">\n            <ion-item no-lines style="background-color:#292B32">\n              <ion-input style="background-color:#292B32; color:aliceblue; font-size:13px;  letter-spacing:3px;font-family: lato-regular; " type="text" placeholder="Message" [(ngModel)]="UserQuestion"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-3>\n            <button ion-button icon-end ion-button clear style="color:#ED5564;text-transform:none;" (click)="sendMessage(UserQuestion)" [disabled]="question === \'\'">\n            Send\n            <ion-icon name="ios-send-outline"></ion-icon>\n          </button>\n           \n          </ion-col>\n        </ion-row>\n      </ion-toolbar>\n    </ion-footer>'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\UserContent\chat-bot-ai\chat-bot-ai.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_chatservice_chatservice__["a" /* ChatserviceProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavParams */]])
], ChatBotAiPage);

//# sourceMappingURL=chat-bot-ai.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Message */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enviroment__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Message = (function () {
    function Message(content, sentBy) {
        this.content = content;
        this.sentBy = sentBy;
    }
    return Message;
}());

var ChatserviceProvider = (function () {
    function ChatserviceProvider(platform) {
        this.platform = platform;
        this.conversation = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        platform.ready().then(function () {
            ApiAIPromises.init({
                clientAccessToken: __WEBPACK_IMPORTED_MODULE_1__enviroment__["a" /* enviroment */].dialogflow.angularBot
            })
                .then(function (result) { return console.log(result); });
        });
    }
    // Send and recieve message via dialogFlow
    ChatserviceProvider.prototype.converse = function (msg) {
        var _this = this;
        var userMessage = new Message(msg, 'user');
        this.update(userMessage);
        return ApiAIPromises.requestText({
            query: msg
        })
            .then(function (_a) {
            var speech = _a.result.fulfillment.speech;
            var botMessage = new Message(speech, 'bot');
            _this.update(botMessage);
        });
    };
    // Add Message to source
    ChatserviceProvider.prototype.update = function (msg) {
        this.conversation.next([msg]);
    };
    return ChatserviceProvider;
}());
ChatserviceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* Platform */]])
], ChatserviceProvider);

//# sourceMappingURL=chatservice.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enviroment; });
var enviroment = {
    config: {
        apiKey: "AIzaSyDCadZIK5rj9SLp0alXt83dT8aDalvqrVg",
        authDomain: "iqr-scanner-app-ulcreativesoft.firebaseapp.com",
        databaseURL: "https://iqr-scanner-app-ulcreativesoft.firebaseio.com",
        projectId: "iqr-scanner-app-ulcreativesoft",
        storageBucket: "iqr-scanner-app-ulcreativesoft.appspot.com",
        messagingSenderId: "248660387556"
    },
    dialogflow: {
        angularBot: '7b87308ff4064b0099a6a2f65bd1385e'
    }
};
//# sourceMappingURL=enviroment.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestorePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestorePasswordPage = (function () {
    function RestorePasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RestorePasswordPage.prototype.Restore = function () {
        console.log('Restore Trigger');
    };
    return RestorePasswordPage;
}());
RestorePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-restore-password',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\Authentication\restore-password\restore-password.html"*/'\n<ion-header class="header-restore-password">\n\n  <ion-navbar >\n    <ion-title class="forget-style-color">Forget Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color:#292B32;">\n\n    <div style=" color: white;\n    position: absolute;\n    top: 0;\n    padding: 10vw;\n    text-align: center;\n    width: 100%;\n    margin: 0 auto;\n    z-index: 2;">\n\n\n      <div style="padding-top: 100px;">\n          <img style="opacity:.4;" src="./assets/imgs/OtherImages/RestorePass/1.png" width="300" height="300" alt="You Internet Slow">\n          <br>\n   \n            <p style="font-family:lato-regular; color:#727F89; font-size:15px; ">Enter your email that you want to restore...</p>\n      \n            <br>\n            <div style="border: 3px solid #2C2E35; letter-spacing:2px;margin:auto; border-radius:12px; width:100%; background-color:#2C2E35;">\n            <ion-input style="color:#727F89; letter-spacing:2px;font-family: lato-regular;" placeholder="name@example.com" type="text"></ion-input>\n              </div>\n\n\n      </div>\n     <div style="text-align:center; margin-top:10%;">\n                <button ion-button (click)="Restore()" style="width:50%; padding: 6%; text-transform:none; font-family: lato-regular; letter-spacing:2px; background-color:#ED5564; border-radius:10px;" type="submit">Restore Now</button>     \n            </div>\n </div>\n</ion-content>\n\n  <!-- Credits -->\n\n<ion-footer class="footer-background-color" style="background-color:#292B32;">\n    <ion-toolbar style="background-color:#292B32;">\n        <div  style="text-align:center;">\n            <p style="color:#727F89; letter-spacing:2px;">©2017 Ulcreative Softwares</p>\n          </div>\n    </ion-toolbar>\n  </ion-footer>'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\Authentication\restore-password\restore-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], RestorePasswordPage);

//# sourceMappingURL=restore-password.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserContent_user_menu_user_menu__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// this import uses AngularFire2 Version ^5.0.0-rc.3 


// /////////////////////////////////////////////////////////




var RegisterPage = (function () {
    // /////////////////////////////////////
    function RegisterPage(afDatabase, afAuth, renderer, navCtrl, navParams) {
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.Gender = function () {
    };
    RegisterPage.prototype.registerNow = function () {
        var _this = this;
        // Create user with email ansd password
        this.afAuth.auth.createUserWithEmailAndPassword(this.UserEmail, this.UserPassword).then(function (success) {
            _this.afDatabase.database.ref("AllUsersInformation/" + _this.UserFirstName + '' + _this.UserSecondName).set({
                FirstName: _this.UserFirstName,
                LastName: _this.UserSecondName,
                // Gender : this.UserGender,
                Email: _this.UserEmail,
                Password: _this.UserPassword
            }).then(function () {
                _this.renderer.setElementStyle(_this.registerationPage.nativeElement, "visibility", "hidden");
                _this.renderer.setElementStyle(_this.loadingPage.nativeElement, "visibility", "visible");
                setTimeout(function () {
                    _this.renderer.setElementStyle(_this.loadingPage.nativeElement, "visibility", "hidden");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__UserContent_user_menu_user_menu__["a" /* UserMenuPage */]);
                }, 8000);
            }).catch(function (err) {
                console.log(err.Message);
            });
        }).catch(function (err) { return console.log(err); });
    };
    // External Links
    RegisterPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_14" /* ViewChild */])('RegisterationPage'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "registerationPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_14" /* ViewChild */])('LoadingPage'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "loadingPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_14" /* ViewChild */])('footer'),
    __metadata("design:type", Object)
], RegisterPage.prototype, "footerPage", void 0);
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\Authentication\register\register.html"*/'\n<ion-content >\n        <div #LoadingPage style="visibility:hidden;" class="local-body">\n            <p style="color:aliceblue;margin-top:35%; font-size:22px; text-align:center;letter-spacing:4px;">Wait a sec...</p>\n                <div class="waves">\n        </div>\n        </div>\n\n\n      \n                <div #RegisterationPage  style=" color: white;\n                position: absolute;\n                top: 0;\n                padding: 10vw;\n                text-align: center;\n                width: 100%;\n                height:100%;\n                background: #292B32;\n                margin: 0 auto;\n                z-index: 2;">\n                  <!--App logo  -->\n                    \n                          <div style="text-align:center; margin-top: 20%;">\n                              <img src="./assets/imgs/app/1.png" width="140"height="140">\n                         </div>  \n                     \n                  <!-- login text box -->\n                  <div style="margin-top:10%">\n                      <div style="border: 3px solid #2C2E35; letter-spacing:2px;margin:auto; border-radius:12px; width:100%; background-color:#2C2E35;">\n                        <div style="padding:2px;">\n                            <ion-input style="color:#727F89; letter-spacing:2px;font-family: lato-regular;" [(ngModel)]="UserFirstName"placeholder="your first name" type="text"></ion-input>\n                        </div>\n                        <hr>\n                          <div style="padding:2px;">\n                              <ion-input style="color:#727F89;letter-spacing:2px;font-family: lato-regular;"[(ngModel)]="UserSecondName" placeholder="your last name" type="text"></ion-input>\n                          </div>\n                          <hr>\n                          <div style="padding:2px;">\n                                 <ion-input style="color:#727F89;letter-spacing:2px;font-family: lato-regular;" [(ngModel)]="UserEmail"placeholder="name@example.com" type="email"></ion-input>\n                             </div>\n                             <hr>\n                             <div style="padding:2px;">\n                                     <ion-input style="color:#727F89;letter-spacing:2px;font-family: lato-regular;" [(ngModel)]="UserPassword"placeholder="*****" type="password"></ion-input>\n                             </div>\n                      </div>\n                      <div style="text-align:center; margin-top:10%;">\n                             <button ion-button (click)="registerNow()" style="width:50%; padding: 6%; text-transform:none; font-family: lato-regular; letter-spacing:2px; background-color:#ED5564; border-radius:10px;" type="submit">Register Now</button>     \n                         </div>\n                  </div>\n               <!-- <ion-select [(ngModel)]="UserGender" (ionChange)="Gender();"  style="max-width:100%; background-color:transparent; color:#FFFFFF;" interface="action-sheet" placeholder="Select Your Gender">\n                                <ion-option value="Male">Male</ion-option>\n                                <ion-option value="Female">Female</ion-option>\n                                <ion-option value="Other">Other</ion-option>\n                              \n                               </ion-select> -->\n                   \n             \n             \n                  <div  style="text-align:center;">\n                         <p style="color:#727F89; letter-spacing:2px;">If you already have an account <button ion-button (click)="login()" style=" margin-top:-1%; text-transform:none;" clear>Sign in</button></p>\n                       </div>\n                </div>   \n          \n    \n   <!-- Credits -->\n   </ion-content>\n \n\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\pages\Authentication\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* NavParams */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(487);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_contacts__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_barcodegenerator_options_barcodegenerator_options__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_page_home_page__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_UserContent_users_previous_data_users_previous_data__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_UserContent_home_main_home_main__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_qr_scanner__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_UserContent_feedback_feedback__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_UserContent_about_us_about_us__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_UserContent_generate_code_generate_code__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_UserContent_account_setting_account_setting__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_UserContent_chat_bot_ai_chat_bot_ai__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_UserContent_user_menu_user_menu__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_Authentication_restore_password_restore_password__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_Authentication_register_register__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_Authentication_login_login__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_component__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__enviroment__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_chatservice_chatservice__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_17__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_Authentication_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_Authentication_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_Authentication_restore_password_restore_password__["a" /* RestorePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_UserContent_home_main_home_main__["a" /* HomeMainPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_UserContent_user_menu_user_menu__["a" /* UserMenuPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_UserContent_chat_bot_ai_chat_bot_ai__["a" /* ChatBotAiPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_UserContent_account_setting_account_setting__["a" /* AccountSettingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_UserContent_generate_code_generate_code__["a" /* GenerateCodePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_UserContent_about_us_about_us__["a" /* AboutUsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_UserContent_feedback_feedback__["a" /* FeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_UserContent_users_previous_data_users_previous_data__["a" /* UsersPreviousDataPage */],
            __WEBPACK_IMPORTED_MODULE_2__components_home_page_home_page__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_1__components_barcodegenerator_options_barcodegenerator_options__["a" /* BarcodegeneratorOptionsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_18_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_21_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_25__enviroment__["a" /* enviroment */].config),
            __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_18_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_15__pages_Authentication_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_Authentication_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_Authentication_restore_password_restore_password__["a" /* RestorePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_UserContent_home_main_home_main__["a" /* HomeMainPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_UserContent_user_menu_user_menu__["a" /* UserMenuPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_UserContent_chat_bot_ai_chat_bot_ai__["a" /* ChatBotAiPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_UserContent_account_setting_account_setting__["a" /* AccountSettingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_UserContent_generate_code_generate_code__["a" /* GenerateCodePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_UserContent_about_us_about_us__["a" /* AboutUsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_UserContent_feedback_feedback__["a" /* FeedbackPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_UserContent_users_previous_data_users_previous_data__["a" /* UsersPreviousDataPage */],
            __WEBPACK_IMPORTED_MODULE_2__components_home_page_home_page__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_1__components_barcodegenerator_options_barcodegenerator_options__["a" /* BarcodegeneratorOptionsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_17__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_18_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_26__providers_chatservice_chatservice__["a" /* ChatserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_contacts__["a" /* Contacts */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__barcodegenerator_options_barcodegenerator_options__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HomePageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var HomePageComponent = (function () {
    function HomePageComponent(navCtrl, renderer, BarcodeScanner) {
        this.navCtrl = navCtrl;
        this.renderer = renderer;
        this.BarcodeScanner = BarcodeScanner;
        console.log('Hello HomePageComponent Component');
        this.text = 'Hello World';
    }
    HomePageComponent.prototype.ScanBarcode = function () {
        this.options = {
            showTorchButton: true,
            prompt: 'Place you code in QRcode/Barcode scanner... Ulcreative Softwares'
        };
        this.BarcodeScanner.scan(this.options).then(function (barcodeData) {
            console.log(barcodeData.text);
        });
    };
    HomePageComponent.prototype.encodeQrcode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__barcodegenerator_options_barcodegenerator_options__["a" /* BarcodegeneratorOptionsComponent */]);
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'home-component',template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\components\home-page\home-page.html"*/'<!-- Barcode Scanner -->\n<div class="hover-effect-selector-home-main-page" style="height:45%;" (click)="ScanBarcode()">\n  <!-- image logo of barcode OR qrcode scanner -->\n  <div style="text-align:center;">\n      <img style="margin-top:15%;" src="./assets/imgs/OtherImages/Homepage/2.png" width="130" heigt="130">    \n      <br>\n      <p style="color:aliceblue; letter-spacing:1px;">Barcode/QR-code Scanner</p>   \n  </div>\n</div>\n<hr style="color:aliceblue;opacity:.5;border: 1px solid aliceblue;">\n<!-- Barcode Generator -->\n<div class="hover-effect-selector-home-main-page" style="height:50%;" (click)="encodeQrcode()">\n    <div style="text-align:center;">\n        <img style="margin-top:20%;" src="./assets/imgs/OtherImages/Homepage/1.png" width="110" heigt="110">       \n      <p style="color:aliceblue;letter-spacing:1px;">Barcode/QR-code Generator</p>\n      \n    </div>\n    <div style="margin-top:30%;text-align:center; color:aliceblue;">\n      <p>©2017 Ulcreative Softwares</p>\n    </div>\n</div>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\components\home-page\home-page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_core__["_0" /* Renderer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
], HomePageComponent);

//# sourceMappingURL=home-page.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_barcodegenerator_options_barcodegenerator_options__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_native__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__components_barcodegenerator_options_barcodegenerator_options__["a" /* BarcodegeneratorOptionsComponent */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_5_ionic_native__["a" /* Keyboard */].disableScroll(true);
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Software Developer\Desktop\Ionic Laern\AngularFire2\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[482]);
//# sourceMappingURL=main.js.map