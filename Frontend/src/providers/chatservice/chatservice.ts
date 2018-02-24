
import { Platform } from 'ionic-angular';
import { enviroment } from './../../enviroment';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Injectable } from '@angular/core';

export class Message{
  constructor(public content:string , public sentBy:string) { }
}
declare var ApiAIPromises: any;
@Injectable()
export class ChatserviceProvider {
 

  conversation = new BehaviorSubject<Message[]>([]);
  constructor(public platform : Platform) { 
    platform.ready().then(() => {
     ApiAIPromises.init({
        clientAccessToken: enviroment.dialogflow.angularBot
      })
      .then((result) =>  console.log(result))
    });
  }
  

  // Send and recieve message via dialogFlow

  converse(msg:string){
    const userMessage = new Message(msg , 'user');
    this.update(userMessage);
    
     return  ApiAIPromises.requestText({
                          query: msg
                       })
                         .then(({result: {fulfillment: {speech}}}) => {
                          const botMessage = new Message(speech, 'bot');
                          this.update(botMessage);
                      });
  }
  
  // Add Message to source
  update(msg: Message){
    this.conversation.next([msg]);
  }

}

