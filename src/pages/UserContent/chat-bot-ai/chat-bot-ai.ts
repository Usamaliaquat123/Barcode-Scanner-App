import { ChatserviceProvider , Message} from './../../../providers/chatservice/chatservice';
import { Observable } from 'rxjs/Observable';
import { Component,NgZone , OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Platform} from "ionic-angular";
import 'rxjs/add/operator/scan'

declare var ApiAIPromises: any;
@Component({
  selector: 'page-chat-bot-ai',
  templateUrl: 'chat-bot-ai.html',
})
export class ChatBotAiPage implements OnInit{
  
  UserQuestion : string;
  messages : Observable<Message[]>;
  constructor(public chat : ChatserviceProvider,public ngZone : NgZone,public platform : Platform,public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
          .scan((acc , val) => acc.concat(val));
  }
  sendMessage(UserQuestion){
    this.chat.converse(UserQuestion);
    this.UserQuestion='';
  }

  // ask(question) {
  

  //  this.ngZone.run(()=>{
  //    this.questionss.push(question);
  //    console.log(question);
  //  })
  //   ApiAIPromises.requestText({
  //     query: question
  //   })
  //   .then(({result: {fulfillment: {speech}}}) => {
  //      this.ngZone.run(()=> {
  //         this.answers.push(speech);
  //         console.log(speech);
          
  //      });
  //   })
  // }
  
}
