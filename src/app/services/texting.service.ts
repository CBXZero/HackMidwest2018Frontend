import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class TextingService {

  constructor(private http: Http, private afAuth: AngularFireAuth) { 
    
  }

  sendMessages(title: string, eventId: string, friendsToSendTo: any) {
    this.http.post("https://localhost:5025/api/Twilio", {
      title: title,
      eventId: eventId,
      friendsToSendTo: friendsToSendTo
    }).subscribe();
  }
}
