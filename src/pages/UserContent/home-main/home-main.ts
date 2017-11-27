import { UsersPreviousDataPage } from './../../UserContent/users-previous-data/users-previous-data';
import { BarcodeScanner , BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { Component, Renderer, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@Component({
  selector: 'page-home-main',
  templateUrl: 'home-main.html',
})
export class HomeMainPage {
  options: BarcodeScannerOptions;
  @ViewChild("homeComponent") home: any;
  constructor(public renderer : Renderer,public BarcodeScanner:BarcodeScanner,public navCtrl: NavController, public navParams: NavParams) {
 
    

  }
  


  ScanBarcode(){
    this.options = {
      showTorchButton : true,
      prompt : 'Place you code in QRcode/Barcode scanner... Ulcreative Softwares'
    }

    this.BarcodeScanner.scan(this.options).then((barcodeData) => {
      console.log(barcodeData.text);
      firebase.auth().onAuthStateChanged((data ) => {
        firebase.firestore().collection('Scans').doc(`${data.uid}`).update({
          ScannerData : barcodeData.text,
          ScannerFormat : barcodeData.format,
        }).then((success) => {
          console.log(success);
        }).catch(err => console.log(err));
      })
     
    })
  }




  
  usersPreviousData(){
  this.navCtrl.push(UsersPreviousDataPage);
  console.log('klasjdkaj'); 
 
}
}
