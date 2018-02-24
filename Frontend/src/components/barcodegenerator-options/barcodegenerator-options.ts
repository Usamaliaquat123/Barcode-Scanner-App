

import { Platform, AlertController } from 'ionic-angular';

import { BarcodeScanner ,BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { Contacts} from '@ionic-native/contacts';
@Component({
  selector: 'barcodegenerator-options',
  templateUrl: 'barcodegenerator-options.html'
})
export class BarcodegeneratorOptionsComponent {

  text: string;

  constructor(public alertCtrl : AlertController,public Platform:Platform,public Contacts:Contacts,public BarcodeScanner: BarcodeScanner) {
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
phonenumbers : Array<any>;
  clickOnContact(){
    this.Platform.ready().then(() => {
      this.Contacts.pickContact().then((ContactInfo) => {
        var rest = ContactInfo.phoneNumbers.map((values) => {
          return values.value;
        });

     
        // this.phonenumbers =  ContactInfo.phoneNumbers;
        // this.getPhoneNumbers(this.phonenumbers);
          this.BarcodeScanner.encode(this.BarcodeScanner.Encode.PHONE_TYPE,rest).then((barcodeEncodeSuccess) => {
            console.log(barcodeEncodeSuccess);
          });
        
       
      })
    })
  }
  getPhoneNumbers(phonenumbers){
      for(let i = 0; i > 2 ; i ++){
        return console.log(i + ' ' + this.phonenumbers.values);
      }
  }
message : string;
  clickOnEmail(){
    this.message = '';
    this.alertCtrl.create({
      title: '',
      message : this.message,
      inputs : [
        {
          placeholder : 'Type Your email',
          name : 'email',
          type: 'email'
        }
      ],
      buttons: [
        {
          text : 'Generate QRcode',
          handler : data => {
            if(data.email == ''){
              return false;
            }else{
              this.BarcodeScanner.encode(this.BarcodeScanner.Encode.EMAIL_TYPE,data.email).then((barcodeEncodeSuccess)=>{
                console.log(barcodeEncodeSuccess); 
              });
            }

          }
        }
      ]
    }).present();
 
  }
  dataOfText : string;
  clickOnText(){
    this.message = '';
    this.alertCtrl.create({
      title: '',
      message : this.message,
      inputs : [
        {
          placeholder : 'Type Your text',
          name : 'simpletext',
          type: 'text'
        }
      ],
      buttons: [
        {
          text : 'Generate QRcode',
          handler : data => {
            if(data.simpletext == ''){
              return false;
            }else{
              this.BarcodeScanner.encode(this.BarcodeScanner.Encode.TEXT_TYPE,data.simpletext).then((barcodeEncodeSuccess)=>{
                console.log(barcodeEncodeSuccess); 
              });
            }

          }
        }
      ]
    }).present();
    
  }


  clickOnSms(){
   this.message = '';
   this.alertCtrl.create({
     title: '',
     message : this.message,
     inputs : [
       {
         placeholder : 'Type Your sms',
         name : 'sms',
         type: 'text'
       }
     ],
     buttons: [
       {
         text : 'Generate QRcode',
         handler : data => {
           if(data.sms == ''){
             return false;
           }else{
             this.BarcodeScanner.encode(this.BarcodeScanner.Encode.SMS_TYPE,data.sms).then((barcodeEncodeSuccess)=>{
               console.log(barcodeEncodeSuccess); 
             });
           }

         }
       }
     ]
   }).present();
    
  }
}
