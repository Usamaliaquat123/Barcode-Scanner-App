import { BarcodegeneratorOptionsComponent } from './../barcodegenerator-options/barcodegenerator-options';
import { NavController } from 'ionic-angular';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Component, Renderer } from '@angular/core';
/**
 * Generated class for the HomePageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-component',
  templateUrl: 'home-page.html'
})
export class HomePageComponent {

  text: string;
  options: BarcodeScannerOptions;
  constructor(public navCtrl: NavController,public renderer : Renderer,public BarcodeScanner : BarcodeScanner) {
    console.log('Hello HomePageComponent Component');
    this.text = 'Hello World';
  }




  ScanBarcode(){
    this.options = {
      showTorchButton : true,
      prompt : 'Place you code in QRcode/Barcode scanner... Ulcreative Softwares'
    }

    this.BarcodeScanner.scan(this.options).then((barcodeData) => {
      console.log(barcodeData.text);
    })
  }

  encodeQrcode(){
    this.navCtrl.push(BarcodegeneratorOptionsComponent);
  }
}
